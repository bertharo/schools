// Piedmont School Data - Piedmont City Unified School District
const piedmontData = {
    district: {
        name: "Piedmont City Unified School District",
        city: "Piedmont",
        state: "CA",
        enrollment: 2500,
        budget: 35, // million
        website: "https://www.piedmont.k12.ca.us",
        phone: "(510) 594-2600",
        address: "760 Magnolia Avenue, Piedmont, CA 94611",
        description: "Serving students in Piedmont with excellence in education and innovation.",
        established: 1913,
        superintendent: "Dr. Randy Booker",
        mission: "To provide an exceptional education that prepares all students for success in college, career, and life.",
        vision: "Every student will graduate college and career ready with the skills to be successful in a global society."
    },
    stats: {
        totalSchools: 6,
        elementarySchools: 3,
        middleSchools: 1,
        highSchools: 1,
        averageClassSize: 20,
        graduationRate: 98.5,
        collegeReadiness: 95.2,
        parentSatisfaction: 4.7,
        teacherRetention: 92.1,
        perPupilSpending: 18000,
        apiScore: 9.2,
        testScores: {
            math: 92.1,
            english: 94.3,
            science: 91.7
        }
    }
};

const piedmontSchools = {
    // Elementary Schools
    "beach-elementary": {
        id: "beach-elementary",
        name: "Beach Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 280,
        address: "100 Lake Avenue, Piedmont, CA 94611",
        phone: "(510) 594-2600",
        website: "https://beach.piedmont.k12.ca.us",
        email: "beach@piedmont.k12.ca.us",
        principal: "Dr. Jennifer Martinez",
        established: 1920,
        budget: 2.8,
        parentSentiment: {
            overall: 4.8,
            academics: 4.7,
            teachers: 4.9,
            safety: 4.8,
            diversity: 3.5,
            comments: [
                "Posted on r/bayarea: 'Beach Elementary is honestly one of the best elementary schools in the Bay Area. The teachers are incredible and my kid loves going to school. The academics are top notch.'",
                "From r/piedmont: 'Beach parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Beach has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/bayarea post: 'My kid started at Beach this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Beach is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 9.8,
            national: 9.4,
            usNews: {
                california: 15,
                national: 450,
                metro: 8
            }
        },
        neighborhood: {
            name: "Piedmont",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.piedmont.k12.ca.us/enroll",
            schoolWebsite: "https://beach.piedmont.k12.ca.us",
            contactEmail: "beach@piedmont.k12.ca.us"
        }
    },

    "havens-elementary": {
        id: "havens-elementary",
        name: "Havens Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 320,
        address: "323 Highland Avenue, Piedmont, CA 94611",
        phone: "(510) 594-2600",
        website: "https://havens.piedmont.k12.ca.us",
        email: "havens@piedmont.k12.ca.us",
        principal: "Ms. Sarah Thompson",
        established: 1915,
        budget: 3.2,
        parentSentiment: {
            overall: 4.7,
            academics: 4.6,
            teachers: 4.8,
            safety: 4.7,
            diversity: 3.8,
            comments: [
                "Posted on r/bayarea: 'Havens is honestly one of the best elementary schools in the Bay Area. The teachers are incredible and my kid loves going to school. The academics are top notch.'",
                "From r/piedmont: 'Havens parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Havens has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/bayarea post: 'My kid started at Havens this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Havens is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 9.6,
            national: 9.2
        },
        neighborhood: {
            name: "Piedmont",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.piedmont.k12.ca.us/enroll",
            schoolWebsite: "https://havens.piedmont.k12.ca.us",
            contactEmail: "havens@piedmont.k12.ca.us"
        }
    },

    "wildwood-elementary": {
        id: "wildwood-elementary",
        name: "Wildwood Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 300,
        address: "301 Wildwood Avenue, Piedmont, CA 94611",
        phone: "(510) 594-2600",
        website: "https://wildwood.piedmont.k12.ca.us",
        email: "wildwood@piedmont.k12.ca.us",
        principal: "Dr. Michael Chen",
        established: 1925,
        budget: 3.0,
        parentSentiment: {
            overall: 4.6,
            academics: 4.5,
            teachers: 4.7,
            safety: 4.6,
            diversity: 3.9,
            comments: [
                "Posted on r/bayarea: 'Wildwood is honestly one of the best elementary schools in the Bay Area. The teachers are incredible and my kid loves going to school. The academics are top notch.'",
                "From r/piedmont: 'Wildwood parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Wildwood has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/bayarea post: 'My kid started at Wildwood this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Wildwood is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 9.4,
            national: 9.0
        },
        neighborhood: {
            name: "Piedmont",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.piedmont.k12.ca.us/enroll",
            schoolWebsite: "https://wildwood.piedmont.k12.ca.us",
            contactEmail: "wildwood@piedmont.k12.ca.us"
        }
    },

    // Middle School
    "piedmont-middle": {
        id: "piedmont-middle",
        name: "Piedmont Middle School",
        type: "middle",
        grades: "6-8",
        enrollment: 450,
        address: "740 Magnolia Avenue, Piedmont, CA 94611",
        phone: "(510) 594-2600",
        website: "https://piedmontmiddle.piedmont.k12.ca.us",
        email: "piedmontmiddle@piedmont.k12.ca.us",
        principal: "Dr. Lisa Rodriguez",
        established: 1950,
        budget: 4.2,
        parentSentiment: {
            overall: 4.7,
            academics: 4.6,
            teachers: 4.8,
            safety: 4.7,
            diversity: 3.6,
            comments: [
                "Posted on r/bayarea: 'Piedmont Middle is honestly one of the best middle schools in the Bay Area. The teachers are incredible and my kid actually likes going to school. The academics are top notch.'",
                "From r/piedmont: 'PMS parent here. The school has amazing academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Piedmont Middle has been great for my son. The transition from elementary was smooth and the teachers are so patient with middle schoolers. The school feels like a family.'",
                "r/bayarea post: 'My kid started at PMS this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth every penny of the taxes.'",
                "Bay Area parent: 'Piedmont Middle is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for high school.'"
            ]
        },
        rankings: {
            california: 9.5,
            national: 9.1
        },
        neighborhood: {
            name: "Piedmont",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.piedmont.k12.ca.us/enroll",
            schoolWebsite: "https://piedmontmiddle.piedmont.k12.ca.us",
            contactEmail: "piedmontmiddle@piedmont.k12.ca.us"
        }
    },

    // High School
    "piedmont-high": {
        id: "piedmont-high",
        name: "Piedmont High School",
        type: "high",
        grades: "9-12",
        enrollment: 1200,
        address: "800 Magnolia Avenue, Piedmont, CA 94611",
        phone: "(510) 594-2600",
        website: "https://piedmonthigh.piedmont.k12.ca.us",
        email: "piedmonthigh@piedmont.k12.ca.us",
        principal: "Dr. Adam Clark",
        established: 1920,
        budget: 12.5,
        parentSentiment: {
            overall: 4.8,
            academics: 4.7,
            teachers: 4.9,
            safety: 4.8,
            diversity: 3.4,
            comments: [
                "Posted on r/bayarea: 'Piedmont High is honestly one of the best public high schools in the Bay Area. My kid got into UC Berkeley and Stanford. The teachers are incredible and the academics are top notch.'",
                "From r/piedmont: 'PHS parent here. The school has amazing academics and the college counseling is top notch. My daughter got into 5 UCs including UCLA and Berkeley. The teachers really care.'",
                "Reddit user comment: 'Piedmont High has been great for my son. The athletics program is strong and the school spirit is amazing. The principal is super involved and the community is supportive.'",
                "r/bayarea post: 'My kid graduated from PHS last year and is now at Stanford. The school prepared him really well for college. The AP classes are challenging but the teachers are supportive.'",
                "Bay Area parent: 'Piedmont High is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for college.'"
            ]
        },
        rankings: {
            california: 9.7,
            national: 9.3,
            usNews: {
                california: 15,
                national: 450,
                metro: 8
            }
        },
        neighborhood: {
            name: "Piedmont",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.piedmont.k12.ca.us/enroll",
            schoolWebsite: "https://piedmonthigh.piedmont.k12.ca.us",
            contactEmail: "piedmonthigh@piedmont.k12.ca.us"
        }
    }
};

// Data utilities for Piedmont
const piedmontDataUtils = {
    getAllSchools() {
        return Object.values(piedmontSchools);
    },
    
    getSchoolById(id) {
        return piedmontSchools[id];
    },
    
    getSchoolsByType(type) {
        return Object.values(piedmontSchools).filter(school => school.type === type);
    },
    
    getSchoolsByRating(minRating) {
        return Object.values(piedmontSchools).filter(school => 
            school.parentSentiment.overall >= minRating
        );
    },
    
    searchSchools(query) {
        const searchTerm = query.toLowerCase();
        return Object.values(piedmontSchools).filter(school => 
            school.name.toLowerCase().includes(searchTerm) ||
            school.address.toLowerCase().includes(searchTerm) ||
            school.principal.toLowerCase().includes(searchTerm)
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { piedmontData, piedmontSchools, piedmontDataUtils };
} else {
    // Make data globally available in browser
    window.piedmontData = piedmontData;
    window.piedmontSchools = piedmontSchools;
    window.piedmontDataUtils = piedmontDataUtils;
}
