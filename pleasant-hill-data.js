// Pleasant Hill School Data - Mount Diablo Unified School District
const pleasantHillData = {
    district: {
        name: "Mount Diablo Unified School District",
        city: "Pleasant Hill",
        state: "CA",
        enrollment: 32000,
        budget: 450, // million
        website: "https://www.mdusd.org",
        phone: "(925) 682-8000",
        address: "1936 Carlotta Drive, Concord, CA 94519",
        description: "Serving students in Pleasant Hill, Concord, Walnut Creek, and surrounding communities with excellence in education.",
        established: 1851,
        superintendent: "Dr. Adam Clark",
        mission: "To provide a world-class education that prepares all students for college, career, and life success.",
        vision: "Every student will graduate college and career ready with the skills to be successful in a global society."
    },
    stats: {
        totalSchools: 56,
        elementarySchools: 35,
        middleSchools: 12,
        highSchools: 9,
        averageClassSize: 24,
        graduationRate: 89.2,
        collegeReadiness: 78.5,
        parentSatisfaction: 4.1,
        teacherRetention: 87.3,
        perPupilSpending: 12500,
        apiScore: 7.2,
        testScores: {
            math: 78.5,
            english: 82.1,
            science: 80.3
        }
    }
};

const pleasantHillSchools = {
    // Elementary Schools
    "valhalla-elementary": {
        id: "valhalla-elementary",
        name: "Valhalla Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 420,
        address: "401 Valhalla Drive, Pleasant Hill, CA 94523",
        phone: "(925) 682-8000",
        website: "https://valhalla.mdusd.org",
        email: "valhalla@mdusd.org",
        principal: "Dr. Sarah Johnson",
        established: 1965,
        budget: 2.8,
        parentSentiment: {
            overall: 4.3,
            academics: 4.2,
            teachers: 4.4,
            safety: 4.1,
            diversity: 4.0,
            comments: [
                "Valhalla has been amazing for our daughter. The teachers are dedicated and the community is wonderful.",
                "Great school with excellent programs. The principal is very involved and caring.",
                "Love the small class sizes and individual attention. My child has thrived here.",
                "Strong academic program with good support for different learning styles.",
                "The parent community is very active and supportive of the school."
            ]
        },
        rankings: {
            california: 8.2,
            national: 7.8
        },
        neighborhood: {
            name: "Valhalla",
            description: "Family-friendly neighborhood with tree-lined streets and well-maintained homes",
            demographics: "Diverse community with mix of families, professionals, and retirees",
            amenities: "Parks, community center, shopping centers nearby",
            safety: "Very safe area with low crime rates, active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.mdusd.org/enroll",
            schoolWebsite: "https://valhalla.mdusd.org",
            contactEmail: "valhalla@mdusd.org"
        }
    },
    
    "seis-elementary": {
        id: "seis-elementary",
        name: "Seis Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 380,
        address: "2300 Seis Drive, Pleasant Hill, CA 94523",
        phone: "(925) 682-8000",
        website: "https://seis.mdusd.org",
        email: "seis@mdusd.org",
        principal: "Ms. Maria Rodriguez",
        established: 1972,
        budget: 2.6,
        parentSentiment: {
            overall: 4.1,
            academics: 4.0,
            teachers: 4.2,
            safety: 4.0,
            diversity: 4.3,
            comments: [
                "Seis Elementary has a wonderful bilingual program and diverse student body.",
                "Great teachers who really care about the students. Strong community feel.",
                "The school has improved significantly in recent years. Very happy with our choice.",
                "Good academic program with excellent support for English learners.",
                "The principal is very approachable and the staff is dedicated."
            ]
        },
        rankings: {
            california: 7.8,
            national: 7.4
        },
        neighborhood: {
            name: "Seis Neighborhood",
            description: "Diverse residential area with mix of single-family homes and apartments",
            demographics: "Multicultural community with strong family values",
            amenities: "Community park, library branch, local businesses",
            safety: "Safe neighborhood with community policing and active residents"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.mdusd.org/enroll",
            schoolWebsite: "https://seis.mdusd.org",
            contactEmail: "seis@mdusd.org"
        }
    },

    "strandwood-elementary": {
        id: "strandwood-elementary",
        name: "Strandwood Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 450,
        address: "1800 Strandwood Drive, Pleasant Hill, CA 94523",
        phone: "(925) 682-8000",
        website: "https://strandwood.mdusd.org",
        email: "strandwood@mdusd.org",
        principal: "Mr. David Chen",
        established: 1968,
        budget: 3.1,
        parentSentiment: {
            overall: 4.4,
            academics: 4.3,
            teachers: 4.5,
            safety: 4.2,
            diversity: 3.8,
            comments: [
                "Strandwood is an excellent school with outstanding teachers and programs.",
                "The STEM program here is fantastic. My child loves the science labs.",
                "Great parent involvement and strong academic focus. Highly recommend.",
                "The principal is very innovative and the school has great resources.",
                "Wonderful community school with caring staff and engaged families."
            ]
        },
        rankings: {
            california: 8.5,
            national: 8.1
        },
        neighborhood: {
            name: "Strandwood",
            description: "Upscale residential neighborhood with newer homes and excellent schools",
            demographics: "Well-educated families, high homeownership rates",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with gated communities and private security"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.mdusd.org/enroll",
            schoolWebsite: "https://strandwood.mdusd.org",
            contactEmail: "strandwood@mdusd.org"
        }
    },

    // Middle Schools
    "pleasant-hill-middle": {
        id: "pleasant-hill-middle",
        name: "Pleasant Hill Middle School",
        type: "middle",
        grades: "6-8",
        enrollment: 680,
        address: "1 Santa Barbara Road, Pleasant Hill, CA 94523",
        phone: "(925) 682-8000",
        website: "https://phms.mdusd.org",
        email: "phms@mdusd.org",
        principal: "Dr. Jennifer Martinez",
        established: 1960,
        budget: 4.2,
        parentSentiment: {
            overall: 4.2,
            academics: 4.1,
            teachers: 4.3,
            safety: 4.0,
            diversity: 4.2,
            comments: [
                "Pleasant Hill Middle has great teachers and a supportive environment for students.",
                "The school offers excellent extracurricular activities and sports programs.",
                "Good transition from elementary school. The staff is very helpful.",
                "Strong academic program with good preparation for high school.",
                "The principal is very involved and the school has a positive culture."
            ]
        },
        rankings: {
            california: 8.0,
            national: 7.6
        },
        neighborhood: {
            name: "Pleasant Hill Downtown",
            description: "Vibrant downtown area with shops, restaurants, and community events",
            demographics: "Mix of families, young professionals, and established residents",
            amenities: "Downtown shopping, restaurants, movie theater, community center",
            safety: "Safe downtown area with regular police patrols and good lighting"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.mdusd.org/enroll",
            schoolWebsite: "https://phms.mdusd.org",
            contactEmail: "phms@mdusd.org"
        }
    },

    "walnut-wood-middle": {
        id: "walnut-wood-middle",
        name: "Walnut Wood Middle School",
        type: "middle",
        grades: "6-8",
        enrollment: 720,
        address: "2050 Walnut Boulevard, Pleasant Hill, CA 94523",
        phone: "(925) 682-8000",
        website: "https://walnutwood.mdusd.org",
        email: "walnutwood@mdusd.org",
        principal: "Mr. Robert Kim",
        established: 1975,
        budget: 4.5,
        parentSentiment: {
            overall: 4.0,
            academics: 3.9,
            teachers: 4.1,
            safety: 3.8,
            diversity: 4.4,
            comments: [
                "Walnut Wood has a diverse student body and good academic programs.",
                "The school is working hard to improve and the teachers are dedicated.",
                "Good support for students with different learning needs.",
                "The principal is approachable and the school has potential.",
                "Some challenges but overall a decent middle school experience."
            ]
        },
        rankings: {
            california: 7.2,
            national: 6.8
        },
        neighborhood: {
            name: "Walnut Wood",
            description: "Established residential neighborhood with mature trees and parks",
            demographics: "Diverse community with mix of income levels and backgrounds",
            amenities: "Community park, recreation center, local shops",
            safety: "Generally safe area with some concerns about after-school activities"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.mdusd.org/enroll",
            schoolWebsite: "https://walnutwood.mdusd.org",
            contactEmail: "walnutwood@mdusd.org"
        }
    },

    // High Schools
    "college-park-high": {
        id: "college-park-high",
        name: "College Park High School",
        type: "high",
        grades: "9-12",
        enrollment: 1850,
        address: "201 Viking Drive, Pleasant Hill, CA 94523",
        phone: "(925) 682-8000",
        website: "https://collegepark.mdusd.org",
        email: "collegepark@mdusd.org",
        principal: "Dr. Michael Thompson",
        established: 1968,
        budget: 12.5,
        parentSentiment: {
            overall: 4.3,
            academics: 4.2,
            teachers: 4.4,
            safety: 4.1,
            diversity: 4.0,
            comments: [
                "College Park is an excellent high school with great teachers and programs.",
                "The AP and honors programs are outstanding. Great preparation for college.",
                "Strong athletics and extracurricular activities. Great school spirit.",
                "The counseling department is very helpful with college planning.",
                "Wonderful community school with engaged students and families."
            ]
        },
        rankings: {
            california: 8.3,
            national: 7.9
        },
        neighborhood: {
            name: "College Park",
            description: "Well-established neighborhood near the high school with family homes",
            demographics: "Mix of families with high school students and empty nesters",
            amenities: "Sports fields, community pool, shopping centers nearby",
            safety: "Safe residential area with good street lighting and active community"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.mdusd.org/enroll",
            schoolWebsite: "https://collegepark.mdusd.org",
            contactEmail: "collegepark@mdusd.org"
        }
    },

    "northgate-high": {
        id: "northgate-high",
        name: "Northgate High School",
        type: "high",
        grades: "9-12",
        enrollment: 1650,
        address: "425 Castle Rock Road, Walnut Creek, CA 94598",
        phone: "(925) 682-8000",
        website: "https://northgate.mdusd.org",
        email: "northgate@mdusd.org",
        principal: "Dr. Lisa Anderson",
        established: 1975,
        budget: 11.8,
        parentSentiment: {
            overall: 4.5,
            academics: 4.4,
            teachers: 4.6,
            safety: 4.3,
            diversity: 3.9,
            comments: [
                "Northgate is one of the best high schools in the area. Excellent academics.",
                "Outstanding teachers and rigorous curriculum. Great college preparation.",
                "The school has amazing facilities and resources for students.",
                "Strong community support and engaged parent involvement.",
                "Highly recommend Northgate for serious students who want to excel."
            ]
        },
        rankings: {
            california: 9.1,
            national: 8.7
        },
        neighborhood: {
            name: "Northgate",
            description: "Upscale residential area with excellent schools and amenities",
            demographics: "High-income families, well-educated community",
            amenities: "Golf course, country club, upscale shopping, parks",
            safety: "Very safe area with private security and active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.mdusd.org/enroll",
            schoolWebsite: "https://northgate.mdusd.org",
            contactEmail: "northgate@mdusd.org"
        }
    }
};

// Data utilities for Pleasant Hill
const pleasantHillDataUtils = {
    getAllSchools() {
        return Object.values(pleasantHillSchools);
    },
    
    getSchoolById(id) {
        return pleasantHillSchools[id];
    },
    
    getSchoolsByType(type) {
        return Object.values(pleasantHillSchools).filter(school => school.type === type);
    },
    
    getSchoolsByRating(minRating) {
        return Object.values(pleasantHillSchools).filter(school => 
            school.parentSentiment.overall >= minRating
        );
    },
    
    searchSchools(query) {
        const searchTerm = query.toLowerCase();
        return Object.values(pleasantHillSchools).filter(school => 
            school.name.toLowerCase().includes(searchTerm) ||
            school.address.toLowerCase().includes(searchTerm) ||
            school.principal.toLowerCase().includes(searchTerm)
        );
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { pleasantHillData, pleasantHillSchools, pleasantHillDataUtils };
} else {
    // Make data globally available in browser
    window.pleasantHillData = pleasantHillData;
    window.pleasantHillSchools = pleasantHillSchools;
    window.pleasantHillDataUtils = pleasantHillDataUtils;
}
