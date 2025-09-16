const fs = require('fs');

// Read the current data.js file
let data = fs.readFileSync('data.js', 'utf8');

// Find the end of the schoolData.schools object (before the closing brace)
const schoolDataEnd = data.lastIndexOf('        }');
const beforeSchools = data.substring(0, schoolDataEnd);
const afterSchools = data.substring(schoolDataEnd);

// Additional schools to add
const additionalSchools = `,
        'franklin': {
            id: 'franklin',
            name: 'Franklin Elementary School',
            type: 'elementary',
            address: '915 Foothill Boulevard, Oakland, CA 94606',
            enrollment: 280,
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
                totalResponses: 42
            }
        },
        'lincoln': {
            id: 'lincoln',
            name: 'Lincoln Elementary School',
            type: 'elementary',
            address: '225 11th Street, Oakland, CA 94607',
            enrollment: 320,
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
                totalResponses: 48
            }
        },
        'westlake': {
            id: 'westlake',
            name: 'Westlake Middle School',
            type: 'middle',
            address: '2629 Harrison Street, Oakland, CA 94612',
            enrollment: 380,
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
                totalResponses: 35
            }
        },
        'skyline': {
            id: 'skyline',
            name: 'Skyline High School',
            type: 'high',
            address: '12250 Skyline Boulevard, Oakland, CA 94619',
            enrollment: 1100,
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
                totalResponses: 72
            }
        },
        'emerson': {
            id: 'emerson',
            name: 'Emerson Elementary School',
            type: 'elementary',
            address: '4800 Lawton Avenue, Oakland, CA 94609',
            enrollment: 250,
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
                totalResponses: 39
            }
        },
        'claremont': {
            id: 'claremont',
            name: 'Claremont Middle School',
            type: 'middle',
            address: '5750 College Avenue, Oakland, CA 94618',
            enrollment: 420,
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
                totalResponses: 41
            }
        },
        'oakland-high': {
            id: 'oakland-high',
            name: 'Oakland High School',
            type: 'high',
            address: '1023 MacArthur Boulevard, Oakland, CA 94610',
            enrollment: 950,
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
                totalResponses: 58
            }
        },
        'hillcrest': {
            id: 'hillcrest',
            name: 'Hillcrest Elementary School',
            type: 'elementary',
            address: '30 Marguerite Drive, Oakland, CA 94618',
            enrollment: 290,
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
                totalResponses: 44
            }
        }`;

// Create the new data
const newData = beforeSchools + additionalSchools + afterSchools;

// Write the updated file
fs.writeFileSync('data.js', newData);

console.log('Added 8 additional schools to data.js');
