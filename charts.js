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
    
    // Display parent comments instead of chart
    displayParentComments(canvasId, school) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        
        // Destroy existing chart if it exists
        if (this.charts[canvasId]) {
            this.charts[canvasId].destroy();
        }
        
        // Get the chart container
        const chartContainer = ctx.closest('.chart-container');
        if (!chartContainer) return;
        
        // Create comments HTML
        const commentsHTML = `
            <div class="parent-comments">
                <h4>Parent Feedback</h4>
                <div class="sentiment-stats">
                    <div class="sentiment-stat">
                        <span class="stat-label">Overall Satisfaction</span>
                        <span class="stat-value">${school.parentSentiment.overall}/5</span>
                    </div>
                    <div class="sentiment-stat">
                        <span class="stat-label">Academic Quality</span>
                        <span class="stat-value">${school.parentSentiment.academics}/5</span>
                    </div>
                    <div class="sentiment-stat">
                        <span class="stat-label">School Safety</span>
                        <span class="stat-value">${school.parentSentiment.safety}/5</span>
                    </div>
                    <div class="sentiment-stat">
                        <span class="stat-label">Communication</span>
                        <span class="stat-value">${school.parentSentiment.communication}/5</span>
                    </div>
                    <div class="sentiment-stat">
                        <span class="stat-label">Facilities</span>
                        <span class="stat-value">${school.parentSentiment.facilities}/5</span>
                    </div>
                    <div class="sentiment-stat">
                        <span class="stat-label">Total Responses</span>
                        <span class="stat-value">${school.parentSentiment.totalResponses}</span>
                    </div>
                </div>
                <div class="comments-section">
                    <h5>Parent Comments</h5>
                    <div class="comments-list">
                        ${school.parentSentiment.comments.map(comment => 
                            `<div class="comment-item">
                                <div class="comment-text">"${comment}"</div>
                            </div>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Replace chart with comments
        chartContainer.innerHTML = commentsHTML;
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

        const years = ["2020", "2021", "2022", "2023", "2024"];
        let data = [];
        let label = "";
        let color = this.colors.primary;

        switch (metric) {
            case "enrollment":
                data = school.trends.enrollment;
                label = "Enrollment";
                color = this.colors.primary;
                break;
            case "budget":
                data = school.trends.budget;
                label = "Budget (Millions)";
                color = this.colors.tertiary;
                break;
            case "test-scores":
                data = school.trends.testScores;
                label = "Test Scores (%)";
                color = this.colors.secondary;
                break;
            case "parent-sentiment":
                // For parent sentiment, show comments instead of chart
                this.displayParentComments(canvasId, school);
                return;
        }

        this.charts[canvasId] = new Chart(ctx, {
            type: "line",
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
                    pointBorderColor: "#fff",
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
                            weight: "bold"
                        }
                    },
                    legend: {
                        display: true,
                        position: "top"
                    }
                },
                scales: {
                    y: {
                        beginAtZero: metric === "parent-sentiment" ? false : true,
                        title: {
                            display: true,
                            text: label
                        },
                        ticks: {
                            callback: function(value) {
                                if (metric === "budget") {
                                    return "$" + value + "M";
                                } else if (metric === "parent-sentiment") {
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
                            text: "Year"
                        }
                    }
                }
            }
        });
    }

    // Create parent sentiment chart
    createSentimentChart(canvasId, schoolType = "all", metric = "overall") {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        let schools = [];
        if (schoolType === "all") {
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
            type: "bar",
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
                            weight: "bold"
                        }
                    },
                    legend: {
                        display: true,
                        position: "top"
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
                            text: "Rating (1-5)"
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
                            text: "School"
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
}

// Create global instance
const ousdCharts = new OUSDCharts();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OUSDCharts;
}
