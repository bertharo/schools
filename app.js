// Parent-Focused OUSD School Finder
class OUSDSchoolFinder {
    constructor() {
        this.currentFilters = {
            schoolType: 'all',
            minRating: 4.0,
            sortBy: 'rating'
        };
        this.currentView = 'grid';
        this.selectedSchool = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialData();
        this.renderSchools();
        this.optimizeForMobile();
    }

    setupEventListeners() {
        // Filter controls
        const schoolTypeFilter = document.getElementById('school-type-filter');
        const ratingFilter = document.getElementById('rating-filter');
        const sortBy = document.getElementById('sort-by');
        
        if (schoolTypeFilter) {
            schoolTypeFilter.addEventListener('change', (e) => {
                this.currentFilters.schoolType = e.target.value;
                this.renderSchools();
            });
        }
        
        if (ratingFilter) {
            ratingFilter.addEventListener('change', (e) => {
                this.currentFilters.minRating = parseFloat(e.target.value);
                this.renderSchools();
            });
        }
        
        if (sortBy) {
            sortBy.addEventListener('change', (e) => {
                this.currentFilters.sortBy = e.target.value;
                this.renderSchools();
            });
        }

        // View toggle
        const viewBtns = document.querySelectorAll('.view-btn');
        viewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.currentView = e.target.dataset.view;
                this.updateViewToggle();
                this.renderSchools();
            });
        });

        // Tab switching
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
    }

    loadInitialData() {
        console.log('OUSD School Finder initialized for parents');
    }

    renderSchools() {
        const schoolsGrid = document.getElementById('schools-grid');
        if (!schoolsGrid) return;

        const schools = this.getFilteredSchools();
        
        if (schools.length === 0) {
            schoolsGrid.innerHTML = `
                <div class="no-schools">
                    <h3>No schools found</h3>
                    <p>Try adjusting your filters to see more schools.</p>
                </div>
            `;
            return;
        }

        schoolsGrid.innerHTML = schools.map(school => this.createSchoolCard(school)).join('');
        
        // Add click listeners to school cards
        const schoolCards = document.querySelectorAll('.school-card');
        schoolCards.forEach(card => {
            card.addEventListener('click', () => {
                this.showSchoolDetails(card.dataset.schoolId);
            });
        });
    }

    getFilteredSchools() {
        if (typeof schoolData === 'undefined') return [];
        
        let schools = schoolData.getAllSchools();
        
        // Filter by school type
        if (this.currentFilters.schoolType !== 'all') {
            schools = schools.filter(school => school.type === this.currentFilters.schoolType);
        }
        
        // Filter by minimum rating
        schools = schools.filter(school => school.parentSentiment.overall >= this.currentFilters.minRating);
        
        // Sort schools
        schools.sort((a, b) => {
            switch (this.currentFilters.sortBy) {
                case 'rating':
                    return b.parentSentiment.overall - a.parentSentiment.overall;
                case 'enrollment':
                    return b.enrollment - a.enrollment;
                case 'budget':
                    return b.budget - a.budget;
                case 'ranking':
                    return a.rankings.california - b.rankings.california;
                default:
                    return 0;
            }
        });
        
        return schools;
    }

    createSchoolCard(school) {
        const rating = school.parentSentiment.overall;
        const budgetPerStudent = ((school.budget * 1000000) / school.enrollment).toLocaleString();
        
        // Create highlight tags
        const highlights = [];
        if (rating >= 4.5) highlights.push({ text: 'High Rating', class: 'rating-high' });
        if (school.budget > 3) highlights.push({ text: 'Well-Funded', class: 'budget-high' });
        if (school.rankings.california < 500) highlights.push({ text: 'Top State Ranking', class: 'rating-high' });
        
        return `
            <div class="school-card" data-school-id="${school.id}">
                <div class="school-header">
                    <div>
                        <div class="school-name">${school.name}</div>
                        <div class="school-level">${school.type.charAt(0).toUpperCase() + school.type.slice(1)} School</div>
                    </div>
                    <div class="school-rating">
                        ⭐ ${rating.toFixed(1)}
                    </div>
                </div>
                
                <div class="school-stats">
                    <div class="school-stat">
                        <div class="stat-label">Enrollment</div>
                        <div class="stat-value">${school.enrollment.toLocaleString()}</div>
                    </div>
                    <div class="school-stat">
                        <div class="stat-label">Budget per Student</div>
                        <div class="stat-value">$${budgetPerStudent}</div>
                    </div>
                    <div class="school-stat">
                        <div class="stat-label">CA Ranking</div>
                        <div class="stat-value">#${school.rankings.california.toLocaleString()}</div>
                    </div>
                    <div class="school-stat">
                        <div class="stat-label">National Ranking</div>
                        <div class="stat-value">#${school.rankings.national.toLocaleString()}</div>
                    </div>
                </div>
                
                <div class="school-highlights">
                    ${highlights.map(highlight => 
                        `<span class="highlight-tag ${highlight.class}">${highlight.text}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    showSchoolDetails(schoolId) {
        const school = schoolData.getSchoolById(schoolId);
        if (!school) return;
        
        this.selectedSchool = school;
        
        // Update school details
        document.getElementById('detailed-school-name').textContent = school.name;
        document.getElementById('school-level-badge').textContent = school.type.charAt(0).toUpperCase() + school.type.slice(1);
        document.getElementById('school-rating-badge').textContent = `⭐ ${school.parentSentiment.overall.toFixed(1)}`;
        
        document.getElementById('school-address').textContent = school.address;
        document.getElementById('school-phone').textContent = school.phone;
        document.getElementById('school-enrollment').textContent = school.enrollment.toLocaleString();
        
        const budgetPerStudent = ((school.budget * 1000000) / school.enrollment).toLocaleString();
        document.getElementById('school-budget').textContent = `$${school.budget}M`;
        document.getElementById('school-budget-per-student').textContent = `$${budgetPerStudent}`;
        document.getElementById('school-satisfaction').textContent = `${school.parentSentiment.overall}/5`;
        document.getElementById('school-ca-ranking').textContent = `#${school.rankings.california.toLocaleString()}`;
        
        // Update parent feedback
        this.updateParentFeedback(school);
        
        // Show details section
        document.getElementById('school-details-section').style.display = 'block';
        
        // Scroll to details
        document.getElementById('school-details-section').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        
        // Load initial tab
        this.switchTab('performance');
    }

    updateParentFeedback(school) {
        const sentiment = school.parentSentiment;
        
        // Update rating displays
        this.updateRatingDisplay('overall', sentiment.overall);
        this.updateRatingDisplay('academics', sentiment.academics);
        this.updateRatingDisplay('safety', sentiment.safety);
        this.updateRatingDisplay('communication', sentiment.communication);
        this.updateRatingDisplay('facilities', sentiment.facilities);
        
        // Update comments
        const commentsList = document.getElementById('parent-comments-list');
        if (commentsList) {
            commentsList.innerHTML = school.parentSentiment.comments.map(comment => 
                `<div class="comment-item">
                    <div class="comment-text">${comment}</div>
                </div>`
            ).join('');
        }
    }

    updateRatingDisplay(id, rating) {
        const starsEl = document.getElementById(`${id}-stars`);
        const valueEl = document.getElementById(`${id}-value`);
        
        if (starsEl) {
            starsEl.textContent = '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
        }
        
        if (valueEl) {
            valueEl.textContent = `${rating.toFixed(1)}/5`;
        }
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Update tab panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(`tab-${tabName}`).classList.add('active');
        
        // Load tab content
        this.loadTabContent(tabName);
    }

    loadTabContent(tabName) {
        if (!this.selectedSchool) return;
        
        switch (tabName) {
            case 'performance':
                this.loadPerformanceChart();
                break;
            case 'resources':
                this.loadResourcesChart();
                break;
            case 'feedback':
                // Already loaded in updateParentFeedback
                break;
            case 'neighborhood':
                // Static content, already in HTML
                break;
        }
    }

    loadPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx || !this.selectedSchool) return;
        
        const school = this.selectedSchool;
        const years = ['2019', '2020', '2021', '2022', '2023'];
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Test Scores',
                    data: school.trends.testScores,
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Academic Performance Over Time'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });
    }

    loadResourcesChart() {
        const ctx = document.getElementById('resourcesChart');
        if (!ctx || !this.selectedSchool) return;
        
        const school = this.selectedSchool;
        const years = ['2019', '2020', '2021', '2022', '2023'];
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'Budget (Millions)',
                    data: school.trends.budget,
                    backgroundColor: '#059669',
                    borderColor: '#047857',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'School Budget Over Time'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    updateViewToggle() {
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${this.currentView}"]`).classList.add('active');
    }

    optimizeForMobile() {
        // Reduce chart animation duration on mobile
        if (window.innerWidth <= 768) {
            Chart.defaults.animation.duration = 500;
            Chart.defaults.animation.easing = 'easeOutQuart';
        }
    }
}

// Global function for back button
function hideSchoolDetails() {
    document.getElementById('school-details-section').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const finder = new OUSDSchoolFinder();
});