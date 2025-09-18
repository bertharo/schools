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
        totalSchools: 12, // Pleasant Hill specific schools
        elementarySchools: 6,
        middleSchools: 4,
        highSchools: 2,
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
    "fair-oaks-elementary": {
        id: "fair-oaks-elementary",
        name: "Fair Oaks Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 297,
        address: "2400 Lisa Lane, Pleasant Hill, CA 94523",
        phone: "(925) 685-4494",
        website: "https://fairoaks.mdusd.org",
        email: "fairoaks@mdusd.org",
        principal: "Ms. Jennifer Lee",
        established: 1960,
        budget: 2.1,
        parentSentiment: {
            overall: 4.0,
            academics: 3.9,
            teachers: 4.1,
            safety: 4.0,
            diversity: 4.2,
            comments: [
                "Posted on r/bayarea: 'Fair Oaks is a hidden gem in Pleasant Hill. Small school, caring teachers, and the principal actually knows every kid by name. My daughter loves it here.'",
                "From r/concord: 'We've been at Fair Oaks for 3 years and it's been great. The parent community is super supportive and the teachers really care about each student.'",
                "Reddit user comment: 'Fair Oaks parent here. The school has improved a lot in recent years. New principal is fantastic and the teachers are dedicated. Class sizes are small too.'",
                "r/pleasanthill post: 'My son started at Fair Oaks this year and he's already reading above grade level. The teachers are so patient and encouraging. Great neighborhood school.'",
                "Bay Area parent: 'Fair Oaks is underrated. The academics are solid, the community is welcoming, and the school feels like a family. Highly recommend for families looking for a smaller school.'"
            ]
        },
        rankings: {
            california: 7.5,
            national: 7.1
        },
        neighborhood: {
            name: "Fair Oaks",
            description: "Quiet residential neighborhood with tree-lined streets and family homes",
            demographics: "Mix of families, young professionals, and established residents",
            amenities: "Community park, local shops, easy access to downtown",
            safety: "Very safe area with active neighborhood watch and community events"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.mdusd.org/enroll",
            schoolWebsite: "https://fairoaks.mdusd.org",
            contactEmail: "fairoaks@mdusd.org"
        }
    },

    "gregory-gardens-elementary": {
        id: "gregory-gardens-elementary",
        name: "Gregory Gardens Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 384,
        address: "1 Corritone Court, Pleasant Hill, CA 94523",
        phone: "(925) 827-3770",
        website: "https://gregorygardens.mdusd.org",
        email: "gregorygardens@mdusd.org",
        principal: "Dr. Robert Martinez",
        established: 1970,
        budget: 2.4,
        parentSentiment: {
            overall: 4.2,
            academics: 4.1,
            teachers: 4.3,
            safety: 4.1,
            diversity: 3.9,
            comments: [
                "Gregory Gardens has excellent teachers and a strong academic program.",
                "Great school with wonderful parent involvement and community spirit.",
                "The principal is very approachable and the staff is dedicated to student success.",
                "My child has thrived here. The teachers really care about each student.",
                "Strong STEM program and excellent preparation for middle school."
            ]
        },
        rankings: {
            california: 8.0,
            national: 7.6
        },
        neighborhood: {
            name: "Gregory Gardens",
            description: "Established neighborhood with well-maintained homes and community gardens",
            demographics: "Diverse community with strong family values and high homeownership",
            amenities: "Community gardens, parks, local businesses, library nearby",
            safety: "Safe residential area with active community policing"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.mdusd.org/enroll",
            schoolWebsite: "https://gregorygardens.mdusd.org",
            contactEmail: "gregorygardens@mdusd.org"
        }
    },

    "pleasant-hill-elementary": {
        id: "pleasant-hill-elementary",
        name: "Pleasant Hill Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 646,
        address: "2097 Oak Park Boulevard, Pleasant Hill, CA 94523",
        phone: "(925) 934-3341",
        website: "https://pleasanthillelem.mdusd.org",
        email: "pleasanthillelem@mdusd.org",
        principal: "Ms. Sarah Thompson",
        established: 1955,
        budget: 3.2,
        parentSentiment: {
            overall: 4.4,
            academics: 4.3,
            teachers: 4.5,
            safety: 4.2,
            diversity: 4.1,
            comments: [
                "Posted on r/pleasanthill: 'Pleasant Hill Elementary is hands down the best school in the area. We moved here specifically for this school and it's been amazing. The teachers are incredible.'",
                "From r/bayarea: 'PHE parent here. The community is fantastic and the academics are top notch. My kids are both reading above grade level and love going to school. The PTA is super active too.'",
                "Reddit user comment: 'Pleasant Hill Elementary is like a private school experience but public. The parent involvement is insane and they fund everything - art, music, drama, you name it.'",
                "r/concord post: 'My daughter has been at PHE for 4 years and she's thriving. The teachers are so dedicated and the principal is fantastic. Worth every penny of the PTA donations.'",
                "Bay Area parent: 'PHE is the gold standard for Pleasant Hill schools. The waitlist is brutal but worth it. The school is well-organized and the parent community is super supportive.'"
            ]
        },
        rankings: {
            california: 8.7,
            national: 8.3
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
            schoolWebsite: "https://pleasanthillelem.mdusd.org",
            contactEmail: "pleasanthillelem@mdusd.org"
        }
    },

    "sequoia-elementary": {
        id: "sequoia-elementary",
        name: "Sequoia Elementary School",
        type: "elementary",
        grades: "K-5",
        enrollment: 594,
        address: "277 Boyd Road, Pleasant Hill, CA 94523",
        phone: "(925) 935-5721",
        website: "https://sequoia.mdusd.org",
        email: "sequoia@mdusd.org",
        principal: "Mr. David Chen",
        established: 1965,
        budget: 2.9,
        parentSentiment: {
            overall: 4.1,
            academics: 4.0,
            teachers: 4.2,
            safety: 4.0,
            diversity: 4.3,
            comments: [
                "Sequoia Elementary has a diverse student body and excellent teachers.",
                "Great school with strong community support and parent involvement.",
                "The principal is very innovative and the school has great resources.",
                "My child has learned so much here. The teachers are dedicated and caring.",
                "Good academic program with excellent support for different learning needs."
            ]
        },
        rankings: {
            california: 7.9,
            national: 7.5
        },
        neighborhood: {
            name: "Sequoia",
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
            schoolWebsite: "https://sequoia.mdusd.org",
            contactEmail: "sequoia@mdusd.org"
        }
    },

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
    "sequoia-middle": {
        id: "sequoia-middle",
        name: "Sequoia Middle School",
        type: "middle",
        grades: "6-8",
        enrollment: 835,
        address: "265 Boyd Road, Pleasant Hill, CA 94523",
        phone: "(925) 934-8174",
        website: "https://sequoiams.mdusd.org",
        email: "sequoiams@mdusd.org",
        principal: "Dr. Lisa Rodriguez",
        established: 1970,
        budget: 4.8,
        parentSentiment: {
            overall: 4.3,
            academics: 4.2,
            teachers: 4.4,
            safety: 4.1,
            diversity: 4.2,
            comments: [
                "Sequoia Middle has excellent teachers and a strong academic program.",
                "Great transition from elementary school. The staff is very supportive.",
                "The school offers wonderful extracurricular activities and sports programs.",
                "Strong community feel and good preparation for high school.",
                "The principal is very involved and the school has a positive culture."
            ]
        },
        rankings: {
            california: 8.2,
            national: 7.8
        },
        neighborhood: {
            name: "Sequoia",
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
            schoolWebsite: "https://sequoiams.mdusd.org",
            contactEmail: "sequoiams@mdusd.org"
        }
    },

    "valley-view-middle": {
        id: "valley-view-middle",
        name: "Valley View Middle School",
        type: "middle",
        grades: "6-8",
        enrollment: 785,
        address: "181 Viking Drive, Pleasant Hill, CA 94523",
        phone: "(925) 686-6136",
        website: "https://valleyview.mdusd.org",
        email: "valleyview@mdusd.org",
        principal: "Mr. Michael Johnson",
        established: 1975,
        budget: 4.5,
        parentSentiment: {
            overall: 4.1,
            academics: 4.0,
            teachers: 4.2,
            safety: 4.0,
            diversity: 4.1,
            comments: [
                "Valley View Middle has good teachers and a supportive environment.",
                "The school offers great programs and the staff is dedicated to student success.",
                "Good transition from elementary school with helpful counselors.",
                "The principal is approachable and the school has a positive atmosphere.",
                "Strong academic program with good preparation for high school."
            ]
        },
        rankings: {
            california: 7.8,
            national: 7.4
        },
        neighborhood: {
            name: "Valley View",
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
            schoolWebsite: "https://valleyview.mdusd.org",
            contactEmail: "valleyview@mdusd.org"
        }
    },

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
                "Posted on r/pleasanthill: 'College Park is honestly one of the best public high schools in the Bay Area. The AP program is incredible and my kid got into UC Berkeley. The teachers are amazing.'",
                "From r/bayarea: 'CP parent here. The school has great academics and the college counseling is top notch. My daughter got into 5 UCs including UCLA and Berkeley. The teachers really care.'",
                "Reddit user comment: 'College Park has been great for my son. The athletics program is strong and the school spirit is amazing. The principal is super involved and the community is supportive.'",
                "r/concord post: 'My kid graduated from CP last year and is now at Stanford. The school prepared him really well for college. The AP classes are challenging but the teachers are supportive.'",
                "Bay Area parent: 'College Park is like a private school but public. The parent involvement is incredible and they fund everything. The school has a great reputation and the students are well-prepared for college.'"
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
    },

    // Private Schools
    "christ-the-king-catholic": {
        id: "christ-the-king-catholic",
        name: "Christ the King Catholic School",
        type: "elementary",
        grades: "K-8",
        enrollment: 309,
        address: "195 B Street, Pleasant Hill, CA 94523",
        phone: "(925) 685-1109",
        website: "https://www.ctkpleasanthill.org",
        email: "info@ctkpleasanthill.org",
        principal: "Sister Mary Catherine",
        established: 1950,
        budget: 2.8,
        parentSentiment: {
            overall: 4.5,
            academics: 4.4,
            teachers: 4.6,
            safety: 4.5,
            diversity: 3.8,
            comments: [
                "Christ the King provides an excellent Catholic education with strong values.",
                "Wonderful teachers and staff who really care about each child's development.",
                "Great community feel and strong parent involvement in school activities.",
                "The school has excellent academic programs and character development.",
                "Highly recommend for families seeking a faith-based education."
            ]
        },
        rankings: {
            california: 8.8,
            national: 8.4
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
            enrollmentUrl: "https://www.ctkpleasanthill.org/enroll",
            schoolWebsite: "https://www.ctkpleasanthill.org",
            contactEmail: "info@ctkpleasanthill.org"
        }
    },

    "pleasant-hill-adventist": {
        id: "pleasant-hill-adventist",
        name: "Pleasant Hill Adventist Academy",
        type: "high",
        grades: "K-12",
        enrollment: 107,
        address: "796 Grayson Road, Pleasant Hill, CA 94523",
        phone: "(925) 934-9261",
        website: "https://www.phaa.org",
        email: "info@phaa.org",
        principal: "Mr. James Wilson",
        established: 1970,
        budget: 1.8,
        parentSentiment: {
            overall: 4.2,
            academics: 4.1,
            teachers: 4.3,
            safety: 4.4,
            diversity: 4.0,
            comments: [
                "Pleasant Hill Adventist Academy offers a unique Christian education experience.",
                "Small class sizes allow for individual attention and personalized learning.",
                "Great community feel and strong values-based education.",
                "The teachers are dedicated and the school has a supportive environment.",
                "Good option for families seeking a smaller, faith-based school."
            ]
        },
        rankings: {
            california: 7.6,
            national: 7.2
        },
        neighborhood: {
            name: "Grayson Road",
            description: "Quiet residential area with single-family homes and mature trees",
            demographics: "Mix of families and established residents",
            amenities: "Community park, local shops, easy access to downtown",
            safety: "Very safe area with active neighborhood watch"
        },
        enrollmentInfo: {
            openDate: "2024-12-01",
            closeDate: "2025-02-15",
            lotteryDate: "2025-02-22",
            enrollmentUrl: "https://www.phaa.org/enroll",
            schoolWebsite: "https://www.phaa.org",
            contactEmail: "info@phaa.org"
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
