// OUSD Data - Sample data based on research findings
const ousdData = {
    // Enrollment data by year and school type
    enrollment: {
        years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        elementary: [18500, 18800, 19200, 19500, 19800, 20100, 20400, 20700, 21000, 21200],
        middle: [8500, 8600, 8700, 8800, 8900, 9000, 9100, 9200, 9300, 9400],
        high: [12000, 12100, 12200, 12300, 12400, 12500, 12600, 12700, 12800, 12900],
        total: [39000, 39500, 40100, 40600, 41100, 41600, 42100, 42600, 43100, 43500]
    },

    // Test scores data (percentage meeting or exceeding standards)
    testScores: {
        math: {
            grade3: [45, 47, 49, 51, 53, 55, 57, 59, 61, 63],
            grade4: [42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
            grade5: [40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
            grade6: [38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
            grade7: [36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
            grade8: [35, 37, 39, 41, 43, 45, 47, 49, 51, 53],
            grade11: [32, 34, 36, 38, 40, 42, 44, 46, 48, 50]
        },
        english: {
            grade3: [48, 50, 52, 54, 56, 58, 60, 62, 64, 66],
            grade4: [46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
            grade5: [44, 46, 48, 50, 52, 54, 56, 58, 60, 62],
            grade6: [42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
            grade7: [40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
            grade8: [38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
            grade11: [35, 37, 39, 41, 43, 45, 47, 49, 51, 53]
        },
        science: {
            grade5: [42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
            grade8: [40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
            grade11: [38, 40, 42, 44, 46, 48, 50, 52, 54, 56]
        }
    },

    // Budget data (in millions)
    budget: {
        years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        total: [850, 880, 910, 940, 970, 1000, 1030, 1060, 1090, 1120],
        instruction: [552, 572, 592, 611, 631, 650, 670, 689, 709, 728],
        support: [212, 220, 228, 235, 243, 250, 258, 265, 273, 280],
        administration: [85, 88, 91, 94, 97, 100, 103, 106, 109, 112]
    },

    // School performance data
    schoolPerformance: {
        elementary: {
            avgEnrollment: 425,
            testScoreAvg: 72,
            graduationRate: null,
            trends: [68, 69, 70, 71, 72, 73, 74, 75, 76, 77]
        },
        middle: {
            avgEnrollment: 650,
            testScoreAvg: 68,
            graduationRate: null,
            trends: [64, 65, 66, 67, 68, 69, 70, 71, 72, 73]
        },
        high: {
            avgEnrollment: 1200,
            testScoreAvg: 65,
            graduationRate: 78.5,
            trends: [72, 73, 74, 75, 76, 77, 78, 79, 80, 81]
        }
    },

    // District statistics
    districtStats: {
        totalEnrollment: 44647,
        totalSchools: 82,
        totalBudget: 1120, // in millions
        graduationRate: 78.5,
        studentTeacherRatio: 19.39,
        englishLearners: 14915,
        freeReducedLunch: 85.2
    }
};

// Helper functions for data processing
const dataUtils = {
    // Get enrollment data for specific school type and year range
    getEnrollmentData: (schoolType, yearRange) => {
        const years = ousdData.enrollment.years.slice(-yearRange);
        let data = [];
        
        switch(schoolType) {
            case 'elementary':
                data = ousdData.enrollment.elementary.slice(-yearRange);
                break;
            case 'middle':
                data = ousdData.enrollment.middle.slice(-yearRange);
                break;
            case 'high':
                data = ousdData.enrollment.high.slice(-yearRange);
                break;
            case 'all':
            default:
                data = ousdData.enrollment.total.slice(-yearRange);
                break;
        }
        
        return { years, data };
    },

    // Get test score data for specific subject and grade
    getTestScoreData: (subject, grade) => {
        const years = ousdData.enrollment.years;
        let data = [];
        
        if (grade === 'all') {
            // Average across all grades for the subject
            const grades = subject === 'science' ? ['grade5', 'grade8', 'grade11'] : 
                          ['grade3', 'grade4', 'grade5', 'grade6', 'grade7', 'grade8', 'grade11'];
            
            data = years.map((_, index) => {
                const sum = grades.reduce((acc, gradeKey) => {
                    return acc + (ousdData.testScores[subject][gradeKey][index] || 0);
                }, 0);
                return Math.round(sum / grades.length);
            });
        } else {
            const gradeKey = `grade${grade}`;
            data = ousdData.testScores[subject][gradeKey] || [];
        }
        
        return { years, data };
    },

    // Get budget data for specific category
    getBudgetData: (category) => {
        const years = ousdData.budget.years;
        let data = [];
        
        switch(category) {
            case 'instruction':
                data = ousdData.budget.instruction;
                break;
            case 'support':
                data = ousdData.budget.support;
                break;
            case 'administration':
                data = ousdData.budget.administration;
                break;
            case 'total':
            default:
                data = ousdData.budget.total;
                break;
        }
        
        return { years, data };
    },

    // Get school performance data
    getSchoolPerformanceData: (schoolType) => {
        return ousdData.schoolPerformance[schoolType];
    },

    // Calculate percentage change
    calculatePercentageChange: (current, previous) => {
        if (previous === 0) return 0;
        return ((current - previous) / previous * 100).toFixed(1);
    },

    // Format numbers with commas
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    // Format currency
    formatCurrency: (num) => {
        if (num >= 1000) {
            return `$${(num / 1000).toFixed(1)}B`;
        }
        return `$${num}M`;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ousdData, dataUtils };
}

// Individual school data with essential OUSD schools
const schoolData = {
    schools: {
        // Elementary Schools
        'acorn-woodland': {
            id: 'acorn-woodland',
            name: 'Acorn Woodland Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 320,
            trends: {
                enrollment: [310, 315, 320, 325, 320],
                testScores: [68, 70, 72, 74, 76],
                budget: [2.1, 2.2, 2.3, 2.4, 2.5],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 3.9,
                totalResponses: 45
            }
        },
        'glenview': {
            id: 'glenview',
            name: 'Glenview Elementary School',
            type: 'elementary',
            address: '4215 La Cresta Avenue, Oakland, CA 94602',
            enrollment: 290,
            trends: {
                enrollment: [285, 290, 295, 290, 290],
                testScores: [68, 70, 72, 74, 76],
                budget: [1.9, 2.0, 2.1, 2.2, 2.3],
                parentSatisfaction: [3.9, 4.0, 4.1, 4.2, 4.3]
            },
            parentSentiment: {
                overall: 4.3,
                academics: 4.2,
                safety: 4.4,
                communication: 4.1,
                facilities: 4.0,
                totalResponses: 42
            }
        },
        'montclair': {
            id: 'montclair',
            name: 'Montclair Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 380,
            trends: {
                enrollment: [375, 380, 385, 380, 380],
                testScores: [72, 74, 76, 78, 80],
                budget: [2.5, 2.6, 2.7, 2.8, 2.9],
                parentSatisfaction: [4.1, 4.2, 4.3, 4.4, 4.5]
            },
            parentSentiment: {
                overall: 4.5,
                academics: 4.4,
                safety: 4.6,
                communication: 4.3,
                facilities: 4.2,
                totalResponses: 52
            }
        },
        'thornhill': {
            id: 'thornhill',
            name: 'Thornhill Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 360,
            trends: {
                enrollment: [355, 360, 365, 360, 360],
                testScores: [71, 73, 75, 77, 79],
                budget: [2.4, 2.5, 2.6, 2.7, 2.8],
                parentSatisfaction: [4.0, 4.1, 4.2, 4.3, 4.4]
            },
            parentSentiment: {
                overall: 4.4,
                academics: 4.3,
                safety: 4.5,
                communication: 4.2,
                facilities: 4.1,
                totalResponses: 48
            }
        },
        'crocker-highlands': {
            id: 'crocker-highlands',
            name: 'Crocker Highlands Elementary School',
            type: 'elementary',
            address: '525 Midcrest Road, Oakland, CA 94610',
            enrollment: 420,
            trends: {
                enrollment: [415, 420, 425, 420, 420],
                testScores: [75, 77, 79, 81, 83],
                budget: [2.8, 2.9, 3.0, 3.1, 3.2],
                parentSatisfaction: [4.2, 4.3, 4.4, 4.5, 4.6]
            },
            parentSentiment: {
                overall: 4.6,
                academics: 4.5,
                safety: 4.7,
                communication: 4.4,
                facilities: 4.3,
                totalResponses: 55
            }
        },
        'bret-harte': {
            id: 'bret-harte',
            name: 'Bret Harte Middle School',
            type: 'middle',
            address: '3700 Coolidge Avenue, Oakland, CA 94602',
            enrollment: 680,
            trends: {
                enrollment: [675, 680, 685, 680, 680],
                testScores: [65, 67, 69, 71, 73],
                budget: [4.5, 4.6, 4.7, 4.8, 4.9],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 3.9,
                totalResponses: 65
            }
        },
        'oakland-tech': {
            id: 'oakland-tech',
            name: 'Oakland Technical High School',
            type: 'high',
            address: '4351 Broadway, Oakland, CA 94611',
            enrollment: 1800,
            trends: {
                enrollment: [1795, 1800, 1805, 1800, 1800],
                testScores: [75, 77, 79, 81, 83],
                budget: [12.0, 12.3, 12.6, 12.9, 13.2],
                parentSatisfaction: [4.4, 4.5, 4.6, 4.7, 4.8]
            },
            parentSentiment: {
                overall: 4.8,
                academics: 4.7,
                safety: 4.9,
                communication: 4.6,
                facilities: 4.5,
                totalResponses: 145
            }
        }
    },
    
    sentimentCategories: {
        overall: 'Overall Satisfaction',
        academics: 'Academic Quality',
        safety: 'School Safety',
        communication: 'Communication',
        facilities: 'Facilities'
    },

    getSchoolById: function(id) {
        return this.schools[id];
    },

    getSchoolsByType: function(type) {
        return Object.values(this.schools).filter(school => school.type === type);
    },

    getAllSchools: function() {
        return Object.values(this.schools);
    }
};
        'allendale': {
            id: 'allendale',
            name: 'Allendale Elementary School',
            type: 'elementary',
            address: '3670 Penniman Avenue, Oakland, CA 94619',
            enrollment: 280,
            trends: {
                enrollment: [275, 280, 285, 280, 280],
                testScores: [65, 67, 69, 71, 73],
                budget: [1.8, 1.9, 2.0, 2.1, 2.2],
                parentSatisfaction: [3.6, 3.7, 3.8, 3.9, 4.0]
            },
            parentSentiment: {
                overall: 4.0,
                academics: 3.9,
                safety: 4.1,
                communication: 3.8,
                facilities: 3.7,
                totalResponses: 38
            }
        },
        'bella-vista': {
            id: 'bella-vista',
            name: 'Bella Vista Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 250,
            trends: {
                enrollment: [245, 250, 255, 250, 250],
                testScores: [62, 64, 66, 68, 70],
                budget: [1.6, 1.7, 1.8, 1.9, 2.0],
                parentSatisfaction: [3.5, 3.6, 3.7, 3.8, 3.9]
            },
            parentSentiment: {
                overall: 3.9,
                academics: 3.8,
                safety: 4.0,
                communication: 3.7,
                facilities: 3.6,
                totalResponses: 32
            }
        },
        'bridges-academy': {
            id: 'bridges-academy',
            name: 'Bridges Academy',
            type: 'elementary',
            address: '1234 5th Avenue, Oakland, CA 94606',
            enrollment: 180,
            trends: {
                enrollment: [175, 180, 185, 180, 180],
                testScores: [60, 62, 64, 66, 68],
                budget: [1.2, 1.3, 1.4, 1.5, 1.6],
                parentSatisfaction: [3.4, 3.5, 3.6, 3.7, 3.8]
            },
            parentSentiment: {
                overall: 3.8,
                academics: 3.7,
                safety: 3.9,
                communication: 3.6,
                facilities: 3.5,
                totalResponses: 28
            }
        },
        'brookfield': {
            id: 'brookfield',
            name: 'Brookfield Elementary School',
            type: 'elementary',
            address: '401 Jones Avenue, Oakland, CA 94603',
            enrollment: 220,
            trends: {
                enrollment: [215, 220, 225, 220, 220],
                testScores: [63, 65, 67, 69, 71],
                budget: [1.4, 1.5, 1.6, 1.7, 1.8],
                parentSatisfaction: [3.6, 3.7, 3.8, 3.9, 4.0]
            },
            parentSentiment: {
                overall: 4.0,
                academics: 3.9,
                safety: 4.1,
                communication: 3.8,
                facilities: 3.7,
                totalResponses: 35
            }
        },
        'burckhalter': {
            id: 'burckhalter',
            name: 'Burckhalter Elementary School',
            type: 'elementary',
            address: '4210 Telegraph Avenue, Oakland, CA 94609',
            enrollment: 300,
            trends: {
                enrollment: [295, 300, 305, 300, 300],
                testScores: [66, 68, 70, 72, 74],
                budget: [1.9, 2.0, 2.1, 2.2, 2.3],
                parentSatisfaction: [3.7, 3.8, 3.9, 4.0, 4.1]
            },
            parentSentiment: {
                overall: 4.1,
                academics: 4.0,
                safety: 4.2,
                communication: 3.9,
                facilities: 3.8,
                totalResponses: 42
            }
        },
        'chabot': {
            id: 'chabot',
            name: 'Chabot Elementary School',
            type: 'elementary',
            address: '6686 Chabot Road, Oakland, CA 94618',
            enrollment: 350,
            trends: {
                enrollment: [345, 350, 355, 350, 350],
                testScores: [70, 72, 74, 76, 78],
                budget: [2.3, 2.4, 2.5, 2.6, 2.7],
                parentSatisfaction: [4.0, 4.1, 4.2, 4.3, 4.4]
            },
            parentSentiment: {
                overall: 4.4,
                academics: 4.3,
                safety: 4.5,
                communication: 4.2,
                facilities: 4.1,
                totalResponses: 48
            }
        },
        'cleveland': {
            id: 'cleveland',
            name: 'Cleveland Elementary School',
            type: 'elementary',
            address: '745 Cleveland Street, Oakland, CA 94606',
            enrollment: 240,
            trends: {
                enrollment: [235, 240, 245, 240, 240],
                testScores: [61, 63, 65, 67, 69],
                budget: [1.5, 1.6, 1.7, 1.8, 1.9],
                parentSatisfaction: [3.5, 3.6, 3.7, 3.8, 3.9]
            },
            parentSentiment: {
                overall: 3.9,
                academics: 3.8,
                safety: 4.0,
                communication: 3.7,
                facilities: 3.6,
                totalResponses: 32
            }
        },
        'east-oakland-pride': {
            id: 'east-oakland-pride',
            name: 'East Oakland Pride Elementary School',
            type: 'elementary',
            address: '8000 Birch Street, Oakland, CA 94621',
            enrollment: 200,
            trends: {
                enrollment: [195, 200, 205, 200, 200],
                testScores: [58, 60, 62, 64, 66],
                budget: [1.3, 1.4, 1.5, 1.6, 1.7],
                parentSatisfaction: [3.3, 3.4, 3.5, 3.6, 3.7]
            },
            parentSentiment: {
                overall: 3.7,
                academics: 3.6,
                safety: 3.8,
                communication: 3.5,
                facilities: 3.4,
                totalResponses: 25
            }
        },
        'emerson': {
            id: 'emerson',
            name: 'Emerson Elementary School',
            type: 'elementary',
            address: '4800 Lawton Avenue, Oakland, CA 94618',
            enrollment: 280,
            trends: {
                enrollment: [275, 280, 285, 280, 280],
                testScores: [67, 69, 71, 73, 75],
                budget: [1.8, 1.9, 2.0, 2.1, 2.2],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 3.9,
                totalResponses: 40
            }
        },
        'franklin': {
            id: 'franklin',
            name: 'Franklin Elementary School',
            type: 'elementary',
            address: '915 Foothill Boulevard, Oakland, CA 94606',
            enrollment: 320,
            trends: {
                enrollment: [315, 320, 325, 320, 320],
                testScores: [69, 71, 73, 75, 77],
                budget: [2.1, 2.2, 2.3, 2.4, 2.5],
                parentSatisfaction: [3.9, 4.0, 4.1, 4.2, 4.3]
            },
            parentSentiment: {
                overall: 4.3,
                academics: 4.2,
                safety: 4.4,
                communication: 4.1,
                facilities: 4.0,
                totalResponses: 44
            }
        }
        'claremont': {
            id: 'claremont',
            name: 'Claremont Middle School',
            type: 'middle',
            address: '5750 College Avenue, Oakland, CA 94618',
            enrollment: 720,
            trends: {
                enrollment: [715, 720, 725, 720, 720],
                testScores: [68, 70, 72, 74, 76],
                budget: [4.8, 4.9, 5.0, 5.1, 5.2],
                parentSatisfaction: [4.0, 4.1, 4.2, 4.3, 4.4]
            },
            parentSentiment: {
                overall: 4.4,
                academics: 4.3,
                safety: 4.5,
                communication: 4.2,
                facilities: 4.1,
                totalResponses: 72
            }
        },
        'edna-brewer': {
            id: 'edna-brewer',
            name: 'Edna Brewer Middle School',
            type: 'middle',
            address: '3748 13th Avenue, Oakland, CA 94610',
            enrollment: 650,
            trends: {
                enrollment: [645, 650, 655, 650, 650],
                testScores: [66, 68, 70, 72, 74],
                budget: [4.3, 4.4, 4.5, 4.6, 4.7],
                parentSatisfaction: [3.9, 4.0, 4.1, 4.2, 4.3]
            },
            parentSentiment: {
                overall: 4.3,
                academics: 4.2,
                safety: 4.4,
                communication: 4.1,
                facilities: 4.0,
                totalResponses: 68
            }
        },
        'montera': {
            id: 'montera',
            name: 'Montera Middle School',
            type: 'middle',
            address: '5555 Ascot Drive, Oakland, CA 94611',
            enrollment: 750,
            trends: {
                enrollment: [745, 750, 755, 750, 750],
                testScores: [70, 72, 74, 76, 78],
                budget: [5.0, 5.1, 5.2, 5.3, 5.4],
                parentSatisfaction: [4.2, 4.3, 4.4, 4.5, 4.6]
            },
            parentSentiment: {
                overall: 4.6,
                academics: 4.5,
                safety: 4.7,
                communication: 4.4,
                facilities: 4.3,
                totalResponses: 78
            }
        },
        'oakland-high': {
            id: 'oakland-high',
            name: 'Oakland High School',
            type: 'high',
            address: '1023 MacArthur Boulevard, Oakland, CA 94610',
            enrollment: 1400,
            trends: {
                enrollment: [1395, 1400, 1405, 1400, 1400],
                testScores: [62, 64, 66, 68, 70],
                budget: [9.3, 9.5, 9.7, 9.9, 10.1],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 3.9,
                totalResponses: 112
            }
        },
        'skyline': {
            id: 'skyline',
            name: 'Skyline High School',
            type: 'high',
            address: '12250 Skyline Boulevard, Oakland, CA 94619',
            enrollment: 1600,
            trends: {
                enrollment: [1595, 1600, 1605, 1600, 1600],
                testScores: [68, 70, 72, 74, 76],
                budget: [10.7, 10.9, 11.1, 11.3, 11.5],
                parentSatisfaction: [4.1, 4.2, 4.3, 4.4, 4.5]
            },
            parentSentiment: {
                overall: 4.5,
                academics: 4.4,
                safety: 4.6,
                communication: 4.3,
                facilities: 4.2,
                totalResponses: 128
            }
        },
        'castlemont': {
            id: 'castlemont',
            name: 'Castlemont High School',
            type: 'high',
            address: '8601 MacArthur Boulevard, Oakland, CA 94605',
            enrollment: 1200,
            trends: {
                enrollment: [1195, 1200, 1205, 1200, 1200],
                testScores: [58, 60, 62, 64, 66],
                budget: [8.0, 8.2, 8.4, 8.6, 8.8],
                parentSatisfaction: [3.6, 3.7, 3.8, 3.9, 4.0]
            },
            parentSentiment: {
                overall: 4.0,
                academics: 3.9,
                safety: 4.1,
                communication: 3.8,
                facilities: 3.7,
                totalResponses: 95
            }
        }
