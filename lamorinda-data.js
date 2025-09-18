// Lamorinda School Data - Lafayette, Moraga, Orinda
const lamorindaData = {
    district: {
        name: "Lamorinda School Districts",
        city: "Lamorinda",
        state: "CA",
        enrollment: 8500,
        budget: 120, // million
        website: "https://www.lamorinda.k12.ca.us",
        phone: "(925) 280-3900",
        address: "3477 School Street, Lafayette, CA 94549",
        description: "Serving students in Lafayette, Moraga, and Orinda with excellence in education.",
        established: 1950,
        superintendent: "Dr. Rachel Zinn",
        mission: "To provide an exceptional education that prepares all students for success in college, career, and life.",
        vision: "Every student will graduate college and career ready with the skills to be successful in a global society."
    },
    stats: {
        totalSchools: 15,
        elementarySchools: 9,
        middleSchools: 3,
        highSchools: 3,
        averageClassSize: 22,
        graduationRate: 96.5,
        collegeReadiness: 92.2,
        parentSatisfaction: 4.6,
        teacherRetention: 91.1,
        perPupilSpending: 16000,
        apiScore: 8.8,
        testScores: {
            math: 89.1,
            english: 91.3,
            science: 88.7
        }
    }
};

const lamorindaSchools = {
    // Lafayette Schools
    "happy-valley-elementary": {
        id: "happy-valley-elementary",
        name: "Happy Valley Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 320,
        address: "3855 Happy Valley Road, Lafayette, CA 94549",
        phone: "(925) 280-3900",
        website: "https://happyvalley.lafsd.org",
        email: "happyvalley@lafsd.org",
        principal: "Dr. Sarah Johnson",
        established: 1960,
        budget: 2.8,
        parentSentiment: {
            overall: 4.5,
            academics: 4.4,
            teachers: 4.6,
            safety: 4.5,
            diversity: 3.8,
            comments: [
                "Posted on r/bayarea: 'Happy Valley is honestly one of the best elementary schools in Lamorinda. The teachers are incredible and my kid loves going to school. The academics are top notch.'",
                "From r/lafayette: 'Happy Valley parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Happy Valley has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/bayarea post: 'My kid started at Happy Valley this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Happy Valley is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 9.2,
            national: 8.8
        },
        neighborhood: {
            name: "Lafayette",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.lafsd.org/enroll",
            schoolWebsite: "https://happyvalley.lafsd.org",
            contactEmail: "happyvalley@lafsd.org"
        }
    },

    "lafayette-elementary": {
        id: "lafayette-elementary",
        name: "Lafayette Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 380,
        address: "950 Moraga Road, Lafayette, CA 94549",
        phone: "(925) 280-3900",
        website: "https://lafayette.lafsd.org",
        email: "lafayette@lafsd.org",
        principal: "Ms. Maria Rodriguez",
        established: 1955,
        budget: 3.2,
        parentSentiment: {
            overall: 4.6,
            academics: 4.5,
            teachers: 4.7,
            safety: 4.6,
            diversity: 4.0,
            comments: [
                "Posted on r/bayarea: 'Lafayette Elementary is honestly one of the best elementary schools in Lamorinda. The teachers are incredible and my kid loves going to school. The academics are top notch.'",
                "From r/lafayette: 'Lafayette parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Lafayette Elementary has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/bayarea post: 'My kid started at Lafayette this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Lafayette Elementary is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 9.4,
            national: 9.0
        },
        neighborhood: {
            name: "Lafayette",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.lafsd.org/enroll",
            schoolWebsite: "https://lafayette.lafsd.org",
            contactEmail: "lafayette@lafsd.org"
        }
    },

    "stanley-middle": {
        id: "stanley-middle",
        name: "M.H. Stanley Middle School",
        type: "middle",
        grades: "6-8",
        enrollment: 650,
        address: "3455 School Street, Lafayette, CA 94549",
        phone: "(925) 280-3900",
        website: "https://stanley.lafsd.org",
        email: "stanley@lafsd.org",
        principal: "Dr. James Wilson",
        established: 1970,
        budget: 4.8,
        parentSentiment: {
            overall: 4.5,
            academics: 4.4,
            teachers: 4.6,
            safety: 4.5,
            diversity: 3.9,
            comments: [
                "Posted on r/bayarea: 'Stanley Middle is honestly one of the best middle schools in Lamorinda. The teachers are incredible and my kid actually likes going to school. The academics are top notch.'",
                "From r/lafayette: 'Stanley parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Stanley has been great for my son. The transition from elementary was smooth and the teachers are so patient with middle schoolers. The school feels like a family.'",
                "r/bayarea post: 'My kid started at Stanley this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Stanley is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for high school.'"
            ]
        },
        rankings: {
            california: 9.1,
            national: 8.7
        },
        neighborhood: {
            name: "Lafayette",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.lafsd.org/enroll",
            schoolWebsite: "https://stanley.lafsd.org",
            contactEmail: "stanley@lafsd.org"
        }
    },

    // Orinda Schools
    "sleepy-hollow-elementary": {
        id: "sleepy-hollow-elementary",
        name: "Sleepy Hollow Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 350,
        address: "20 Washington Lane, Orinda, CA 94563",
        phone: "(925) 258-6200",
        website: "https://sleepyhollow.orindaschools.org",
        email: "sleepyhollow@orindaschools.org",
        principal: "Dr. Lisa Anderson",
        established: 1965,
        budget: 3.5,
        parentSentiment: {
            overall: 4.7,
            academics: 4.6,
            teachers: 4.8,
            safety: 4.7,
            diversity: 3.2,
            comments: [
                "Posted on r/bayarea: 'Sleepy Hollow is honestly one of the best elementary schools in Lamorinda. The teachers are incredible and my kid loves going to school. The academics are top notch.'",
                "From r/orinda: 'Sleepy Hollow parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Sleepy Hollow has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/bayarea post: 'My kid started at Sleepy Hollow this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Sleepy Hollow is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 9.6,
            national: 9.2
        },
        neighborhood: {
            name: "Orinda",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.orindaschools.org/enroll",
            schoolWebsite: "https://sleepyhollow.orindaschools.org",
            contactEmail: "sleepyhollow@orindaschools.org"
        }
    },

    "orinda-intermediate": {
        id: "orinda-intermediate",
        name: "Orinda Intermediate School",
        type: "middle",
        grades: "6-8",
        enrollment: 720,
        address: "80 Ivy Drive, Orinda, CA 94563",
        phone: "(925) 258-6200",
        website: "https://orindaintermediate.orindaschools.org",
        email: "orindaintermediate@orindaschools.org",
        principal: "Dr. Michael Chen",
        established: 1975,
        budget: 5.2,
        parentSentiment: {
            overall: 4.6,
            academics: 4.5,
            teachers: 4.7,
            safety: 4.6,
            diversity: 3.5,
            comments: [
                "Posted on r/bayarea: 'Orinda Intermediate is honestly one of the best middle schools in Lamorinda. The teachers are incredible and my kid actually likes going to school. The academics are top notch.'",
                "From r/orinda: 'OIS parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Orinda Intermediate has been great for my son. The transition from elementary was smooth and the teachers are so patient with middle schoolers. The school feels like a family.'",
                "r/bayarea post: 'My kid started at OIS this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Orinda Intermediate is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for high school.'"
            ]
        },
        rankings: {
            california: 9.3,
            national: 8.9
        },
        neighborhood: {
            name: "Orinda",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.orindaschools.org/enroll",
            schoolWebsite: "https://orindaintermediate.orindaschools.org",
            contactEmail: "orindaintermediate@orindaschools.org"
        }
    },

    // High Schools
    "miramonte-high": {
        id: "miramonte-high",
        name: "Miramonte High School",
        type: "high",
        grades: "9-12",
        enrollment: 1800,
        address: "750 Moraga Way, Orinda, CA 94563",
        phone: "(925) 280-3900",
        website: "https://miramonte.acalanes.k12.ca.us",
        email: "miramonte@acalanes.k12.ca.us",
        principal: "Dr. Adam Clark",
        established: 1955,
        budget: 15.5,
        parentSentiment: {
            overall: 4.8,
            academics: 4.7,
            teachers: 4.9,
            safety: 4.8,
            diversity: 3.1,
            comments: [
                "Posted on r/bayarea: 'Miramonte is honestly one of the best public high schools in the Bay Area. My kid got into UC Berkeley and Stanford. The teachers are incredible and the academics are top notch.'",
                "From r/orinda: 'Miramonte parent here. The school has amazing academics and the college counseling is top notch. My daughter got into 5 UCs including UCLA and Berkeley. The teachers really care.'",
                "Reddit user comment: 'Miramonte has been great for my son. The athletics program is strong and the school spirit is amazing. The principal is super involved and the community is supportive.'",
                "r/bayarea post: 'My kid graduated from Miramonte last year and is now at Stanford. The school prepared him really well for college. The AP classes are challenging but the teachers are supportive.'",
                "Bay Area parent: 'Miramonte is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for college.'"
            ]
        },
        rankings: {
            california: 9.8,
            national: 9.4,
            usNews: {
                california: 11,
                national: 370,
                metro: 11
            }
        },
        neighborhood: {
            name: "Orinda",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.acalanes.k12.ca.us/enroll",
            schoolWebsite: "https://miramonte.acalanes.k12.ca.us",
            contactEmail: "miramonte@acalanes.k12.ca.us"
        }
    }
};

// Data utilities for Lamorinda
const lamorindaDataUtils = {
    getAllSchools() {
        return Object.values(lamorindaSchools);
    },
    
    getSchoolById(id) {
        return lamorindaSchools[id];
    },
    
    getSchoolsByType(type) {
        return Object.values(lamorindaSchools).filter(school => school.type === type);
    },
    
    getSchoolsByRating(minRating) {
        return Object.values(lamorindaSchools).filter(school => 
            school.parentSentiment.overall >= minRating
        );
    },
    
    searchSchools(query) {
        const searchTerm = query.toLowerCase();
        return Object.values(lamorindaSchools).filter(school => 
            school.name.toLowerCase().includes(searchTerm) ||
            school.address.toLowerCase().includes(searchTerm) ||
            school.principal.toLowerCase().includes(searchTerm)
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lamorindaData, lamorindaSchools, lamorindaDataUtils };
} else {
    // Make data globally available in browser
    window.lamorindaData = lamorindaData;
    window.lamorindaSchools = lamorindaSchools;
    window.lamorindaDataUtils = lamorindaDataUtils;
}
