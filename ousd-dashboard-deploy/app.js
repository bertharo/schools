// Main application logic for OUSD Trends Dashboard
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
            }
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialData();
        this.createInitialCharts();
        this.updateDistrictStats();
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
        // This would typically load data from APIs
        // For now, we're using the static data from data.js
        console.log('OUSD Dashboard initialized with sample data');
    }

    createInitialCharts() {
        // Create all initial charts
        this.updateEnrollmentChart();
        this.updateTestScoresChart();
        this.updateBudgetChart();
        this.createMiniCharts();
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

    createMiniCharts() {
        ousdCharts.createMiniChart('elementaryChart', 'elementary');
        ousdCharts.createMiniChart('middleChart', 'middle');
        ousdCharts.createMiniChart('highChart', 'high');
    }

    updateDistrictStats() {
        // Update district overview statistics
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

        // Update graduation rate
        const graduationRateEl = document.getElementById('graduation-rate');
        if (graduationRateEl) {
            graduationRateEl.textContent = stats.graduationRate + '%';
        }

        // Update school performance stats
        this.updateSchoolPerformanceStats();
    }

    updateSchoolPerformanceStats() {
        // Update elementary school stats
        const elemEnrollmentEl = document.getElementById('elem-avg-enrollment');
        const elemTestAvgEl = document.getElementById('elem-test-avg');
        
        if (elemEnrollmentEl) {
            const elemData = dataUtils.getSchoolPerformanceData('elementary');
            elemEnrollmentEl.textContent = dataUtils.formatNumber(elemData.avgEnrollment);
        }
        
        if (elemTestAvgEl) {
            const elemData = dataUtils.getSchoolPerformanceData('elementary');
            elemTestAvgEl.textContent = elemData.testScoreAvg + '%';
        }

        // Update middle school stats
        const middleEnrollmentEl = document.getElementById('middle-avg-enrollment');
        const middleTestAvgEl = document.getElementById('middle-test-avg');
        
        if (middleEnrollmentEl) {
            const middleData = dataUtils.getSchoolPerformanceData('middle');
            middleEnrollmentEl.textContent = dataUtils.formatNumber(middleData.avgEnrollment);
        }
        
        if (middleTestAvgEl) {
            const middleData = dataUtils.getSchoolPerformanceData('middle');
            middleTestAvgEl.textContent = middleData.testScoreAvg + '%';
        }

        // Update high school stats
        const highEnrollmentEl = document.getElementById('high-avg-enrollment');
        const highGraduationEl = document.getElementById('high-graduation-rate');
        
        if (highEnrollmentEl) {
            const highData = dataUtils.getSchoolPerformanceData('high');
            highEnrollmentEl.textContent = dataUtils.formatNumber(highData.avgEnrollment);
        }
        
        if (highGraduationEl) {
            const highData = dataUtils.getSchoolPerformanceData('high');
            highGraduationEl.textContent = highData.graduationRate + '%';
        }
    }

    // Method to refresh all data (for future API integration)
    refreshData() {
        console.log('Refreshing data...');
        // This would typically fetch new data from APIs
        this.updateDistrictStats();
        this.createInitialCharts();
    }

    // Method to export data (for future implementation)
    exportData(format = 'csv') {
        console.log(`Exporting data as ${format}...`);
        // This would typically export the current data
    }

    // Method to print dashboard
    printDashboard() {
        window.print();
    }
}

// Utility functions for additional features
const dashboardUtils = {
    // Animate numbers when they change
    animateNumber: (element, start, end, duration = 1000) => {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = start + (end - start) * progress;
            element.textContent = Math.floor(current).toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    },

    // Show loading state
    showLoading: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = '<div class="loading">Loading data...</div>';
        }
    },

    // Hide loading state
    hideLoading: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = '';
        }
    },

    // Show error message
    showError: (message) => {
        console.error('Dashboard Error:', message);
        // Could show a toast notification or modal
    }
};

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.ousdDashboard = new OUSDDashboard();
    
    // Add some additional interactivity
    console.log('OUSD Trends Dashboard loaded successfully!');
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case 'r':
                    e.preventDefault();
                    window.ousdDashboard.refreshData();
                    break;
                case 'p':
                    e.preventDefault();
                    window.ousdDashboard.printDashboard();
                    break;
            }
        }
    });
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { OUSDDashboard, dashboardUtils };
}
