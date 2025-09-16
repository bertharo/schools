// Chart.js configuration and chart creation functions
class OUSDCharts {
    constructor() {
        this.charts = {};
        this.colors = {
            primary: '#3498db',
            secondary: '#2ecc71',
            tertiary: '#e74c3c',
            quaternary: '#f39c12',
            quinary: '#9b59b6',
            lightBlue: '#85c1e9',
            lightGreen: '#82e0aa',
            lightRed: '#f1948a',
            lightOrange: '#f7dc6f',
            lightPurple: '#bb8fce'
        };
    }

    // Create enrollment trends chart
    createEnrollmentChart(canvasId, schoolType = 'all', yearRange = 10) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const { years, data } = dataUtils.getEnrollmentData(schoolType, yearRange);
        
        // Destroy existing chart if it exists
        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: `${schoolType.charAt(0).toUpperCase() + schoolType.slice(1)} Schools`,
                    data: data,
                    borderColor: this.colors.primary,
                    backgroundColor: this.colors.lightBlue,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: this.colors.primary,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `Enrollment Trends - ${schoolType.charAt(0).toUpperCase() + schoolType.slice(1)} Schools`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Number of Students'
                        },
                        ticks: {
                            callback: function(value) {
                                return dataUtils.formatNumber(value);
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'School Year'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }

    // Create test scores chart
    createTestScoresChart(canvasId, subject = 'math', grade = 'all') {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const { years, data } = dataUtils.getTestScoreData(subject, grade);
        
        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: `${subject.charAt(0).toUpperCase() + subject.slice(1)} - Grade ${grade === 'all' ? 'All' : grade}`,
                    data: data,
                    backgroundColor: this.colors.secondary,
                    borderColor: this.colors.secondary,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `Test Scores - ${subject.charAt(0).toUpperCase() + subject.slice(1)} (${grade === 'all' ? 'All Grades' : `Grade ${grade}`})`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Percentage Meeting/Exceeding Standards'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'School Year'
                        }
                    }
                }
            }
        });
    }

    // Create budget chart
    createBudgetChart(canvasId, category = 'total') {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const { years, data } = dataUtils.getBudgetData(category);
        
        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: `${category.charAt(0).toUpperCase() + category.slice(1)} Budget`,
                    data: data,
                    borderColor: this.colors.tertiary,
                    backgroundColor: this.colors.lightRed,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: this.colors.tertiary,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `Budget Trends - ${category.charAt(0).toUpperCase() + category.slice(1)}`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Budget (Millions)'
                        },
                        ticks: {
                            callback: function(value) {
                                return dataUtils.formatCurrency(value);
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Fiscal Year'
                        }
                    }
                }
            }
        });
    }

    // Create mini chart for school performance
    createMiniChart(canvasId, schoolType) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const schoolData = dataUtils.getSchoolPerformanceData(schoolType);
        const years = ousdData.enrollment.years.slice(-5); // Last 5 years
        const data = schoolData.trends.slice(-5);
        
        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Performance Trend',
                    data: data,
                    borderColor: this.colors.quaternary,
                    backgroundColor: this.colors.lightOrange,
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        display: false
                    },
                    x: {
                        display: false
                    }
                },
                elements: {
                    point: {
                        radius: 3
                    }
                }
            }
        });
    }

    // Update chart data
    updateChart(canvasId, newData) {
        if (this.charts[canvasId]) {
            this.charts[canvasId].data = newData;
            this.charts[canvasId].update();
        }
    }

    // Destroy all charts
    destroyAllCharts() {
        Object.values(this.charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        this.charts = {};
    }

    // Get chart instance
    getChart(canvasId) {
        return this.charts[canvasId];
    }
}

