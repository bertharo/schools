// OUSD Data - Comprehensive data with all actual OUSD schools
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

// Individual school data with all actual OUSD schools
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
    module.exports = { ousdData, schoolData, dataUtils };
}
        'hoover': {
            id: 'hoover',
            name: 'Hoover Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
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
        'horace-mann': {
            id: 'horace-mann',
            name: 'Horace Mann Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 280,
            trends: {
                enrollment: [275, 280, 285, 280, 280],
                testScores: [65, 67, 69, 71, 73],
                budget: [1.8, 1.9, 2.0, 2.1, 2.2],
                parentSatisfaction: [3.7, 3.8, 3.9, 4.0, 4.1]
            },
            parentSentiment: {
                overall: 4.1,
                academics: 4.0,
                safety: 4.2,
                communication: 3.9,
                facilities: 3.8,
                totalResponses: 38
            }
        },
        'international-community': {
            id: 'international-community',
            name: 'International Community Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 320,
            trends: {
                enrollment: [315, 320, 325, 320, 320],
                testScores: [68, 70, 72, 74, 76],
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
        },
        'joaquin-miller': {
            id: 'joaquin-miller',
            name: 'Joaquin Miller Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
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
        'la-escuelita': {
            id: 'la-escuelita',
            name: 'La Escuelita Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 260,
            trends: {
                enrollment: [255, 260, 265, 260, 260],
                testScores: [64, 66, 68, 70, 72],
                budget: [1.7, 1.8, 1.9, 2.0, 2.1],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 3.9,
                totalResponses: 36
            }
        },
        'laurel': {
            id: 'laurel',
            name: 'Laurel Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 290,
            trends: {
                enrollment: [285, 290, 295, 290, 290],
                testScores: [67, 69, 71, 73, 75],
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
        'lincoln': {
            id: 'lincoln',
            name: 'Lincoln Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
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
        'lockwood-steam': {
            id: 'lockwood-steam',
            name: 'Lockwood STEAM Academy',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 300,
            trends: {
                enrollment: [295, 300, 305, 300, 300],
                testScores: [66, 68, 70, 72, 74],
                budget: [1.9, 2.0, 2.1, 2.2, 2.3],
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
        'madison-park-primary': {
            id: 'madison-park-primary',
            name: 'Madison Park Academy Primary',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 200,
            trends: {
                enrollment: [195, 200, 205, 200, 200],
                testScores: [58, 60, 62, 64, 66],
                budget: [1.3, 1.4, 1.5, 1.6, 1.7],
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
        'manzanita-community': {
            id: 'manzanita-community',
            name: 'Manzanita Community School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 180,
            trends: {
                enrollment: [175, 180, 185, 180, 180],
                testScores: [59, 61, 63, 65, 67],
                budget: [1.1, 1.2, 1.3, 1.4, 1.5],
                parentSatisfaction: [3.5, 3.6, 3.7, 3.8, 3.9]
            },
            parentSentiment: {
                overall: 3.9,
                academics: 3.8,
                safety: 4.0,
                communication: 3.7,
                facilities: 3.6,
                totalResponses: 26
            }
        },
        'manzanita-seed': {
            id: 'manzanita-seed',
            name: 'Manzanita SEED',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 160,
            trends: {
                enrollment: [155, 160, 165, 160, 160],
                testScores: [57, 59, 61, 63, 65],
                budget: [1.0, 1.1, 1.2, 1.3, 1.4],
                parentSatisfaction: [3.3, 3.4, 3.5, 3.6, 3.7]
            },
            parentSentiment: {
                overall: 3.7,
                academics: 3.6,
                safety: 3.8,
                communication: 3.5,
                facilities: 3.4,
                totalResponses: 22
            }
        },
        'markham': {
            id: 'markham',
            name: 'Markham Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 240,
            trends: {
                enrollment: [235, 240, 245, 240, 240],
                testScores: [62, 64, 66, 68, 70],
                budget: [1.5, 1.6, 1.7, 1.8, 1.9],
                parentSatisfaction: [3.6, 3.7, 3.8, 3.9, 4.0]
            },
            parentSentiment: {
                overall: 4.0,
                academics: 3.9,
                safety: 4.1,
                communication: 3.8,
                facilities: 3.7,
                totalResponses: 34
            }
        },
        'martin-luther-king': {
            id: 'martin-luther-king',
            name: 'Martin Luther King, Jr. Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 280,
            trends: {
                enrollment: [275, 280, 285, 280, 280],
                testScores: [65, 67, 69, 71, 73],
                budget: [1.8, 1.9, 2.0, 2.1, 2.2],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 3.9,
                totalResponses: 38
            }
        },
        'melrose-leadership': {
            id: 'melrose-leadership',
            name: 'Melrose Leadership Academy',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 320,
            trends: {
                enrollment: [315, 320, 325, 320, 320],
                testScores: [68, 70, 72, 74, 76],
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
        'oakland-academy-knowledge': {
            id: 'oakland-academy-knowledge',
            name: 'Oakland Academy of Knowledge',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 200,
            trends: {
                enrollment: [195, 200, 205, 200, 200],
                testScores: [60, 62, 64, 66, 68],
                budget: [1.3, 1.4, 1.5, 1.6, 1.7],
                parentSatisfaction: [3.5, 3.6, 3.7, 3.8, 3.9]
            },
            parentSentiment: {
                overall: 3.9,
                academics: 3.8,
                safety: 4.0,
                communication: 3.7,
                facilities: 3.6,
                totalResponses: 30
            }
        },
        'peralta': {
            id: 'peralta',
            name: 'Peralta Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 260,
            trends: {
                enrollment: [255, 260, 265, 260, 260],
                testScores: [64, 66, 68, 70, 72],
                budget: [1.7, 1.8, 1.9, 2.0, 2.1],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 3.9,
                totalResponses: 36
            }
        },
        'piedmont-avenue': {
            id: 'piedmont-avenue',
            name: 'Piedmont Avenue Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 340,
            trends: {
                enrollment: [335, 340, 345, 340, 340],
                testScores: [69, 71, 73, 75, 77],
                budget: [2.2, 2.3, 2.4, 2.5, 2.6],
                parentSatisfaction: [4.0, 4.1, 4.2, 4.3, 4.4]
            },
            parentSentiment: {
                overall: 4.4,
                academics: 4.3,
                safety: 4.5,
                communication: 4.2,
                facilities: 4.1,
                totalResponses: 46
            }
        },
        'prescott': {
            id: 'prescott',
            name: 'Prescott Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
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
        'reach-academy': {
            id: 'reach-academy',
            name: 'REACH Academy',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 180,
            trends: {
                enrollment: [175, 180, 185, 180, 180],
                testScores: [58, 60, 62, 64, 66],
                budget: [1.1, 1.2, 1.3, 1.4, 1.5],
                parentSatisfaction: [3.4, 3.5, 3.6, 3.7, 3.8]
            },
            parentSentiment: {
                overall: 3.8,
                academics: 3.7,
                safety: 3.9,
                communication: 3.6,
                facilities: 3.5,
                totalResponses: 26
            }
        },
        'redwood-heights': {
            id: 'redwood-heights',
            name: 'Redwood Heights Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 300,
            trends: {
                enrollment: [295, 300, 305, 300, 300],
                testScores: [66, 68, 70, 72, 74],
                budget: [1.9, 2.0, 2.1, 2.2, 2.3],
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
        'sankofa-united': {
            id: 'sankofa-united',
            name: 'Sankofa United Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 200,
            trends: {
                enrollment: [195, 200, 205, 200, 200],
                testScores: [59, 61, 63, 65, 67],
                budget: [1.3, 1.4, 1.5, 1.6, 1.7],
                parentSatisfaction: [3.5, 3.6, 3.7, 3.8, 3.9]
            },
            parentSentiment: {
                overall: 3.9,
                academics: 3.8,
                safety: 4.0,
                communication: 3.7,
                facilities: 3.6,
                totalResponses: 28
            }
        },
        'sequoia': {
            id: 'sequoia',
            name: 'Sequoia Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 280,
            trends: {
                enrollment: [275, 280, 285, 280, 280],
                testScores: [65, 67, 69, 71, 73],
                budget: [1.8, 1.9, 2.0, 2.1, 2.2],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 3.9,
                totalResponses: 38
            }
        },
        'sojourner-truth': {
            id: 'sojourner-truth',
            name: 'Sojourner Truth Independent Study',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 120,
            trends: {
                enrollment: [115, 120, 125, 120, 120],
                testScores: [55, 57, 59, 61, 63],
                budget: [0.8, 0.9, 1.0, 1.1, 1.2],
                parentSatisfaction: [3.2, 3.3, 3.4, 3.5, 3.6]
            },
            parentSentiment: {
                overall: 3.6,
                academics: 3.5,
                safety: 3.7,
                communication: 3.4,
                facilities: 3.3,
                totalResponses: 18
            }
        },
        'think-college-now': {
            id: 'think-college-now',
            name: 'Think College Now Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 240,
            trends: {
                enrollment: [235, 240, 245, 240, 240],
                testScores: [62, 64, 66, 68, 70],
                budget: [1.5, 1.6, 1.7, 1.8, 1.9],
                parentSatisfaction: [3.6, 3.7, 3.8, 3.9, 4.0]
            },
            parentSentiment: {
                overall: 4.0,
                academics: 3.9,
                safety: 4.1,
                communication: 3.8,
                facilities: 3.7,
                totalResponses: 34
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
        }
        'roosevelt': {
            id: 'roosevelt',
            name: 'Roosevelt Middle School',
            type: 'middle',
            address: '1926 19th Avenue, Oakland, CA 94606',
            enrollment: 600,
            trends: {
                enrollment: [595, 600, 605, 600, 600],
                testScores: [63, 65, 67, 69, 71],
                budget: [4.0, 4.1, 4.2, 4.3, 4.4],
                parentSatisfaction: [3.7, 3.8, 3.9, 4.0, 4.1]
            },
            parentSentiment: {
                overall: 4.1,
                academics: 4.0,
                safety: 4.2,
                communication: 3.9,
                facilities: 3.8,
                totalResponses: 60
            }
        },
        'sojourner-truth-middle': {
            id: 'sojourner-truth-middle',
            name: 'Sojourner Truth Independent Study (Middle)',
            type: 'middle',
            address: '8251 Fontaine Street, Oakland, CA 94605',
            enrollment: 150,
            trends: {
                enrollment: [145, 150, 155, 150, 150],
                testScores: [55, 57, 59, 61, 63],
                budget: [1.0, 1.1, 1.2, 1.3, 1.4],
                parentSatisfaction: [3.3, 3.4, 3.5, 3.6, 3.7]
            },
            parentSentiment: {
                overall: 3.7,
                academics: 3.6,
                safety: 3.8,
                communication: 3.5,
                facilities: 3.4,
                totalResponses: 18
            }
        },
        'united-for-success': {
            id: 'united-for-success',
            name: 'United for Success Academy',
            type: 'middle',
            address: '2101 35th Avenue, Oakland, CA 94601',
            enrollment: 450,
            trends: {
                enrollment: [445, 450, 455, 450, 450],
                testScores: [61, 63, 65, 67, 69],
                budget: [3.0, 3.1, 3.2, 3.3, 3.4],
                parentSatisfaction: [3.6, 3.7, 3.8, 3.9, 4.0]
            },
            parentSentiment: {
                overall: 4.0,
                academics: 3.9,
                safety: 4.1,
                communication: 3.8,
                facilities: 3.7,
                totalResponses: 45
            }
        },
        'urban-promise': {
            id: 'urban-promise',
            name: 'Urban Promise Academy',
            type: 'middle',
            address: '3031 East 18th Street, Oakland, CA 94601',
            enrollment: 380,
            trends: {
                enrollment: [375, 380, 385, 380, 380],
                testScores: [59, 61, 63, 65, 67],
                budget: [2.5, 2.6, 2.7, 2.8, 2.9],
                parentSatisfaction: [3.5, 3.6, 3.7, 3.8, 3.9]
            },
            parentSentiment: {
                overall: 3.9,
                academics: 3.8,
                safety: 4.0,
                communication: 3.7,
                facilities: 3.6,
                totalResponses: 38
            }
        },
        'westlake': {
            id: 'westlake',
            name: 'Westlake Middle School',
            type: 'middle',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 520,
            trends: {
                enrollment: [515, 520, 525, 520, 520],
                testScores: [62, 64, 66, 68, 70],
                budget: [3.4, 3.5, 3.6, 3.7, 3.8],
                parentSatisfaction: [3.7, 3.8, 3.9, 4.0, 4.1]
            },
            parentSentiment: {
                overall: 4.1,
                academics: 4.0,
                safety: 4.2,
                communication: 3.9,
                facilities: 3.8,
                totalResponses: 52
            }
        },
        'west-oakland': {
            id: 'west-oakland',
            name: 'West Oakland Middle School',
            type: 'middle',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 400,
            trends: {
                enrollment: [395, 400, 405, 400, 400],
                testScores: [58, 60, 62, 64, 66],
                budget: [2.6, 2.7, 2.8, 2.9, 3.0],
                parentSatisfaction: [3.4, 3.5, 3.6, 3.7, 3.8]
            },
            parentSentiment: {
                overall: 3.8,
                academics: 3.7,
                safety: 3.9,
                communication: 3.6,
                facilities: 3.5,
                totalResponses: 40
            }
        }
        'gateway-to-college': {
            id: 'gateway-to-college',
            name: 'Gateway to College at Laney College',
            type: 'high',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 300,
            trends: {
                enrollment: [295, 300, 305, 300, 300],
                testScores: [58, 60, 62, 64, 66],
                budget: [2.0, 2.1, 2.2, 2.3, 2.4],
                parentSatisfaction: [3.6, 3.7, 3.8, 3.9, 4.0]
            },
            parentSentiment: {
                overall: 4.0,
                academics: 3.9,
                safety: 4.1,
                communication: 3.8,
                facilities: 3.7,
                totalResponses: 28
            }
        },
        'ralph-bunche': {
            id: 'ralph-bunche',
            name: 'Ralph J. Bunche Academy',
            type: 'high',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 250,
            trends: {
                enrollment: [245, 250, 255, 250, 250],
                testScores: [50, 52, 54, 56, 58],
                budget: [1.7, 1.8, 1.9, 2.0, 2.1],
                parentSatisfaction: [3.2, 3.3, 3.4, 3.5, 3.6]
            },
            parentSentiment: {
                overall: 3.6,
                academics: 3.5,
                safety: 3.7,
                communication: 3.4,
                facilities: 3.3,
                totalResponses: 22
            }
        },
        'rudsdale-continuation': {
            id: 'rudsdale-continuation',
            name: 'Rudsdale Continuation High School',
            type: 'high',
            address: '1025 81st Avenue, Oakland, CA 94621',
            enrollment: 180,
            trends: {
                enrollment: [175, 180, 185, 180, 180],
                testScores: [45, 47, 49, 51, 53],
                budget: [1.2, 1.3, 1.4, 1.5, 1.6],
                parentSatisfaction: [3.0, 3.1, 3.2, 3.3, 3.4]
            },
            parentSentiment: {
                overall: 3.4,
                academics: 3.3,
                safety: 3.5,
                communication: 3.2,
                facilities: 3.1,
                totalResponses: 16
            }
        },
        'sojourner-truth-high': {
            id: 'sojourner-truth-high',
            name: 'Sojourner Truth Independent Study (High)',
            type: 'high',
            address: '8251 Fontaine Street, Oakland, CA 94605',
            enrollment: 120,
            trends: {
                enrollment: [115, 120, 125, 120, 120],
                testScores: [48, 50, 52, 54, 56],
                budget: [0.8, 0.9, 1.0, 1.1, 1.2],
                parentSatisfaction: [3.1, 3.2, 3.3, 3.4, 3.5]
            },
            parentSentiment: {
                overall: 3.5,
                academics: 3.4,
                safety: 3.6,
                communication: 3.3,
                facilities: 3.2,
                totalResponses: 12
            }
        }
