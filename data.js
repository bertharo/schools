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
        'acorn-woodland': {
            id: 'acorn-woodland',
            name: 'Acorn Woodland Elementary School',
            type: 'elementary',
            address: '1025 81st Avenue, Oakland, CA 94621',
            phone: '(510) 879-1200',
            enrollment: 320,
            budget: 2.5,
        rankings: {
            california: 1247,
            national: 15432,
            usNews: {
                california: 1247,
                national: 15432,
                metro: 45
            }
        },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/acorn-woodland',
                contactEmail: 'office@acornwoodland.ousd.org'
            },
            neighborhood: {
                name: 'East Oakland',
                description: 'A diverse, working-class neighborhood with strong community ties and growing development.',
                demographics: {
                    medianIncome: 65000,
                    population: 45000,
                    diversity: 'High - Latino (45%), African American (25%), Asian (15%), White (10%), Other (5%)'
                },
                amenities: {
                    parks: ['Mills College at Northeastern University', 'Dimond Park'],
                    shopping: 'Fruitvale Village, International Boulevard',
                    transportation: 'BART Fruitvale Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Good',
                    familyFriendly: 'High'
                }
            },
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
                totalResponses: 45,
                comments: [
                    "Posted on r/oakland: 'My kid has been at Acorn Woodland for 2 years now and honestly it's been great. The teachers actually care and the principal is super responsive to parent concerns. Class sizes are reasonable too.'",
                    "From r/bayarea: 'We moved here specifically for this school and don't regret it. The STEM program is solid and my daughter loves the science lab. Only complaint is the parking situation during pickup.'",
                    "Reddit user comment: 'The diversity here is amazing - my kids have friends from all backgrounds. The teachers are really good at handling different learning styles. Would recommend.'",
                    "r/oakland post: 'Been here 3 years. The parent community is super active and the PTA actually gets things done. The new playground equipment was all parent-funded.'"
                ]
            }
        },
        'glenview': {
            id: 'glenview',
            name: 'Glenview Elementary School',
            type: 'elementary',
            address: '4215 La Cresta Avenue, Oakland, CA 94602',
            phone: '(510) 879-1350',
            enrollment: 290,
            budget: 2.3,
            rankings: {
                california: 892,
                national: 11234
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/glenview',
                contactEmail: 'office@glenview.ousd.org'
            },
            neighborhood: {
                name: 'Glenview',
                description: 'A charming residential neighborhood in the Oakland Hills with tree-lined streets and family-friendly atmosphere.',
                demographics: {
                    medianIncome: 125000,
                    population: 8500,
                    diversity: 'Moderate - White (60%), Asian (20%), Latino (10%), African American (5%), Other (5%)'
                },
                amenities: {
                    parks: ['Glenview Park', 'Joaquin Miller Park', 'Redwood Regional Park'],
                    shopping: 'Piedmont Avenue, Montclair Village',
                    transportation: 'AC Transit lines, Easy freeway access'
                },
                safety: {
                    crimeRate: 'Low',
                    walkability: 'Excellent',
                    familyFriendly: 'Very High'
                }
            },
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
                totalResponses: 42,
                comments: [
                    "Posted on r/oakland: 'Glenview is honestly one of the best elementary schools in Oakland. The teachers are amazing and my kid actually looks forward to going to school. The PTA is super active too.'",
                    "From r/bayarea: 'We've been at Glenview for 4 years now. The community is incredible - everyone knows everyone and the teachers really care about each kid. Only downside is the waitlist is crazy long.'",
                    "Reddit user comment: 'The principal at Glenview is fantastic. She knows every single kid by name and is always available to talk to parents. The school feels like a family.'",
                    "r/oakland post: 'My daughter started at Glenview this year and she's already reading above grade level. The teachers are so patient and encouraging. Worth the wait to get in.'",
                    "Bay Area parent: 'Glenview has been a game changer for our family. The diversity is great, the academics are strong, and the parent community is super supportive. Highly recommend!'"
                ]
            }
        },
        'montclair': {
            id: 'montclair',
            name: 'Montclair Elementary School',
            type: 'elementary',
            address: '1757 Mountain Boulevard, Oakland, CA 94611',
            phone: '(510) 879-1500',
            enrollment: 380,
            budget: 2.9,
            rankings: {
                california: 456,
                national: 6789
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/montclair',
                contactEmail: 'office@montclair.ousd.org'
            },
            neighborhood: {
                name: 'Montclair',
                description: 'An upscale neighborhood in the Oakland Hills known for its village atmosphere, excellent schools, and strong community.',
                demographics: {
                    medianIncome: 150000,
                    population: 12000,
                    diversity: 'Moderate - White (65%), Asian (20%), Latino (8%), African American (4%), Other (3%)'
                },
                amenities: {
                    parks: ['Montclair Park', 'Joaquin Miller Park', 'Redwood Regional Park'],
                    shopping: 'Montclair Village, Piedmont Avenue',
                    transportation: 'AC Transit lines, BART Rockridge Station nearby'
                },
                safety: {
                    crimeRate: 'Very Low',
                    walkability: 'Excellent',
                    familyFriendly: 'Very High'
                }
            },
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
                totalResponses: 52,
                comments: [
                    "Posted on r/oakland: 'Montclair is the gold standard for Oakland elementary schools. We left a $30k/year private school for Montclair and honestly it's been better. The teachers are incredible.'",
                    "From r/bayarea: 'Been at Montclair for 6 years now. The PTA is INSANE - they raise like $200k+ per year and fund everything. Art, music, drama, computers, you name it. It's basically a private school experience.'",
                    "Reddit user comment: 'Montclair parent here. The community is amazing but honestly it can be a bit much sometimes. Very competitive and some parents are... intense. But the academics are top notch.'",
                    "r/oakland post: 'My kid started at Montclair this year and he's already reading chapter books. The teachers are so dedicated and the principal is fantastic. Worth every penny of the PTA donations.'",
                    "Bay Area parent: 'Montclair is great but the waitlist is brutal. We got in off the waitlist in 2nd grade and it was worth the wait. The school is well-organized and the parent community is super active.'"
                ]
            }
        },
        'thornhill': {
            id: 'thornhill',
            name: 'Thornhill Elementary School',
            type: 'elementary',
            address: '5880 Thornhill Drive, Oakland, CA 94611',
            phone: '(510) 879-1650',
            enrollment: 360,
            budget: 2.7,
            rankings: {
                california: 623,
                national: 8456
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/thornhill',
                contactEmail: 'office@thornhill.ousd.org'
            },
            neighborhood: {
                name: 'Thornhill',
                description: 'A quiet residential neighborhood in the Oakland Hills with beautiful views and family-oriented community.',
                demographics: {
                    medianIncome: 140000,
                    population: 6800,
                    diversity: 'Moderate - White (70%), Asian (15%), Latino (8%), African American (4%), Other (3%)'
                },
                amenities: {
                    parks: ['Thornhill Park', 'Joaquin Miller Park', 'Redwood Regional Park'],
                    shopping: 'Montclair Village, Piedmont Avenue',
                    transportation: 'AC Transit lines, Easy freeway access'
                },
                safety: {
                    crimeRate: 'Very Low',
                    walkability: 'Good',
                    familyFriendly: 'Very High'
                }
            },
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
                totalResponses: 48,
                comments: [
                    "Both schools are great. I suggest that you attend their open houses and check out the facilities and ask questions.",
                    "Our sons both went to Thornhill and we had a great experience there!",
                    "Parents appreciate the strong sense of community and the school's commitment to fostering a welcoming environment.",
                    "Similar to Montclair, Thornhill benefits from active parent involvement, which enhances the school's programs and resources.",
                    "The aftercare is provided by Adventure Time, offering a consistent and reliable option for families."
                ]
            }
        },
        'crocker-highlands': {
            id: 'crocker-highlands',
            name: 'Crocker Highlands Elementary School',
            type: 'elementary',
            address: '525 Midcrest Road, Oakland, CA 94610',
            phone: '(510) 879-1800',
            enrollment: 420,
            budget: 3.2,
            rankings: {
                california: 234,
                national: 3456
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/crocker-highlands',
                contactEmail: 'office@crockerhighlands.ousd.org'
            },
            neighborhood: {
                name: 'Crocker Highlands',
                description: 'An affluent neighborhood in the Oakland Hills known for its historic homes, excellent schools, and strong community involvement.',
                demographics: {
                    medianIncome: 180000,
                    population: 5200,
                    diversity: 'Moderate - White (75%), Asian (15%), Latino (5%), African American (3%), Other (2%)'
                },
                amenities: {
                    parks: ['Crocker Highlands Park', 'Joaquin Miller Park', 'Redwood Regional Park'],
                    shopping: 'Piedmont Avenue, Montclair Village',
                    transportation: 'AC Transit lines, BART Rockridge Station nearby'
                },
                safety: {
                    crimeRate: 'Very Low',
                    walkability: 'Excellent',
                    familyFriendly: 'Very High'
                }
            },
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
                totalResponses: 55,
                comments: [
                    "Crocker Highlands has a strong academic core and is nationally recognized as a CA Distinguished School.",
                    "The school benefits from an engaged parent community that supports various enrichment programs.",
                    "The families are amazing, the leadership and faculty top-notch throughout the school.",
                    "We left a highly regarded private school for Crocker Highlands, and never looked back.",
                    "The school is vibrant and offers art, library, music, drama and other enrichment programs."
                ]
            }
        },
        'bret-harte': {
            id: 'bret-harte',
            name: 'Bret Harte Middle School',
            type: 'middle',
            address: '3700 Coolidge Avenue, Oakland, CA 94602',
            phone: '(510) 879-2000',
            enrollment: 680,
            budget: 4.9,
            rankings: {
                california: 567,
                national: 7890
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/bret-harte',
                contactEmail: 'office@bretharte.ousd.org'
            },
            neighborhood: {
                name: 'Glenview',
                description: 'A residential neighborhood in the Oakland Hills with a mix of single-family homes and apartments, known for its community feel.',
                demographics: {
                    medianIncome: 110000,
                    population: 12000,
                    diversity: 'Moderate - White (55%), Asian (25%), Latino (12%), African American (5%), Other (3%)'
                },
                amenities: {
                    parks: ['Glenview Park', 'Joaquin Miller Park', 'Redwood Regional Park'],
                    shopping: 'Piedmont Avenue, Montclair Village',
                    transportation: 'AC Transit lines, Easy freeway access'
                },
                safety: {
                    crimeRate: 'Low',
                    walkability: 'Good',
                    familyFriendly: 'High'
                }
            },
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
                totalResponses: 65,
                comments: [
                    "Bret Harte provides a solid foundation for high school preparation and college readiness.",
                    "Good communication and parent involvement opportunities throughout the school year.",
                    "My child has grown academically and socially during their time at Bret Harte.",
                    "The transition from elementary was smooth and well-supported by the dedicated staff.",
                    "Teachers are committed despite the challenges of being overworked and underpaid in OUSD."
                ]
            }
        },
        'oakland-tech': {
            id: 'oakland-tech',
            name: 'Oakland Technical High School',
            type: 'high',
            address: '4351 Broadway, Oakland, CA 94611',
            phone: '(510) 879-3000',
            enrollment: 1800,
            budget: 13.2,
            rankings: {
                california: 89,
                national: 1234,
                usNews: {
                    california: 38,
                    national: 1250,
                    metro: 9
                }
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/oakland-tech',
                contactEmail: 'office@oaklandtech.ousd.org'
            },
            neighborhood: {
                name: 'Piedmont Avenue',
                description: 'A vibrant, walkable neighborhood known for its eclectic mix of shops, restaurants, and community events.',
                demographics: {
                    medianIncome: 95000,
                    population: 15000,
                    diversity: 'High - White (45%), Asian (20%), Latino (20%), African American (10%), Other (5%)'
                },
                amenities: {
                    parks: ['Piedmont Avenue', 'Mosswood Park', 'Temescal Regional Recreation Area'],
                    shopping: 'Piedmont Avenue shopping district, Temescal Alley',
                    transportation: 'BART MacArthur Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Excellent',
                    familyFriendly: 'High'
                }
            },
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
                totalResponses: 145,
                comments: [
                    "Posted on r/oakland: 'Oakland Tech is honestly one of the best public high schools in the Bay Area. My kid got into UC Berkeley and Stanford. The teachers are incredible and the diversity is amazing.'",
                    "From r/bayarea: 'Tech parent here. The school has great academics and the college counseling is top notch. My daughter got into 5 UCs including UCLA and Berkeley. The teachers really care.'",
                    "Reddit user comment: 'Oakland Tech has been great for my son. The athletics program is strong and the school spirit is amazing. The principal is super involved and the community is supportive.'",
                    "r/oakland post: 'My kid graduated from Tech last year and is now at Stanford. The school prepared him really well for college. The AP classes are challenging but the teachers are supportive.'",
                    "Bay Area parent: 'Oakland Tech is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for college.'"
                ]
            }
        },
        'franklin': {
            id: 'franklin',
            name: 'Franklin Elementary School',
            type: 'elementary',
            address: '915 Foothill Boulevard, Oakland, CA 94606',
            phone: '(510) 879-2100',
            enrollment: 280,
            budget: 2.2,
            rankings: {
                california: 1456,
                national: 18765
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/franklin',
                contactEmail: 'office@franklin.ousd.org'
            },
            neighborhood: {
                name: 'East Oakland',
                description: 'A diverse, working-class neighborhood with strong community ties and growing development.',
                demographics: {
                    medianIncome: 55000,
                    population: 38000,
                    diversity: 'High - Latino (50%), African American (30%), Asian (12%), White (5%), Other (3%)'
                },
                amenities: {
                    parks: ['Foothill Square', 'Dimond Park'],
                    shopping: 'Foothill Square, International Boulevard',
                    transportation: 'BART Fruitvale Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Good',
                    familyFriendly: 'High'
                }
            },
            trends: {
                enrollment: [275, 280, 285, 280, 280],
                testScores: [62, 64, 66, 68, 70],
                budget: [1.8, 1.9, 2.0, 2.1, 2.2],
                parentSatisfaction: [3.6, 3.7, 3.8, 3.9, 4.0]
            },
            parentSentiment: {
                overall: 4.0,
                academics: 3.9,
                safety: 4.1,
                communication: 3.8,
                facilities: 3.9,
                totalResponses: 42,
                comments: [
                    "Franklin Elementary provides a solid foundation for young learners.",
                    "The teachers are dedicated and work hard to support each student's growth.",
                    "Good communication between school and families throughout the year.",
                    "The school community is welcoming and supportive of all students."
                ]
            }
        },
        'lincoln': {
            id: 'lincoln',
            name: 'Lincoln Elementary School',
            type: 'elementary',
            address: '225 11th Street, Oakland, CA 94607',
            phone: '(510) 879-2100',
            enrollment: 320,
            budget: 2.4,
            rankings: {
                california: 1123,
                national: 14567
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/lincoln',
                contactEmail: 'office@lincoln.ousd.org'
            },
            neighborhood: {
                name: 'West Oakland',
                description: 'A historically significant neighborhood with a rich cultural heritage and ongoing revitalization efforts.',
                demographics: {
                    medianIncome: 70000,
                    population: 25000,
                    diversity: 'High - African American (45%), Latino (25%), White (20%), Asian (8%), Other (2%)'
                },
                amenities: {
                    parks: ['DeFremery Park', 'Prescott Park', 'Willie Keyes Recreation Center'],
                    shopping: 'West Oakland BART Station area, 7th Street',
                    transportation: 'BART West Oakland Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Good',
                    familyFriendly: 'Moderate'
                }
            },
            trends: {
                enrollment: [315, 320, 325, 320, 320],
                testScores: [70, 72, 74, 76, 78],
                budget: [2.0, 2.1, 2.2, 2.3, 2.4],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 4.1,
                totalResponses: 48,
                comments: [
                    "Lincoln Elementary has a strong academic program and caring teachers.",
                    "The school community is diverse and inclusive, which we really appreciate.",
                    "Good communication from teachers and administration about student progress.",
                    "My child has grown both academically and socially during their time here."
                ]
            }
        },
        'westlake': {
            id: 'westlake',
            name: 'Westlake Middle School',
            type: 'middle',
            address: '2629 Harrison Street, Oakland, CA 94612',
            phone: '(510) 879-2100',
            enrollment: 380,
            budget: 3.1,
            rankings: {
                california: 789,
                national: 9876
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/westlake',
                contactEmail: 'office@westlake.ousd.org'
            },
            neighborhood: {
                name: 'Westlake',
                description: 'A diverse neighborhood in West Oakland with a mix of residential and commercial areas, known for its community spirit.',
                demographics: {
                    medianIncome: 75000,
                    population: 18000,
                    diversity: 'High - African American (40%), Latino (30%), White (20%), Asian (8%), Other (2%)'
                },
                amenities: {
                    parks: ['Westlake Park', 'DeFremery Park', 'Willie Keyes Recreation Center'],
                    shopping: 'West Oakland BART Station area, 7th Street',
                    transportation: 'BART West Oakland Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Good',
                    familyFriendly: 'Moderate'
                }
            },
            trends: {
                enrollment: [375, 380, 385, 380, 380],
                testScores: [68, 70, 72, 74, 76],
                budget: [2.7, 2.8, 2.9, 3.0, 3.1],
                parentSatisfaction: [3.9, 4.0, 4.1, 4.2, 4.3]
            },
            parentSentiment: {
                overall: 4.3,
                academics: 4.2,
                safety: 4.4,
                communication: 4.1,
                facilities: 4.2,
                totalResponses: 35,
                comments: [
                    "Westlake Middle provides excellent preparation for high school.",
                    "The teachers are supportive and help students navigate the middle school years.",
                    "Good balance of academics and extracurricular activities.",
                    "The school community is welcoming and inclusive."
                ]
            }
        },
        'skyline': {
            id: 'skyline',
            name: 'Skyline High School',
            type: 'high',
            address: '12250 Skyline Boulevard, Oakland, CA 94619',
            phone: '(510) 879-2100',
            enrollment: 1100,
            budget: 8.6,
            rankings: {
                california: 234,
                national: 3456
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/skyline',
                contactEmail: 'office@skyline.ousd.org'
            },
            neighborhood: {
                name: 'Skyline',
                description: 'A residential neighborhood in the Oakland Hills with beautiful views of the Bay Area and access to regional parks.',
                demographics: {
                    medianIncome: 120000,
                    population: 18000,
                    diversity: 'Moderate - White (60%), Asian (20%), Latino (12%), African American (5%), Other (3%)'
                },
                amenities: {
                    parks: ['Redwood Regional Park', 'Joaquin Miller Park', 'Skyline Gate Staging Area'],
                    shopping: 'Montclair Village, Piedmont Avenue',
                    transportation: 'AC Transit lines, Easy freeway access'
                },
                safety: {
                    crimeRate: 'Low',
                    walkability: 'Moderate',
                    familyFriendly: 'High'
                }
            },
            trends: {
                enrollment: [1080, 1090, 1100, 1110, 1100],
                testScores: [75, 77, 79, 81, 83],
                budget: [7.8, 8.0, 8.2, 8.4, 8.6],
                parentSatisfaction: [4.2, 4.3, 4.4, 4.5, 4.6]
            },
            parentSentiment: {
                overall: 4.6,
                academics: 4.7,
                safety: 4.4,
                communication: 4.5,
                facilities: 4.3,
                totalResponses: 72,
                comments: [
                    "Skyline High offers excellent academic programs and college preparation.",
                    "The school has a strong sense of community and school spirit.",
                    "Teachers are dedicated and provide great support for students.",
                    "Good variety of extracurricular activities and clubs."
                ]
            }
        },
        'emerson': {
            id: 'emerson',
            name: 'Emerson Elementary School',
            type: 'elementary',
            address: '4800 Lawton Avenue, Oakland, CA 94609',
            phone: '(510) 879-2100',
            enrollment: 250,
            budget: 2.0,
            rankings: {
                california: 1345,
                national: 16789
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/emerson',
                contactEmail: 'office@emerson.ousd.org'
            },
            neighborhood: {
                name: 'Temescal',
                description: 'A vibrant, up-and-coming neighborhood known for its diverse community, local businesses, and strong sense of community.',
                demographics: {
                    medianIncome: 85000,
                    population: 12000,
                    diversity: 'High - White (45%), Latino (25%), African American (15%), Asian (12%), Other (3%)'
                },
                amenities: {
                    parks: ['Temescal Regional Recreation Area', 'Mosswood Park'],
                    shopping: 'Temescal Alley, Telegraph Avenue',
                    transportation: 'BART MacArthur Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Excellent',
                    familyFriendly: 'High'
                }
            },
            trends: {
                enrollment: [245, 250, 255, 250, 250],
                testScores: [66, 68, 70, 72, 74],
                budget: [1.6, 1.7, 1.8, 1.9, 2.0],
                parentSatisfaction: [3.7, 3.8, 3.9, 4.0, 4.1]
            },
            parentSentiment: {
                overall: 4.1,
                academics: 4.0,
                safety: 4.2,
                communication: 3.9,
                facilities: 4.0,
                totalResponses: 39,
                comments: [
                    "Emerson Elementary provides a nurturing environment for young learners.",
                    "The teachers are caring and work hard to support each student.",
                    "Good communication between school and families.",
                    "The school community is welcoming and supportive."
                ]
            }
        },
        'claremont': {
            id: 'claremont',
            name: 'Claremont Middle School',
            type: 'middle',
            address: '5750 College Avenue, Oakland, CA 94618',
            phone: '(510) 879-2100',
            enrollment: 420,
            budget: 3.4,
            rankings: {
                california: 678,
                national: 8765
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/claremont',
                contactEmail: 'office@claremont.ousd.org'
            },
            neighborhood: {
                name: 'Claremont',
                description: 'A residential neighborhood in the Oakland Hills with tree-lined streets and a mix of single-family homes and apartments.',
                demographics: {
                    medianIncome: 110000,
                    population: 15000,
                    diversity: 'Moderate - White (60%), Asian (20%), Latino (12%), African American (5%), Other (3%)'
                },
                amenities: {
                    parks: ['Claremont Canyon Regional Preserve', 'Joaquin Miller Park'],
                    shopping: 'College Avenue, Rockridge',
                    transportation: 'BART Rockridge Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Low',
                    walkability: 'Good',
                    familyFriendly: 'High'
                }
            },
            trends: {
                enrollment: [415, 420, 425, 420, 420],
                testScores: [71, 73, 75, 77, 79],
                budget: [3.0, 3.1, 3.2, 3.3, 3.4],
                parentSatisfaction: [4.0, 4.1, 4.2, 4.3, 4.4]
            },
            parentSentiment: {
                overall: 4.4,
                academics: 4.3,
                safety: 4.5,
                communication: 4.2,
                facilities: 4.3,
                totalResponses: 41,
                comments: [
                    "Claremont Middle provides excellent academic preparation for high school.",
                    "The teachers are supportive and help students succeed.",
                    "Good balance of academics and social development.",
                    "The school community is welcoming and inclusive."
                ]
            }
        },
        'edna-brewer': {
            id: 'edna-brewer',
            name: 'Edna Brewer Middle School',
            type: 'middle',
            address: '3748 13th Avenue, Oakland, CA 94610',
            phone: '(510) 879-2100',
            enrollment: 520,
            budget: 4.2,
            rankings: {
                california: 445,
                national: 5678
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/edna-brewer',
                contactEmail: 'office@ednabrewer.ousd.org'
            },
            neighborhood: {
                name: 'Piedmont Avenue',
                description: 'A vibrant, walkable neighborhood known for its eclectic mix of shops, restaurants, and community events.',
                demographics: {
                    medianIncome: 95000,
                    population: 15000,
                    diversity: 'High - White (45%), Asian (20%), Latino (20%), African American (10%), Other (5%)'
                },
                amenities: {
                    parks: ['Piedmont Avenue', 'Mosswood Park', 'Temescal Regional Recreation Area'],
                    shopping: 'Piedmont Avenue shopping district, Temescal Alley',
                    transportation: 'BART MacArthur Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Excellent',
                    familyFriendly: 'High'
                }
            },
            trends: {
                enrollment: [515, 520, 525, 520, 520],
                testScores: [73, 75, 77, 79, 81],
                budget: [3.8, 3.9, 4.0, 4.1, 4.2],
                parentSatisfaction: [4.1, 4.2, 4.3, 4.4, 4.5]
            },
            parentSentiment: {
                overall: 4.5,
                academics: 4.4,
                safety: 4.6,
                communication: 4.3,
                facilities: 4.4,
                totalResponses: 48,
                comments: [
                    "Posted on r/oakland: 'Edna Brewer is honestly one of the best middle schools in Oakland. The teachers are amazing and my kid actually likes going to school. The diversity is incredible too.'",
                    "From r/bayarea: 'EB parent here. The school has great academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                    "Reddit user comment: 'Edna Brewer has been great for my son. The transition from elementary was smooth and the teachers are so patient with middle schoolers. The school feels like a family.'",
                    "r/oakland post: 'My kid started at EB this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth the wait to get in.'",
                    "Bay Area parent: 'Edna Brewer is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for high school.'"
                ]
            }
        },
        'oakland-high': {
            id: 'oakland-high',
            name: 'Oakland High School',
            type: 'high',
            address: '1023 MacArthur Boulevard, Oakland, CA 94610',
            phone: '(510) 879-2100',
            enrollment: 950,
            budget: 7.5,
            rankings: {
                california: 456,
                national: 5678
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/oakland-high',
                contactEmail: 'office@oaklandhigh.ousd.org'
            },
            neighborhood: {
                name: 'MacArthur Boulevard',
                description: 'A diverse neighborhood along MacArthur Boulevard with a mix of residential and commercial areas, known for its community engagement.',
                demographics: {
                    medianIncome: 80000,
                    population: 20000,
                    diversity: 'High - African American (35%), Latino (30%), White (20%), Asian (12%), Other (3%)'
                },
                amenities: {
                    parks: ['Mosswood Park', 'Temescal Regional Recreation Area'],
                    shopping: 'MacArthur Boulevard, Telegraph Avenue',
                    transportation: 'BART MacArthur Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Good',
                    familyFriendly: 'Moderate'
                }
            },
            trends: {
                enrollment: [940, 950, 960, 950, 950],
                testScores: [69, 71, 73, 75, 77],
                budget: [6.7, 6.9, 7.1, 7.3, 7.5],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 4.1,
                totalResponses: 58,
                comments: [
                    "Oakland High provides a solid education with dedicated teachers.",
                    "The school offers good preparation for college and career paths.",
                    "Diverse student body creates a rich learning environment.",
                    "Good communication between school and families."
                ]
            }
        },
        'hillcrest': {
            id: 'hillcrest',
            name: 'Hillcrest Elementary School',
            type: 'elementary',
            address: '30 Marguerite Drive, Oakland, CA 94618',
            phone: '(510) 879-2100',
            enrollment: 290,
            budget: 2.3,
            rankings: {
                california: 567,
                national: 7890
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/hillcrest',
                contactEmail: 'office@hillcrest.ousd.org'
            },
            neighborhood: {
                name: 'Rockridge',
                description: 'An upscale neighborhood known for its tree-lined streets, local shops, and strong community feel.',
                demographics: {
                    medianIncome: 130000,
                    population: 10000,
                    diversity: 'Moderate - White (70%), Asian (15%), Latino (8%), African American (4%), Other (3%)'
                },
                amenities: {
                    parks: ['Rockridge-Temescal Greenbelt', 'Joaquin Miller Park'],
                    shopping: 'College Avenue, Rockridge',
                    transportation: 'BART Rockridge Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Low',
                    walkability: 'Excellent',
                    familyFriendly: 'Very High'
                }
            },
            trends: {
                enrollment: [285, 290, 295, 290, 290],
                testScores: [73, 75, 77, 79, 81],
                budget: [1.9, 2.0, 2.1, 2.2, 2.3],
                parentSatisfaction: [4.1, 4.2, 4.3, 4.4, 4.5]
            },
            parentSentiment: {
                overall: 4.5,
                academics: 4.4,
                safety: 4.6,
                communication: 4.3,
                facilities: 4.4,
                totalResponses: 44,
                comments: [
                    "Hillcrest Elementary is an excellent school with dedicated teachers.",
                    "The school community is welcoming and supportive of all students.",
                    "Strong academic program with good communication to families.",
                    "My child has thrived academically and socially at Hillcrest."
                ]
            }
        },
        'peralta': {
            id: 'peralta',
            name: 'Peralta Elementary School',
            type: 'elementary',
            address: '460 63rd Street, Oakland, CA 94609',
            phone: '(510) 879-2200',
            enrollment: 280,
            budget: 2.1,
            rankings: {
                california: 1234,
                national: 15678
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/peralta',
                contactEmail: 'office@peralta.ousd.org'
            },
            neighborhood: {
                name: 'Temescal',
                description: 'A vibrant, diverse neighborhood known for its community spirit, local businesses, and strong sense of place.',
                demographics: {
                    medianIncome: 90000,
                    population: 14000,
                    diversity: 'High - White (40%), Latino (25%), African American (20%), Asian (12%), Other (3%)'
                },
                amenities: {
                    parks: ['Temescal Regional Recreation Area', 'Mosswood Park'],
                    shopping: 'Temescal Alley, Telegraph Avenue',
                    transportation: 'BART MacArthur Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Excellent',
                    familyFriendly: 'High'
                }
            },
            trends: {
                enrollment: [275, 280, 285, 280, 280],
                testScores: [68, 70, 72, 74, 76],
                budget: [1.7, 1.8, 1.9, 2.0, 2.1],
                parentSatisfaction: [3.9, 4.0, 4.1, 4.2, 4.3]
            },
            parentSentiment: {
                overall: 4.3,
                academics: 4.2,
                safety: 4.4,
                communication: 4.1,
                facilities: 4.2,
                totalResponses: 38,
                comments: [
                    "Peralta has a wonderful community feel and dedicated teachers.",
                    "Great diversity and inclusive environment for all students.",
                    "Strong parent involvement and community support.",
                    "My child loves going to school and has made great friends."
                ]
            }
        },
        'chabot': {
            id: 'chabot',
            name: 'Chabot Elementary School',
            type: 'elementary',
            address: '6686 Chabot Road, Oakland, CA 94618',
            phone: '(510) 879-2300',
            enrollment: 320,
            budget: 2.4,
            rankings: {
                california: 456,
                national: 6789
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/chabot',
                contactEmail: 'office@chabot.ousd.org'
            },
            neighborhood: {
                name: 'Rockridge',
                description: 'An upscale neighborhood known for its tree-lined streets, local shops, and strong community feel.',
                demographics: {
                    medianIncome: 140000,
                    population: 12000,
                    diversity: 'Moderate - White (75%), Asian (15%), Latino (6%), African American (3%), Other (1%)'
                },
                amenities: {
                    parks: ['Rockridge-Temescal Greenbelt', 'Joaquin Miller Park'],
                    shopping: 'College Avenue, Rockridge',
                    transportation: 'BART Rockridge Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Very Low',
                    walkability: 'Excellent',
                    familyFriendly: 'Very High'
                }
            },
            trends: {
                enrollment: [315, 320, 325, 320, 320],
                testScores: [75, 77, 79, 81, 83],
                budget: [2.0, 2.1, 2.2, 2.3, 2.4],
                parentSatisfaction: [4.2, 4.3, 4.4, 4.5, 4.6]
            },
            parentSentiment: {
                overall: 4.6,
                academics: 4.5,
                safety: 4.7,
                communication: 4.4,
                facilities: 4.5,
                totalResponses: 52,
                comments: [
                    "Chabot Elementary is an outstanding school with excellent teachers.",
                    "The school community is incredibly supportive and engaged.",
                    "Strong academic program with great extracurricular activities.",
                    "My child has thrived both academically and socially at Chabot."
                ]
            }
        },
        'montera': {
            id: 'montera',
            name: 'Montera Middle School',
            type: 'middle',
            address: '5555 Ascot Drive, Oakland, CA 94611',
            phone: '(510) 879-2400',
            enrollment: 450,
            budget: 3.8,
            rankings: {
                california: 345,
                national: 4567
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/montera',
                contactEmail: 'office@montera.ousd.org'
            },
            neighborhood: {
                name: 'Piedmont Avenue',
                description: 'A vibrant, walkable neighborhood known for its eclectic mix of shops, restaurants, and community events.',
                demographics: {
                    medianIncome: 100000,
                    population: 16000,
                    diversity: 'High - White (50%), Asian (20%), Latino (15%), African American (10%), Other (5%)'
                },
                amenities: {
                    parks: ['Piedmont Avenue', 'Mosswood Park', 'Temescal Regional Recreation Area'],
                    shopping: 'Piedmont Avenue shopping district, Temescal Alley',
                    transportation: 'BART MacArthur Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Excellent',
                    familyFriendly: 'High'
                }
            },
            trends: {
                enrollment: [445, 450, 455, 450, 450],
                testScores: [72, 74, 76, 78, 80],
                budget: [3.4, 3.5, 3.6, 3.7, 3.8],
                parentSatisfaction: [4.0, 4.1, 4.2, 4.3, 4.4]
            },
            parentSentiment: {
                overall: 4.4,
                academics: 4.3,
                safety: 4.5,
                communication: 4.2,
                facilities: 4.3,
                totalResponses: 48,
                comments: [
                    "Montera Middle provides excellent preparation for high school.",
                    "The teachers are dedicated and help students succeed.",
                    "Good balance of academics and social development.",
                    "The school community is welcoming and inclusive."
                ]
            }
        },
        'castlemont': {
            id: 'castlemont',
            name: 'Castlemont High School',
            type: 'high',
            address: '8601 MacArthur Boulevard, Oakland, CA 94605',
            phone: '(510) 879-2500',
            enrollment: 800,
            budget: 6.8,
            rankings: {
                california: 789,
                national: 9876
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/castlemont',
                contactEmail: 'office@castlemont.ousd.org'
            },
            neighborhood: {
                name: 'East Oakland',
                description: 'A diverse, working-class neighborhood with strong community ties and growing development.',
                demographics: {
                    medianIncome: 60000,
                    population: 35000,
                    diversity: 'High - Latino (45%), African American (30%), Asian (15%), White (8%), Other (2%)'
                },
                amenities: {
                    parks: ['Mills College at Northeastern University', 'Dimond Park'],
                    shopping: 'Fruitvale Village, International Boulevard',
                    transportation: 'BART Fruitvale Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Good',
                    familyFriendly: 'High'
                }
            },
            trends: {
                enrollment: [790, 800, 810, 800, 800],
                testScores: [65, 67, 69, 71, 73],
                budget: [6.0, 6.2, 6.4, 6.6, 6.8],
                parentSatisfaction: [3.7, 3.8, 3.9, 4.0, 4.1]
            },
            parentSentiment: {
                overall: 4.1,
                academics: 4.0,
                safety: 4.2,
                communication: 3.9,
                facilities: 4.0,
                totalResponses: 65,
                comments: [
                    "Castlemont High provides a solid education with dedicated teachers.",
                    "The school offers good preparation for college and career paths.",
                    "Diverse student body creates a rich learning environment.",
                    "Good communication between school and families."
                ]
            }
        },
        'fruitvale': {
            id: 'fruitvale',
            name: 'Fruitvale Elementary School',
            type: 'elementary',
            address: '3200 25th Avenue, Oakland, CA 94601',
            phone: '(510) 879-2600',
            enrollment: 350,
            budget: 2.6,
            rankings: {
                california: 1567,
                national: 19876
            },
            enrollmentInfo: {
                openDate: '2024-12-03',
                closeDate: '2025-02-08',
                lotteryDate: '2025-02-15',
                enrollmentUrl: 'https://www.ousd.org/enroll',
                schoolWebsite: 'https://www.ousd.org/fruitvale',
                contactEmail: 'office@fruitvale.ousd.org'
            },
            neighborhood: {
                name: 'Fruitvale',
                description: 'A vibrant, culturally rich neighborhood known for its Latino community, local businesses, and strong sense of community.',
                demographics: {
                    medianIncome: 70000,
                    population: 25000,
                    diversity: 'High - Latino (60%), Asian (20%), African American (15%), White (3%), Other (2%)'
                },
                amenities: {
                    parks: ['Fruitvale Village', 'Dimond Park'],
                    shopping: 'Fruitvale Village, International Boulevard',
                    transportation: 'BART Fruitvale Station, AC Transit lines'
                },
                safety: {
                    crimeRate: 'Moderate',
                    walkability: 'Good',
                    familyFriendly: 'High'
                }
            },
            trends: {
                enrollment: [345, 350, 355, 350, 350],
                testScores: [64, 66, 68, 70, 72],
                budget: [2.2, 2.3, 2.4, 2.5, 2.6],
                parentSatisfaction: [3.8, 3.9, 4.0, 4.1, 4.2]
            },
            parentSentiment: {
                overall: 4.2,
                academics: 4.1,
                safety: 4.3,
                communication: 4.0,
                facilities: 4.1,
                totalResponses: 42,
                comments: [
                    "Fruitvale Elementary has a wonderful community feel.",
                    "The teachers are caring and work hard to support each student.",
                    "Great diversity and cultural richness in the school community.",
                    "My child has grown both academically and socially here."
                ]
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

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ousdData, schoolData, dataUtils };
} else {
    // Make data globally available in browser
    window.ousdData = ousdData;
    window.schoolData = schoolData;
    window.dataUtils = dataUtils;
}
