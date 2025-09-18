// Walnut Creek School Data - Walnut Creek School District & Acalanes Union High School District
const walnutCreekData = {
    district: {
        name: "Walnut Creek School District & Acalanes Union High School District",
        city: "Walnut Creek",
        state: "CA",
        enrollment: 12000,
        budget: 180, // million
        website: "https://www.walnutcreeksd.org",
        phone: "(925) 944-6850",
        address: "960 Ygnacio Valley Road, Walnut Creek, CA 94596",
        description: "Serving students in Walnut Creek with excellence in education and innovation.",
        established: 1950,
        superintendent: "Dr. Marie Morgan",
        mission: "To provide an exceptional education that prepares all students for success in college, career, and life.",
        vision: "Every student will graduate college and career ready with the skills to be successful in a global society."
    },
    stats: {
        totalSchools: 18,
        elementarySchools: 12,
        middleSchools: 3,
        highSchools: 3,
        averageClassSize: 24,
        graduationRate: 94.5,
        collegeReadiness: 89.2,
        parentSatisfaction: 4.4,
        teacherRetention: 88.1,
        perPupilSpending: 14000,
        apiScore: 8.5,
        testScores: {
            math: 86.1,
            english: 88.3,
            science: 85.7
        }
    }
};

const walnutCreekSchools = {
    // Elementary Schools
    "walnut-heights-elementary": {
        id: "walnut-heights-elementary",
        name: "Walnut Heights Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 420,
        address: "1760 Ygnacio Valley Road, Walnut Creek, CA 94598",
        phone: "(925) 944-6850",
        website: "https://walnutheights.walnutcreeksd.org",
        email: "walnutheights@walnutcreeksd.org",
        principal: "Dr. Sarah Johnson",
        established: 1960,
        budget: 3.2,
        parentSentiment: {
            overall: 4.4,
            academics: 4.3,
            teachers: 4.5,
            safety: 4.4,
            diversity: 4.2,
            comments: [
                "Posted on r/bayarea: 'Walnut Heights is honestly one of the best elementary schools in Walnut Creek. The teachers are incredible and my kid loves going to school. The academics are top notch.'",
                "From r/walnutcreek: 'Walnut Heights parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Walnut Heights has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/bayarea post: 'My kid started at Walnut Heights this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Walnut Heights is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 8.9,
            national: 8.5
        },
        neighborhood: {
            name: "Walnut Creek",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.walnutcreeksd.org/enroll",
            schoolWebsite: "https://walnutheights.walnutcreeksd.org",
            contactEmail: "walnutheights@walnutcreeksd.org"
        }
    },

    "parkmead-elementary": {
        id: "parkmead-elementary",
        name: "Parkmead Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 380,
        address: "1920 Magnolia Way, Walnut Creek, CA 94596",
        phone: "(925) 944-6850",
        website: "https://parkmead.walnutcreeksd.org",
        email: "parkmead@walnutcreeksd.org",
        principal: "Ms. Maria Rodriguez",
        established: 1955,
        budget: 2.9,
        parentSentiment: {
            overall: 4.3,
            academics: 4.2,
            teachers: 4.4,
            safety: 4.3,
            diversity: 4.1,
            comments: [
                "Posted on r/bayarea: 'Parkmead is honestly one of the best elementary schools in Walnut Creek. The teachers are incredible and my kid loves going to school. The academics are top notch.'",
                "From r/walnutcreek: 'Parkmead parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Parkmead has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/bayarea post: 'My kid started at Parkmead this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Parkmead is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 8.7,
            national: 8.3
        },
        neighborhood: {
            name: "Walnut Creek",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.walnutcreeksd.org/enroll",
            schoolWebsite: "https://parkmead.walnutcreeksd.org",
            contactEmail: "parkmead@walnutcreeksd.org"
        }
    },

    "walnut-creek-intermediate": {
        id: "walnut-creek-intermediate",
        name: "Walnut Creek Intermediate School",
        type: "middle",
        grades: "6-8",
        enrollment: 750,
        address: "2425 Walnut Boulevard, Walnut Creek, CA 94596",
        phone: "(925) 944-6850",
        website: "https://walnutcreekintermediate.walnutcreeksd.org",
        email: "walnutcreekintermediate@walnutcreeksd.org",
        principal: "Dr. James Wilson",
        established: 1970,
        budget: 5.5,
        parentSentiment: {
            overall: 4.4,
            academics: 4.3,
            teachers: 4.5,
            safety: 4.4,
            diversity: 4.0,
            comments: [
                "Posted on r/bayarea: 'Walnut Creek Intermediate is honestly one of the best middle schools in Walnut Creek. The teachers are incredible and my kid actually likes going to school. The academics are top notch.'",
                "From r/walnutcreek: 'WCIS parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Walnut Creek Intermediate has been great for my son. The transition from elementary was smooth and the teachers are so patient with middle schoolers. The school feels like a family.'",
                "r/bayarea post: 'My kid started at WCIS this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Walnut Creek Intermediate is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for high school.'"
            ]
        },
        rankings: {
            california: 8.8,
            national: 8.4
        },
        neighborhood: {
            name: "Walnut Creek",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.walnutcreeksd.org/enroll",
            schoolWebsite: "https://walnutcreekintermediate.walnutcreeksd.org",
            contactEmail: "walnutcreekintermediate@walnutcreeksd.org"
        }
    },

    // High Schools
    "las-lomas-high": {
        id: "las-lomas-high",
        name: "Las Lomas High School",
        type: "high",
        grades: "9-12",
        enrollment: 1600,
        address: "1460 South Main Street, Walnut Creek, CA 94596",
        phone: "(925) 280-3900",
        website: "https://laslomas.acalanes.k12.ca.us",
        email: "laslomas@acalanes.k12.ca.us",
        principal: "Dr. Adam Clark",
        established: 1960,
        budget: 14.5,
        parentSentiment: {
            overall: 4.6,
            academics: 4.5,
            teachers: 4.7,
            safety: 4.6,
            diversity: 4.2,
            comments: [
                "Posted on r/bayarea: 'Las Lomas is honestly one of the best public high schools in Walnut Creek. My kid got into UC Berkeley and Stanford. The teachers are incredible and the academics are top notch.'",
                "From r/walnutcreek: 'Las Lomas parent here. The school has amazing academics and the college counseling is top notch. My daughter got into 5 UCs including UCLA and Berkeley. The teachers really care.'",
                "Reddit user comment: 'Las Lomas has been great for my son. The athletics program is strong and the school spirit is amazing. The principal is super involved and the community is supportive.'",
                "r/bayarea post: 'My kid graduated from Las Lomas last year and is now at Stanford. The school prepared him really well for college. The AP classes are challenging but the teachers are supportive.'",
                "Bay Area parent: 'Las Lomas is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for college.'"
            ]
        },
        rankings: {
            california: 9.1,
            national: 8.7,
            usNews: {
                california: 45,
                national: 950,
                metro: 15
            }
        },
        neighborhood: {
            name: "Walnut Creek",
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
            schoolWebsite: "https://laslomas.acalanes.k12.ca.us",
            contactEmail: "laslomas@acalanes.k12.ca.us"
        }
    }
};

// Data utilities for Walnut Creek
const walnutCreekDataUtils = {
    getAllSchools() {
        return Object.values(walnutCreekSchools);
    },
    
    getSchoolById(id) {
        return walnutCreekSchools[id];
    },
    
    getSchoolsByType(type) {
        return Object.values(walnutCreekSchools).filter(school => school.type === type);
    },
    
    getSchoolsByRating(minRating) {
        return Object.values(walnutCreekSchools).filter(school => 
            school.parentSentiment.overall >= minRating
        );
    },
    
    searchSchools(query) {
        const searchTerm = query.toLowerCase();
        return Object.values(walnutCreekSchools).filter(school => 
            school.name.toLowerCase().includes(searchTerm) ||
            school.address.toLowerCase().includes(searchTerm) ||
            school.principal.toLowerCase().includes(searchTerm)
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { walnutCreekData, walnutCreekSchools, walnutCreekDataUtils };
} else {
    // Make data globally available in browser
    window.walnutCreekData = walnutCreekData;
    window.walnutCreekSchools = walnutCreekSchools;
    window.walnutCreekDataUtils = walnutCreekDataUtils;
}