// Create global instance
const ousdCharts = new OUSDCharts();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OUSDCharts;
}

    // Create individual school chart
    createIndividualSchoolChart(canvasId, schoolId, metric) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const school = schoolData.getSchoolById(schoolId);
        if (!school) return;

        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        const years = ['2020', '2021', '2022', '2023', '2024'];
        let data = [];
        let label = '';
        let color = this.colors.primary;

        switch (metric) {
            case 'enrollment':
                data = school.trends.enrollment;
                label = 'Enrollment';
                color = this.colors.primary;
                break;
            case 'budget':
                data = school.trends.budget;
                label = 'Budget (Millions)';
                color = this.colors.tertiary;
                break;
            case 'test-scores':
                data = school.trends.testScores;
                label = 'Test Scores (%)';
                color = this.colors.secondary;
                break;
            case 'parent-sentiment':
                data = school.trends.parentSatisfaction;
                label = 'Parent Satisfaction (1-5)';
                color = this.colors.quaternary;
                break;
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: color,
                    backgroundColor: this.getLightColor(color),
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: color,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `${school.name} - ${label}`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: metric === 'parent-sentiment' ? false : true,
                        title: {
                            display: true,
                            text: label
                        },
                        ticks: {
                            callback: function(value) {
                                if (metric === 'budget') {
                                    return '$' + value + 'M';
                                } else if (metric === 'parent-sentiment') {
                                    return value.toFixed(1);
                                } else {
                                    return value;
                                }
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                }
            }
        });
    }

    // Create parent sentiment chart
    createSentimentChart(canvasId, schoolType = 'all', metric = 'overall') {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        let schools = [];
        if (schoolType === 'all') {
            schools = Object.values(schoolData.schools);
        } else {
            schools = schoolData.getSchoolsByType(schoolType);
        }

        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        // Sort schools by the selected metric
        schools.sort((a, b) => b.parentSentiment[metric] - a.parentSentiment[metric]);

        const labels = schools.map(school => school.name);
        const data = schools.map(school => school.parentSentiment[metric]);
        const responseCounts = schools.map(school => school.parentSentiment.totalResponses);

        this.charts[canvasId] = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: schoolData.sentimentCategories[metric],
                    data: data,
                    backgroundColor: data.map((value, index) => {
                        if (value >= 4.5) return this.colors.secondary;
                        if (value >= 4.0) return this.colors.primary;
                        if (value >= 3.5) return this.colors.quaternary;
                        return this.colors.tertiary;
                    }),
                    borderColor: data.map((value, index) => {
                        if (value >= 4.5) return this.colors.secondary;
                        if (value >= 4.0) return this.colors.primary;
                        if (value >= 3.5) return this.colors.quaternary;
                        return this.colors.tertiary;
                    }),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `Parent Sentiment - ${schoolData.sentimentCategories[metric]}`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: function(context) {
                                const index = context.dataIndex;
                                return `Responses: ${responseCounts[index]}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5,
                        title: {
                            display: true,
                            text: 'Rating (1-5)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toFixed(1);
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'School'
                        },
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                }
            }
        });
    }

    // Create school comparison chart
    createSchoolComparisonChart(canvasId, schoolIds, metric) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        const schools = schoolIds.map(id => schoolData.getSchoolById(id)).filter(Boolean);
        const years = ['2020', '2021', '2022', '2023', '2024'];

        const datasets = schools.map((school, index) => {
            let data = [];
            let label = school.name;

            switch (metric) {
                case 'enrollment':
                    data = school.trends.enrollment;
                    break;
                case 'budget':
                    data = school.trends.budget;
                    break;
                case 'test-scores':
                    data = school.trends.testScores;
                    break;
                case 'parent-sentiment':
                    data = school.trends.parentSatisfaction;
                    break;
            }

            return {
                label: label,
                data: data,
                borderColor: this.getColorByIndex(index),
                backgroundColor: this.getLightColor(this.getColorByIndex(index)),
                borderWidth: 2,
                fill: false,
                tension: 0.4
            };
        });

        this.charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `School Comparison - ${metric.charAt(0).toUpperCase() + metric.slice(1)}`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: metric.charAt(0).toUpperCase() + metric.slice(1)
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                }
            }
        });
    }

    // Helper method to get light color variants
    getLightColor(color) {
        const colorMap = {
            [this.colors.primary]: this.colors.lightBlue,
            [this.colors.secondary]: this.colors.lightGreen,
            [this.colors.tertiary]: this.colors.lightRed,
            [this.colors.quaternary]: this.colors.lightOrange,
            [this.colors.quinary]: this.colors.lightPurple
        };
        return colorMap[color] || this.colors.lightBlue;
    }

    // Helper method to get color by index
    getColorByIndex(index) {
        const colors = [
            this.colors.primary,
            this.colors.secondary,
            this.colors.tertiary,
            this.colors.quaternary,
            this.colors.quinary
        ];
        return colors[index % colors.length];
    }

    // Create budget breakdown chart for individual school
    createSchoolBudgetChart(canvasId, schoolId) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const school = schoolData.getSchoolById(schoolId);
        if (!school) return;

        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        const budgetData = {
            instruction: school.budget * 0.65,
            support: school.budget * 0.20,
            administration: school.budget * 0.10,
            facilities: school.budget * 0.05
        };

        this.charts[canvasId] = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Instruction', 'Support Services', 'Administration', 'Facilities'],
                datasets: [{
                    data: Object.values(budgetData),
                    backgroundColor: [
                        this.colors.primary,
                        this.colors.secondary,
                        this.colors.tertiary,
                        this.colors.quaternary
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `${school.name} - Budget Breakdown`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed;
                                const percentage = ((value / school.budget) * 100).toFixed(1);
                                return `${context.label}: $${value.toFixed(1)}M (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Create individual school chart
    createIndividualSchoolChart(canvasId, schoolId, metric) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const school = schoolData.getSchoolById(schoolId);
        if (!school) return;

        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        const years = ['2020', '2021', '2022', '2023', '2024'];
        let data = [];
        let label = '';
        let color = this.colors.primary;

        switch (metric) {
            case 'enrollment':
                data = school.trends.enrollment;
                label = 'Enrollment';
                color = this.colors.primary;
                break;
            case 'budget':
                data = school.trends.budget;
                label = 'Budget (Millions)';
                color = this.colors.tertiary;
                break;
            case 'test-scores':
                data = school.trends.testScores;
                label = 'Test Scores (%)';
                color = this.colors.secondary;
                break;
            case 'parent-sentiment':
                data = school.trends.parentSatisfaction;
                label = 'Parent Satisfaction (1-5)';
                color = this.colors.quaternary;
                break;
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: color,
                    backgroundColor: this.getLightColor(color),
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: color,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `${school.name} - ${label}`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: metric === 'parent-sentiment' ? false : true,
                        title: {
                            display: true,
                            text: label
                        },
                        ticks: {
                            callback: function(value) {
                                if (metric === 'budget') {
                                    return '$' + value + 'M';
                                } else if (metric === 'parent-sentiment') {
                                    return value.toFixed(1);
                                } else {
                                    return value;
                                }
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                }
            }
        });
    }

    // Create parent sentiment chart
    createSentimentChart(canvasId, schoolType = 'all', metric = 'overall') {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        let schools = [];
        if (schoolType === 'all') {
            schools = Object.values(schoolData.schools);
        } else {
            schools = schoolData.getSchoolsByType(schoolType);
        }

        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }

        // Sort schools by the selected metric
        schools.sort((a, b) => b.parentSentiment[metric] - a.parentSentiment[metric]);

        const labels = schools.map(school => school.name);
        const data = schools.map(school => school.parentSentiment[metric]);
        const responseCounts = schools.map(school => school.parentSentiment.totalResponses);

        this.charts[canvasId] = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: schoolData.sentimentCategories[metric],
                    data: data,
                    backgroundColor: data.map((value, index) => {
                        if (value >= 4.5) return this.colors.secondary;
                        if (value >= 4.0) return this.colors.primary;
                        if (value >= 3.5) return this.colors.quaternary;
                        return this.colors.tertiary;
                    }),
                    borderColor: data.map((value, index) => {
                        if (value >= 4.5) return this.colors.secondary;
                        if (value >= 4.0) return this.colors.primary;
                        if (value >= 3.5) return this.colors.quaternary;
                        return this.colors.tertiary;
                    }),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `Parent Sentiment - ${schoolData.sentimentCategories[metric]}`,
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: function(context) {
                                const index = context.dataIndex;
                                return `Responses: ${responseCounts[index]}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5,
                        title: {
                            display: true,
                            text: 'Rating (1-5)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toFixed(1);
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'School'
                        },
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                }
            }
        });
    }

    // Helper method to get light color variants
    getLightColor(color) {
        const colorMap = {
            [this.colors.primary]: this.colors.lightBlue,
            [this.colors.secondary]: this.colors.lightGreen,
            [this.colors.tertiary]: this.colors.lightRed,
            [this.colors.quaternary]: this.colors.lightOrange,
            [this.colors.quinary]: this.colors.lightPurple
        };
        return colorMap[color] || this.colors.lightBlue;
    }

    // Helper method to get color by index
    getColorByIndex(index) {
        const colors = [
            this.colors.primary,
            this.colors.secondary,
            this.colors.tertiary,
            this.colors.quaternary,
            this.colors.quinary
        ];
        return colors[index % colors.length];
    }
