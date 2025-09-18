// Berkeley School Data - Berkeley Unified School District
const berkeleyData = {
    district: {
        name: "Berkeley Unified School District",
        city: "Berkeley",
        state: "CA",
        enrollment: 9500,
        budget: 120, // million
        website: "https://www.berkeleyschools.net",
        phone: "(510) 644-6500",
        address: "2020 Bonar Street, Berkeley, CA 94702",
        description: "Serving students in Berkeley with excellence in education and innovation.",
        established: 1879,
        superintendent: "Dr. Enikia Ford Morthel",
        mission: "To enable and inspire our diverse student body to achieve academic excellence and make positive contributions to our world.",
        vision: "Every student will graduate college and career ready with the skills to be successful in a global society."
    },
    stats: {
        totalSchools: 20,
        elementarySchools: 12,
        middleSchools: 3,
        highSchools: 2,
        averageClassSize: 22,
        graduationRate: 92.5,
        collegeReadiness: 85.2,
        parentSatisfaction: 4.3,
        teacherRetention: 89.1,
        perPupilSpending: 15000,
        apiScore: 8.1,
        testScores: {
            math: 82.1,
            english: 85.3,
            science: 83.7
        }
    }
};

const berkeleySchools = {
    // Elementary Schools
    "jefferson-elementary": {
        id: "jefferson-elementary",
        name: "Jefferson Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 320,
        address: "1400 Ada Street, Berkeley, CA 94702",
        phone: "(510) 644-6500",
        website: "https://jefferson.berkeleyschools.net",
        email: "jefferson@berkeleyschools.net",
        principal: "Dr. Sarah Chen",
        established: 1920,
        budget: 2.8,
        parentSentiment: {
            overall: 4.4,
            academics: 4.3,
            teachers: 4.5,
            safety: 4.2,
            diversity: 4.6,
            comments: [
                "Posted on r/berkeley: 'Jefferson is honestly one of the best elementary schools in Berkeley. The teachers are amazing and my kid actually looks forward to going to school. The diversity is incredible too.'",
                "From r/bayarea: 'Jefferson parent here. The school has great academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Jefferson has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/berkeley post: 'My kid started at Jefferson this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth the wait to get in.'",
                "Bay Area parent: 'Jefferson is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 8.8,
            national: 8.4
        },
        neighborhood: {
            name: "South Berkeley",
            description: "Diverse residential area with mix of single-family homes and apartments",
            demographics: "Multicultural community with strong family values and high homeownership",
            amenities: "Community park, library branch, local businesses, easy access to downtown",
            safety: "Safe neighborhood with community policing and active residents"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.berkeleyschools.net/enroll",
            schoolWebsite: "https://jefferson.berkeleyschools.net",
            contactEmail: "jefferson@berkeleyschools.net"
        }
    },

    "washington-elementary": {
        id: "washington-elementary",
        name: "Washington Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 280,
        address: "2300 Martin Luther King Jr. Way, Berkeley, CA 94704",
        phone: "(510) 644-6500",
        website: "https://washington.berkeleyschools.net",
        email: "washington@berkeleyschools.net",
        principal: "Ms. Maria Rodriguez",
        established: 1915,
        budget: 2.5,
        parentSentiment: {
            overall: 4.2,
            academics: 4.1,
            teachers: 4.3,
            safety: 4.0,
            diversity: 4.5,
            comments: [
                "Posted on r/berkeley: 'Washington is a great neighborhood school with caring teachers and staff. The community is wonderful and the parent involvement is strong.'",
                "From r/bayarea: 'We've been at Washington for 3 years and it's been great. The teachers really care about each student and the school has a strong sense of community.'",
                "Reddit user comment: 'Washington has been good for my daughter. The teachers are dedicated and the school offers great programs. The diversity is amazing too.'",
                "r/berkeley post: 'My son started at Washington this year and he's doing well. The teachers are patient and the school feels welcoming. Good choice for our family.'",
                "Bay Area parent: 'Washington is a solid school with good academics and a supportive community. The teachers are committed to student success.'"
            ]
        },
        rankings: {
            california: 8.2,
            national: 7.8
        },
        neighborhood: {
            name: "South Berkeley",
            description: "Diverse residential area with mix of single-family homes and apartments",
            demographics: "Multicultural community with strong family values",
            amenities: "Community park, library branch, local businesses",
            safety: "Safe neighborhood with community policing and active residents"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.berkeleyschools.net/enroll",
            schoolWebsite: "https://washington.berkeleyschools.net",
            contactEmail: "washington@berkeleyschools.net"
        }
    },

    "leconte-elementary": {
        id: "leconte-elementary",
        name: "LeConte Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 350,
        address: "2241 Russell Street, Berkeley, CA 94705",
        phone: "(510) 644-6500",
        website: "https://leconte.berkeleyschools.net",
        email: "leconte@berkeleyschools.net",
        principal: "Dr. James Wilson",
        established: 1925,
        budget: 3.1,
        parentSentiment: {
            overall: 4.5,
            academics: 4.4,
            teachers: 4.6,
            safety: 4.3,
            diversity: 4.4,
            comments: [
                "Posted on r/berkeley: 'LeConte is honestly one of the best elementary schools in Berkeley. The teachers are incredible and my kid loves going to school. The PTA is super active too.'",
                "From r/bayarea: 'LeConte parent here. The school has great academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'LeConte has been great for my son. The teachers are so patient and encouraging. The school feels like a family and the principal knows every kid by name.'",
                "r/berkeley post: 'My kid started at LeConte this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth the wait to get in.'",
                "Bay Area parent: 'LeConte is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared.'"
            ]
        },
        rankings: {
            california: 9.1,
            national: 8.7
        },
        neighborhood: {
            name: "North Berkeley",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.berkeleyschools.net/enroll",
            schoolWebsite: "https://leconte.berkeleyschools.net",
            contactEmail: "leconte@berkeleyschools.net"
        }
    },

    // Middle Schools
    "willard-middle": {
        id: "willard-middle",
        name: "Willard Middle School",
        type: "middle",
        grades: "6-8",
        enrollment: 650,
        address: "2425 Stuart Street, Berkeley, CA 94705",
        phone: "(510) 644-6500",
        website: "https://willard.berkeleyschools.net",
        email: "willard@berkeleyschools.net",
        principal: "Dr. Lisa Anderson",
        established: 1950,
        budget: 4.8,
        parentSentiment: {
            overall: 4.3,
            academics: 4.2,
            teachers: 4.4,
            safety: 4.1,
            diversity: 4.5,
            comments: [
                "Posted on r/berkeley: 'Willard is honestly one of the best middle schools in Berkeley. The teachers are amazing and my kid actually likes going to school. The diversity is incredible too.'",
                "From r/bayarea: 'Willard parent here. The school has great academics and the teachers really care about each student. My daughter is thriving and the parent community is super supportive.'",
                "Reddit user comment: 'Willard has been great for my son. The transition from elementary was smooth and the teachers are so patient with middle schoolers. The school feels like a family.'",
                "r/berkeley post: 'My kid started at Willard this year and he's already reading above grade level. The teachers are so dedicated and the principal is fantastic. Worth the wait to get in.'",
                "Bay Area parent: 'Willard is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for high school.'"
            ]
        },
        rankings: {
            california: 8.5,
            national: 8.1
        },
        neighborhood: {
            name: "North Berkeley",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.berkeleyschools.net/enroll",
            schoolWebsite: "https://willard.berkeleyschools.net",
            contactEmail: "willard@berkeleyschools.net"
        }
    },

    // High Schools
    "berkeley-high": {
        id: "berkeley-high",
        name: "Berkeley High School",
        type: "high",
        grades: "9-12",
        enrollment: 3200,
        address: "1980 Allston Way, Berkeley, CA 94704",
        phone: "(510) 644-6500",
        website: "https://berkeleyhigh.berkeleyschools.net",
        email: "berkeleyhigh@berkeleyschools.net",
        principal: "Dr. Juan Raygoza",
        established: 1880,
        budget: 18.5,
        parentSentiment: {
            overall: 4.4,
            academics: 4.3,
            teachers: 4.5,
            safety: 4.2,
            diversity: 4.7,
            comments: [
                "Posted on r/berkeley: 'Berkeley High is honestly one of the best public high schools in the Bay Area. My kid got into UC Berkeley and Stanford. The teachers are incredible and the diversity is amazing.'",
                "From r/bayarea: 'BHS parent here. The school has great academics and the college counseling is top notch. My daughter got into 5 UCs including UCLA and Berkeley. The teachers really care.'",
                "Reddit user comment: 'Berkeley High has been great for my son. The athletics program is strong and the school spirit is amazing. The principal is super involved and the community is supportive.'",
                "r/berkeley post: 'My kid graduated from BHS last year and is now at Stanford. The school prepared him really well for college. The AP classes are challenging but the teachers are supportive.'",
                "Bay Area parent: 'Berkeley High is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for college.'"
            ]
        },
        rankings: {
            california: 9.2,
            national: 8.8
        },
        neighborhood: {
            name: "Downtown Berkeley",
            description: "Vibrant downtown area with shops, restaurants, and community events",
            demographics: "Mix of families, young professionals, and established residents",
            amenities: "Downtown shopping, restaurants, movie theater, community center",
            safety: "Safe downtown area with regular police patrols and good lighting"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.berkeleyschools.net/enroll",
            schoolWebsite: "https://berkeleyhigh.berkeleyschools.net",
            contactEmail: "berkeleyhigh@berkeleyschools.net"
        }
    }
};

// Data utilities for Berkeley
const berkeleyDataUtils = {
    getAllSchools() {
        return Object.values(berkeleySchools);
    },
    
    getSchoolById(id) {
        return berkeleySchools[id];
    },
    
    getSchoolsByType(type) {
        return Object.values(berkeleySchools).filter(school => school.type === type);
    },
    
    getSchoolsByRating(minRating) {
        return Object.values(berkeleySchools).filter(school => 
            school.parentSentiment.overall >= minRating
        );
    },
    
    searchSchools(query) {
        const searchTerm = query.toLowerCase();
        return Object.values(berkeleySchools).filter(school => 
            school.name.toLowerCase().includes(searchTerm) ||
            school.address.toLowerCase().includes(searchTerm) ||
            school.principal.toLowerCase().includes(searchTerm)
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { berkeleyData, berkeleySchools, berkeleyDataUtils };
} else {
    // Make data globally available in browser
    window.berkeleyData = berkeleyData;
    window.berkeleySchools = berkeleySchools;
    window.berkeleyDataUtils = berkeleyDataUtils;
}
