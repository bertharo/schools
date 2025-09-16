// Enhanced OUSD Dashboard with School Filtering and Parent Sentiment
class OUSDDashboard {
    constructor() {
        this.currentFilters = {
            enrollment: {
                years: 10,
                schoolType: 'all'
            },
            testScores: {
                subject: 'math',
                grade: 'all'
            },
            budget: {
                category: 'total'
            },
            sentiment: {
                schoolType: 'all',
                metric: 'overall'
            },
            individualSchool: {
                schoolId: '',
                metric: 'enrollment'
            }
        };
        
        this.init();

    }

    init() {
        this.setupEventListeners();
        this.loadInitialData();
        this.createInitialCharts();
        this.updateDistrictStats();
        this.populateTopSchools();
        
        // Ensure dropdown population happens after DOM is fully ready
        setTimeout(() => {
            this.populateSchoolDropdown();
        }, 100);
    }

    setupEventListeners() {
        // Enrollment controls
        const enrollmentYears = document.getElementById('enrollment-years');
        const schoolTypeFilter = document.getElementById('school-type-filter');
        
        if (enrollmentYears) {
            enrollmentYears.addEventListener('change', (e) => {
                this.currentFilters.enrollment.years = parseInt(e.target.value);
                this.updateEnrollmentChart();
            });
        }
        
        if (schoolTypeFilter) {
            schoolTypeFilter.addEventListener('change', (e) => {
                this.currentFilters.enrollment.schoolType = e.target.value;
                this.updateEnrollmentChart();
            });
        }

        // Test scores controls
        const testSubject = document.getElementById('test-subject');
        const testGrade = document.getElementById('test-grade');
        
        if (testSubject) {
            testSubject.addEventListener('change', (e) => {
                this.currentFilters.testScores.subject = e.target.value;
                this.updateTestScoresChart();
            });
        }
        
        if (testGrade) {
            testGrade.addEventListener('change', (e) => {
                this.currentFilters.testScores.grade = e.target.value;
                this.updateTestScoresChart();
            });
        }

        // Budget controls
        const budgetCategory = document.getElementById('budget-category');
        
        if (budgetCategory) {
            budgetCategory.addEventListener('change', (e) => {
                this.currentFilters.budget.category = e.target.value;
                this.updateBudgetChart();
            });
        }

        // Individual school controls
        const schoolSelect = document.getElementById('school-select');
        const schoolMetric = document.getElementById('school-metric');
        
        if (schoolSelect) {
            schoolSelect.addEventListener('change', (e) => {
                this.currentFilters.individualSchool.schoolId = e.target.value;
                this.updateIndividualSchoolView();
            });
        }
        
        if (schoolMetric) {
            schoolMetric.addEventListener('change', (e) => {
                this.currentFilters.individualSchool.metric = e.target.value;
                this.updateIndividualSchoolChart();
            });
        }

        // Sentiment controls
        const sentimentSchoolType = document.getElementById('sentiment-school-type');
        const sentimentMetric = document.getElementById('sentiment-metric');
        
        if (sentimentSchoolType) {
            sentimentSchoolType.addEventListener('change', (e) => {
                this.currentFilters.sentiment.schoolType = e.target.value;
                this.updateSentimentChart();
            });
        }
        
        if (sentimentMetric) {
            sentimentMetric.addEventListener('change', (e) => {
                this.currentFilters.sentiment.metric = e.target.value;
                this.updateSentimentChart();
            });
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    loadInitialData() {
        console.log('OUSD Dashboard initialized with enhanced features');
    }

    createInitialCharts() {
        this.updateEnrollmentChart();
        this.updateTestScoresChart();
        this.updateBudgetChart();
        this.createMiniCharts();
        this.updateSentimentChart();
    }

    updateEnrollmentChart() {
        const { years, schoolType } = this.currentFilters.enrollment;
        ousdCharts.createEnrollmentChart('enrollmentChart', schoolType, years);
    }

    updateTestScoresChart() {
        const { subject, grade } = this.currentFilters.testScores;
        ousdCharts.createTestScoresChart('testScoresChart', subject, grade);
    }

    updateBudgetChart() {
        const { category } = this.currentFilters.budget;
        ousdCharts.createBudgetChart('budgetChart', category);
    }

    updateSentimentChart() {
        const { schoolType, metric } = this.currentFilters.sentiment;
        ousdCharts.createSentimentChart('sentimentChart', schoolType, metric);
    }

    createMiniCharts() {
        ousdCharts.createMiniChart('elementaryChart', 'elementary');
        ousdCharts.createMiniChart('middleChart', 'middle');
        ousdCharts.createMiniChart('highChart', 'high');
    }

    updateIndividualSchoolView() {
        const schoolId = this.currentFilters.individualSchool.schoolId;
        const schoolDetails = document.getElementById('school-details');
        
        if (!schoolId) {
            schoolDetails.style.display = 'none';
            return;
        }

        const school = schoolData.getSchoolById(schoolId);
        if (!school) return;

        // Update school header
        document.getElementById('school-name').textContent = school.name;
        document.getElementById('school-address').textContent = school.address;
        document.getElementById('school-phone').textContent = school.phone;

        // Update school metrics
        document.getElementById('school-enrollment').textContent = school.enrollment.toLocaleString();
        document.getElementById('school-budget').textContent = `$${school.budget}M`;
        
        const budgetPerStudent = ((school.budget * 1000000) / school.enrollment).toLocaleString();
        document.getElementById('school-budget-per-student').textContent = `$${budgetPerStudent}`;
        
        document.getElementById('school-satisfaction').textContent = `${school.parentSentiment.overall}/5`;

        // Show school details
        schoolDetails.style.display = 'block';
        schoolDetails.classList.add('fade-in');

        // Update chart
        this.updateIndividualSchoolChart();
    }

    updateIndividualSchoolChart() {
        const { schoolId, metric } = this.currentFilters.individualSchool;
        if (schoolId) {
            ousdCharts.createIndividualSchoolChart('individualSchoolChart', schoolId, metric);
        }
    }

    updateDistrictStats() {
        const stats = ousdData.districtStats;
        
        // Update enrollment
        const totalEnrollmentEl = document.getElementById('total-enrollment');
        if (totalEnrollmentEl) {
            totalEnrollmentEl.textContent = dataUtils.formatNumber(stats.totalEnrollment);
        }

        // Update budget
        const totalBudgetEl = document.getElementById('total-budget');
        if (totalBudgetEl) {
            totalBudgetEl.textContent = dataUtils.formatCurrency(stats.totalBudget);
        }

        // Update parent satisfaction
        const parentSatisfactionEl = document.getElementById('parent-satisfaction');
        if (parentSatisfactionEl) {
            parentSatisfactionEl.textContent = '4.2/5';
        }

        // Update school performance stats
        this.updateSchoolPerformanceStats();
    }

    updateSchoolPerformanceStats() {
        // Update elementary school stats
        const elemEnrollmentEl = document.getElementById('elem-avg-enrollment');
        const elemTestAvgEl = document.getElementById('elem-test-avg');
        const elemSatisfactionEl = document.getElementById('elem-satisfaction');
        
        if (elemEnrollmentEl) {
            const elemData = dataUtils.getSchoolPerformanceData('elementary');
            elemEnrollmentEl.textContent = dataUtils.formatNumber(elemData.avgEnrollment);
        }
        
        if (elemTestAvgEl) {
            const elemData = dataUtils.getSchoolPerformanceData('elementary');
            elemTestAvgEl.textContent = elemData.testScoreAvg + '%';
        }

        if (elemSatisfactionEl) {
            elemSatisfactionEl.textContent = '4.3/5';
        }

        // Update middle school stats
        const middleEnrollmentEl = document.getElementById('middle-avg-enrollment');
        const middleTestAvgEl = document.getElementById('middle-test-avg');
        const middleSatisfactionEl = document.getElementById('middle-satisfaction');
        
        if (middleEnrollmentEl) {
            const middleData = dataUtils.getSchoolPerformanceData('middle');
            middleEnrollmentEl.textContent = dataUtils.formatNumber(middleData.avgEnrollment);
        }
        
        if (middleTestAvgEl) {
            const middleData = dataUtils.getSchoolPerformanceData('middle');
            middleTestAvgEl.textContent = middleData.testScoreAvg + '%';
        }

        if (middleSatisfactionEl) {
            middleSatisfactionEl.textContent = '4.1/5';
        }

        // Update high school stats
        const highEnrollmentEl = document.getElementById('high-avg-enrollment');
        const highGraduationEl = document.getElementById('high-graduation-rate');
        const highSatisfactionEl = document.getElementById('high-satisfaction');
        
        if (highEnrollmentEl) {
            const highData = dataUtils.getSchoolPerformanceData('high');
            highEnrollmentEl.textContent = dataUtils.formatNumber(highData.avgEnrollment);
        }
        
        if (highGraduationEl) {
            const highData = dataUtils.getSchoolPerformanceData('high');
            highGraduationEl.textContent = highData.graduationRate + '%';
        }

        if (highSatisfactionEl) {
            highSatisfactionEl.textContent = '3.7/5';
        }
    }

    populateTopSchools() {
        const topSchoolsList = document.getElementById('top-schools-list');
        if (!topSchoolsList) return;

        // Get all schools and filter by parent satisfaction >= 4.0
        const allSchools = schoolData.getAllSchools();
        const topSchools = allSchools
            .filter(school => school.parentSentiment.overall >= 4.0)
            .sort((a, b) => b.parentSentiment.overall - a.parentSentiment.overall)
            .slice(0, 6);
        
        topSchoolsList.innerHTML = topSchools.map(school => `
            <div class="school-item">
                <h4>${school.name}</h4>
                <div class="school-type">${school.type.charAt(0).toUpperCase() + school.type.slice(1)} School</div>
                <div class="school-rating">
                    <span class="rating-stars">${this.generateStars(school.parentSentiment.overall)}</span>
                    <span class="rating-number">${school.parentSentiment.overall}/5</span>
                </div>
                <div class="school-stats">
                    <div>Enrollment: ${school.enrollment.toLocaleString()}</div>
                    <div>Budget: $${school.budget}M</div>
                </div>
            </div>
        `).join('');
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        return '★'.repeat(fullStars) + 
               (hasHalfStar ? '☆' : '') + 
               '☆'.repeat(emptyStars);
    }

    // Method to refresh all data
    refreshData() {
        console.log('Refreshing data...');
        this.updateDistrictStats();
        this.createInitialCharts();
        this.populateTopSchools();
        this.populateSchoolDropdown();
    }

    // Method to export data
    exportData(format = 'csv') {
        console.log(`Exporting data as ${format}...`);
        // Implementation would go here
    }

    // Method to print dashboard
    printDashboard() {
        window.print();
    }
    // Populate school dropdown with all schools from data
    populateSchoolDropdown() {
        console.log('Populating school dropdown...');
        const schoolSelect = document.getElementById('school-select');
        if (!schoolSelect) {
            console.error('School select element not found');
            return;
        }

        // Check if schoolData is available
        if (typeof schoolData === 'undefined') {
            console.error('schoolData is not available');
            return;
        }

        // Clear existing options except the first one
        schoolSelect.innerHTML = '<option value="">Choose a school...</option>';

        // Get all schools and group by type
        const allSchools = schoolData.getAllSchools();
        console.log('Found schools:', allSchools.length);
        
        const schoolsByType = {
            elementary: allSchools.filter(school => school.type === 'elementary'),
            middle: allSchools.filter(school => school.type === 'middle'),
            high: allSchools.filter(school => school.type === 'high')
        };

        console.log('Schools by type:', schoolsByType);

        // Create optgroups for each school type
        Object.keys(schoolsByType).forEach(type => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = type.charAt(0).toUpperCase() + type.slice(1) + ' Schools';
            
            schoolsByType[type].forEach(school => {
                const option = document.createElement('option');
                option.value = school.id;
                option.textContent = school.name;
                optgroup.appendChild(option);
            });
            
            schoolSelect.appendChild(optgroup);
        });
        
        console.log('Dropdown populated with', schoolSelect.options.length, 'options');
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new OUSDDashboard();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { OUSDDashboard, dashboardUtils };
}
