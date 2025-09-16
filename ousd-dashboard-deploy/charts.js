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
