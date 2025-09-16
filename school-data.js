// Individual School Data for OUSD Dashboard
const schoolData = {
    // Individual school information
    schools: {
        // Elementary Schools
        'acorn-woodland': {
            id: 'acorn-woodland',
            name: 'Acorn Woodland Elementary School',
            type: 'elementary',
            grades: 'K-5',
            address: '1025 81st Avenue, Oakland, CA 94621',
            phone: '(510) 879-2150',
            enrollment: 420,
            budget: 2.8, // in millions
            testScores: {
                math: 68,
                english: 72,
                science: 70
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 3.8,
                totalResponses: 156
            },
            trends: {
                enrollment: [380, 390, 400, 410, 420],
                budget: [2.5, 2.6, 2.7, 2.75, 2.8],
                testScores: [65, 66, 67, 68, 68],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            }
        },
        'bella-vista': {
            id: 'bella-vista',
            name: 'Bella Vista Elementary School',
            type: 'elementary',
            grades: 'K-5',
            address: '1025 E. 28th Street, Oakland, CA 94610',
            phone: '(510) 879-2151',
            enrollment: 380,
            budget: 2.6,
            testScores: {
                math: 72,
                english: 75,
                science: 73
            },
            parentSentiment: {
                overall: 4.5,
                academics: 4.6,
                safety: 4.4,
                communication: 4.3,
                facilities: 4.2,
                totalResponses: 142
            },
            trends: {
                enrollment: [350, 360, 370, 375, 380],
                budget: [2.3, 2.4, 2.5, 2.55, 2.6],
                testScores: [69, 70, 71, 72, 72],
                parentSatisfaction: [4.2, 4.3, 4.4, 4.45, 4.5]
            }
        },
        'crocker-highlands': {
            id: 'crocker-highlands',
            name: 'Crocker Highlands Elementary School',
            type: 'elementary',
            grades: 'K-5',
            address: '525 Midcrest Road, Oakland, CA 94610',
            phone: '(510) 879-2152',
            enrollment: 450,
            budget: 3.1,
            testScores: {
                math: 85,
                english: 88,
                science: 86
            },
            parentSentiment: {
                overall: 4.7,
                academics: 4.8,
                safety: 4.6,
                communication: 4.5,
                facilities: 4.4,
                totalResponses: 198
            },
            trends: {
                enrollment: [420, 430, 440, 445, 450],
                budget: [2.8, 2.9, 3.0, 3.05, 3.1],
                testScores: [82, 83, 84, 84.5, 85],
                parentSatisfaction: [4.5, 4.6, 4.65, 4.7, 4.7]
            }
        },
        // Middle Schools
        'bret-harte': {
            id: 'bret-harte',
            name: 'Bret Harte Middle School',
            type: 'middle',
            grades: '6-8',
            address: '3700 Coolidge Avenue, Oakland, CA 94602',
            phone: '(510) 879-2153',
            enrollment: 680,
            budget: 4.2,
            testScores: {
                math: 58,
                english: 62,
                science: 60
            },
            parentSentiment: {
                overall: 3.8,
                academics: 3.9,
                safety: 3.7,
                communication: 3.6,
                facilities: 3.5,
                totalResponses: 203
            },
            trends: {
                enrollment: [650, 660, 670, 675, 680],
                budget: [3.8, 3.9, 4.0, 4.1, 4.2],
                testScores: [55, 56, 57, 58, 58],
                parentSatisfaction: [3.5, 3.6, 3.7, 3.75, 3.8]
            }
        },
        'claremont': {
            id: 'claremont',
            name: 'Claremont Middle School',
            type: 'middle',
            grades: '6-8',
            address: '5750 College Avenue, Oakland, CA 94618',
            phone: '(510) 879-2154',
            enrollment: 720,
            budget: 4.5,
            testScores: {
                math: 65,
                english: 68,
                science: 66
            },
            parentSentiment: {
                overall: 4.1,
                academics: 4.2,
                safety: 4.0,
                communication: 4.0,
                facilities: 3.9,
                totalResponses: 225
            },
            trends: {
                enrollment: [690, 700, 710, 715, 720],
                budget: [4.1, 4.2, 4.3, 4.4, 4.5],
                testScores: [62, 63, 64, 64.5, 65],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.05, 4.1]
            }
        },
        'edna-brewer': {
            id: 'edna-brewer',
            name: 'Edna Brewer Middle School',
            type: 'middle',
            grades: '6-8',
            address: '1428 E. 24th Street, Oakland, CA 94612',
            phone: '(510) 879-2155',
            enrollment: 650,
            budget: 4.0,
            testScores: {
                math: 70,
                english: 73,
                science: 71
            },
            parentSentiment: {
                overall: 4.3,
                academics: 4.4,
                safety: 4.2,
                communication: 4.1,
                facilities: 4.0,
                totalResponses: 195
            },
            trends: {
                enrollment: [620, 630, 640, 645, 650],
                budget: [3.6, 3.7, 3.8, 3.9, 4.0],
                testScores: [67, 68, 69, 69.5, 70],
                parentSatisfaction: [4.0, 4.1, 4.2, 4.25, 4.3]
            }
        },
        // High Schools
        'oakland-high': {
            id: 'oakland-high',
            name: 'Oakland High School',
            type: 'high',
            grades: '9-12',
            address: '1023 MacArthur Boulevard, Oakland, CA 94610',
            phone: '(510) 879-2156',
            enrollment: 1250,
            budget: 7.8,
            testScores: {
                math: 45,
                english: 48,
                science: 46
            },
            parentSentiment: {
                overall: 3.6,
                academics: 3.7,
                safety: 3.4,
                communication: 3.5,
                facilities: 3.3,
                totalResponses: 312
            },
            trends: {
                enrollment: [1200, 1220, 1240, 1245, 1250],
                budget: [7.2, 7.4, 7.5, 7.6, 7.8],
                testScores: [42, 43, 44, 44.5, 45],
                parentSatisfaction: [3.3, 3.4, 3.5, 3.55, 3.6]
            }
        },
        'oakland-tech': {
            id: 'oakland-tech',
            name: 'Oakland Technical High School',
            type: 'high',
            grades: '9-12',
            address: '4351 Broadway, Oakland, CA 94611',
            phone: '(510) 879-2157',
            enrollment: 1800,
            budget: 11.2,
            testScores: {
                math: 78,
                english: 81,
                science: 79
            },
            parentSentiment: {
                overall: 4.4,
                academics: 4.6,
                safety: 4.2,
                communication: 4.3,
                facilities: 4.1,
                totalResponses: 450
            },
            trends: {
                enrollment: [1750, 1770, 1790, 1795, 1800],
                budget: [10.5, 10.7, 10.9, 11.0, 11.2],
                testScores: [75, 76, 77, 77.5, 78],
                parentSatisfaction: [4.1, 4.2, 4.3, 4.35, 4.4]
            }
        },
        'skyline': {
            id: 'skyline',
            name: 'Skyline High School',
            type: 'high',
            grades: '9-12',
            address: '12250 Skyline Boulevard, Oakland, CA 94619',
            phone: '(510) 879-2158',
            enrollment: 1650,
            budget: 10.3,
            testScores: {
                math: 72,
                english: 75,
                science: 73
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.3,
                safety: 4.0,
                communication: 4.1,
                facilities: 3.9,
                totalResponses: 412
            },
            trends: {
                enrollment: [1600, 1620, 1640, 1645, 1650],
                budget: [9.8, 9.9, 10.0, 10.1, 10.3],
                testScores: [69, 70, 71, 71.5, 72],
                parentSatisfaction: [3.9, 4.0, 4.1, 4.15, 4.2]
            }
        }
    },

    // School budget categories
    budgetCategories: {
        instruction: {
            name: 'Instruction',
            description: 'Teacher salaries, curriculum, classroom materials',
            averagePercentage: 65
        },
        support: {
            name: 'Support Services',
            description: 'Counseling, special education, transportation',
            averagePercentage: 20
        },
        administration: {
            name: 'Administration',
            description: 'Principal, office staff, district administration',
            averagePercentage: 10
        },
        facilities: {
            name: 'Facilities & Operations',
            description: 'Maintenance, utilities, security',
            averagePercentage: 5
        }
    },

    // Parent sentiment categories
    sentimentCategories: {
        overall: 'Overall Satisfaction',
        academics: 'Academic Quality',
        safety: 'School Safety',
        communication: 'Parent Communication',
        facilities: 'Facility Quality'
    },

    // Helper functions
    getSchoolsByType: (type) => {
        return Object.values(schoolData.schools).filter(school => school.type === type);
    },

    getSchoolById: (id) => {
        return schoolData.schools[id];
    },

    getTopPerformingSchools: (metric, limit = 5) => {
        const schools = Object.values(schoolData.schools);
        return schools
            .sort((a, b) => b.testScores[metric] - a.testScores[metric])
            .slice(0, limit);
    },

    getSchoolsByParentSatisfaction: (minRating = 4.0) => {
        return Object.values(schoolData.schools)
            .filter(school => school.parentSentiment.overall >= minRating)
            .sort((a, b) => b.parentSentiment.overall - a.parentSentiment.overall);
    },

    getBudgetPerStudent: (schoolId) => {
        const school = schoolData.schools[schoolId];
        if (!school) return 0;
        return (school.budget * 1000000) / school.enrollment; // Convert to per-student
    },

    getAverageSentimentByType: (type) => {
        const schools = schoolData.getSchoolsByType(type);
        if (schools.length === 0) return null;
        
        const totals = schools.reduce((acc, school) => {
            Object.keys(school.parentSentiment).forEach(key => {
                if (key !== 'totalResponses') {
                    acc[key] = (acc[key] || 0) + school.parentSentiment[key];
                }
            });
            return acc;
        }, {});

        const averages = {};
        Object.keys(totals).forEach(key => {
            averages[key] = totals[key] / schools.length;
        });

        return averages;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = schoolData;
}
