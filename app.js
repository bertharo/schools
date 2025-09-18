// Parent-Focused OUSD School Finder
class OUSDSchoolFinder {
    constructor() {
        this.currentFilters = {
            city: 'oakland',
                schoolType: 'all',
            minRating: 4.0,
            sortBy: 'rating'
        };
        this.currentView = 'grid';
        this.selectedSchool = null;
        this.currentCity = 'oakland';
        
        this.init();
        this.setupMainNavigation();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialData();
        this.renderSchools();
        this.optimizeForMobile();
    }

    setupEventListeners() {
        // Filter controls
        const cityFilter = document.getElementById('city-filter');
        const schoolTypeFilter = document.getElementById('school-type-filter');
        const ratingFilter = document.getElementById('rating-filter');
        const sortBy = document.getElementById('sort-by');
        
        if (cityFilter) {
            cityFilter.addEventListener('change', (e) => {
                this.currentFilters.city = e.target.value;
                this.currentCity = e.target.value;
                this.updateHeaderForCity();
                this.updateHowToApplyContent();
                this.renderSchools();
            });
        }
        
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

    setupMainNavigation() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all nav buttons
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                // Hide all content sections
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show selected section
                const sectionId = e.target.dataset.section + '-section';
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });
    }

    loadInitialData() {
        console.log('Multi-City School Finder initialized for parents');
        this.updateHeaderForCity();
    }

    getCurrentData() {
        if (this.currentCity === 'pleasant-hill') {
            return {
                district: pleasantHillData,
                schools: pleasantHillSchools,
                utils: pleasantHillDataUtils
            };
        } else {
            return {
                district: ousdData,
                schools: schoolData,
                utils: schoolData  // schoolData has the methods, not dataUtils
            };
        }
    }

    updateHeaderForCity() {
        const data = this.getCurrentData();
        const headerTitle = document.getElementById('header-title');
        const headerSubtitle = document.getElementById('header-subtitle');
        const headerStats = document.getElementById('header-stats');
        
        if (this.currentCity === 'pleasant-hill') {
            headerTitle.textContent = '🏫 Pleasant Hill School Finder';
            headerSubtitle.textContent = 'Find the best schools in Pleasant Hill for your family';
            headerStats.innerHTML = `
                <div class="stat">7 Featured Schools</div>
                <div class="stat">32,000 Students</div>
                <div class="stat">$450M Budget</div>
            `;
        } else {
            headerTitle.textContent = '🏫 OUSD School Finder';
            headerSubtitle.textContent = 'Find the best schools in Oakland for your family';
            headerStats.innerHTML = `
                <div class="stat">22 Featured Schools</div>
                <div class="stat">44,647 Students</div>
                <div class="stat">$1.2B Budget</div>
            `;
        }
    }

    updateHowToApplyContent() {
        const title = document.getElementById('how-to-apply-title');
        if (!title) return;

        if (this.currentCity === 'pleasant-hill') {
            title.textContent = 'How to Apply to MDUSD Schools';
        } else {
            title.textContent = 'How to Apply to OUSD Schools';
        }
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
        const data = this.getCurrentData();
        if (typeof data.utils === 'undefined') return [];
        
        let schools = data.utils.getAllSchools();
        
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
        const data = this.getCurrentData();
        const school = data.utils.getSchoolById(schoolId);
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
        
        // Update enrollment information
        this.updateEnrollmentInfo(school);
        
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

    updateEnrollmentInfo(school) {
        if (!school.enrollmentInfo) return;
        
        const enrollmentInfo = school.enrollmentInfo;
        
        // Format dates
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        };
        
        // Create or update enrollment section
        let enrollmentSection = document.querySelector('#school-details-section .enrollment-section');
        if (!enrollmentSection) {
            enrollmentSection = document.createElement('div');
            enrollmentSection.className = 'enrollment-section';
            enrollmentSection.innerHTML = `
                <h4>Enrollment Information</h4>
                <div class="enrollment-details">
                    <div class="enrollment-dates">
                        <div class="enrollment-date">
                            <span class="date-label">Application Opens:</span>
                            <span class="date-value" id="enrollment-open-date"></span>
                        </div>
                        <div class="enrollment-date">
                            <span class="date-label">Application Closes:</span>
                            <span class="date-value" id="enrollment-close-date"></span>
                        </div>
                        <div class="enrollment-date">
                            <span class="date-label">Lottery Date:</span>
                            <span class="date-value" id="enrollment-lottery-date"></span>
                        </div>
                    </div>
                    <div class="enrollment-links">
                        <a href="${enrollmentInfo.enrollmentUrl}" target="_blank" class="enrollment-btn primary">
                            Apply for Enrollment
                        </a>
                        <a href="${enrollmentInfo.schoolWebsite}" target="_blank" class="enrollment-btn secondary">
                            School Website
                        </a>
                        <a href="mailto:${enrollmentInfo.contactEmail}" class="enrollment-btn secondary">
                            Contact School
                        </a>
                    </div>
                </div>
            `;
            
            // Insert after school overview
            const schoolOverview = document.querySelector('#school-details-section .school-overview');
            if (schoolOverview) {
                schoolOverview.insertAdjacentElement('afterend', enrollmentSection);
            }
        } else {
            // Update existing enrollment section
            document.getElementById('enrollment-open-date').textContent = formatDate(enrollmentInfo.openDate);
            document.getElementById('enrollment-close-date').textContent = formatDate(enrollmentInfo.closeDate);
            document.getElementById('enrollment-lottery-date').textContent = formatDate(enrollmentInfo.lotteryDate);
            
            // Update links
            const links = enrollmentSection.querySelectorAll('.enrollment-btn');
            links[0].href = enrollmentInfo.enrollmentUrl;
            links[1].href = enrollmentInfo.schoolWebsite;
            links[2].href = `mailto:${enrollmentInfo.contactEmail}`;
        }
        
        // Update dates
        document.getElementById('enrollment-open-date').textContent = formatDate(enrollmentInfo.openDate);
        document.getElementById('enrollment-close-date').textContent = formatDate(enrollmentInfo.closeDate);
        document.getElementById('enrollment-lottery-date').textContent = formatDate(enrollmentInfo.lotteryDate);
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
                this.loadNeighborhoodInfo();
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

    loadNeighborhoodInfo() {
        if (!this.selectedSchool || !this.selectedSchool.neighborhood) return;
        
        const neighborhood = this.selectedSchool.neighborhood;
        
        // Update neighborhood description
        const descriptionEl = document.querySelector('#tab-neighborhood .neighborhood-info p');
        if (descriptionEl) {
            descriptionEl.textContent = neighborhood.description;
        }
        
        // Update neighborhood stats
        const statsContainer = document.querySelector('.neighborhood-stats');
        if (statsContainer) {
            statsContainer.innerHTML = `
                <div class="neighborhood-stat">
                    <div class="stat-label">Median Income</div>
                    <div class="stat-value">$${neighborhood.demographics.medianIncome.toLocaleString()}</div>
                </div>
                <div class="neighborhood-stat">
                    <div class="stat-label">Population</div>
                    <div class="stat-value">${neighborhood.demographics.population.toLocaleString()}</div>
                </div>
                <div class="neighborhood-stat">
                    <div class="stat-label">Diversity</div>
                    <div class="stat-value">${neighborhood.demographics.diversity}</div>
                </div>
                <div class="neighborhood-stat">
                    <div class="stat-label">Crime Rate</div>
                    <div class="stat-value">${neighborhood.safety.crimeRate}</div>
                </div>
                <div class="neighborhood-stat">
                    <div class="stat-label">Walkability</div>
                    <div class="stat-value">${neighborhood.safety.walkability}</div>
                </div>
                <div class="neighborhood-stat">
                    <div class="stat-label">Family Friendly</div>
                    <div class="stat-value">${neighborhood.safety.familyFriendly}</div>
                </div>
            `;
        }
        
        // Add amenities section if it doesn't exist
        let amenitiesSection = document.querySelector('#tab-neighborhood .amenities-section');
        if (!amenitiesSection) {
            amenitiesSection = document.createElement('div');
            amenitiesSection.className = 'amenities-section';
            amenitiesSection.innerHTML = `
                <h4>Local Amenities</h4>
                <div class="amenities-grid">
                    <div class="amenity-category">
                        <h5>Parks & Recreation</h5>
                        <ul>
                            ${neighborhood.amenities.parks.map(park => `<li>${park}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="amenity-category">
                        <h5>Shopping & Dining</h5>
                        <p>${neighborhood.amenities.shopping}</p>
                    </div>
                    <div class="amenity-category">
                        <h5>Transportation</h5>
                        <p>${neighborhood.amenities.transportation}</p>
                    </div>
                </div>
            `;
            document.querySelector('#tab-neighborhood .neighborhood-info').appendChild(amenitiesSection);
        } else {
            // Update existing amenities
            amenitiesSection.innerHTML = `
                <h4>Local Amenities</h4>
                <div class="amenities-grid">
                    <div class="amenity-category">
                        <h5>Parks & Recreation</h5>
                        <ul>
                            ${neighborhood.amenities.parks.map(park => `<li>${park}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="amenity-category">
                        <h5>Shopping & Dining</h5>
                        <p>${neighborhood.amenities.shopping}</p>
                    </div>
                    <div class="amenity-category">
                        <h5>Transportation</h5>
                        <p>${neighborhood.amenities.transportation}</p>
                    </div>
                </div>
            `;
        }
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