//create database if it does not exist, then use it.
students = db.getSiblingDB('students');

//create collection
db.createCollection('studentsCollection');

//Insert 10 entries into the collecion
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000001,
        fName: 'Jon',
        mName: null,
        lName: 'Goldenberg',
        preferredName: null
    },
    contactInfo: {
        email: {
            primaryEmail: 'jgoldenberg@gmail.com',
            secondaryEmail: null
        },
        phone: {
            cellPhone: '123-456-7890',
            homePhone: null
        }
    },
    schoolStats: {
        year: 'Fourth Year',
        gpa: '3.55',
        major: {
            firstMajor: 'Multimedia Wed Design and Development',
            secondMajor: null,
            thirdMajor: null
        },
        minor: {
            firstMinor: 'Computer Science',
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Full Time',
        advisors: {
            firstAdvisor: 'Donald Knuth',
            secondAdvisor: null,
            thirdAdvisor: null
        }
    }
});
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000002,
        fName: 'John',
        mName: 'Joe',
        lName: 'Doe',
        preferredName: 'J'
    },
    contactInfo: {
        email: {
            primaryEmail: 'jdoe@gmail.com',
            secondaryEmail: null
        },
        phone: {
            cellPhone: '321-123-3210',
            homePhone: null
        }
    },
    schoolStats: {
        year: 'Second Year',
        gpa: '3.72',
        major: {
            firstMajor: 'Nursing',
            secondMajor: null,
            thirdMajor: null
        },
        minor: {
            firstMinor: 'Business Management',
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Full Time',
        advisors: {
            firstAdvisor: 'Donald Knuth',
            secondAdvisor: null,
            thirdAdvisor: null
        }
    }
});
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000003,
        fName: 'Jane',
        mName: null,
        lName: 'Donald',
        preferredName: null
    },
    contactInfo: {
        email: {
            primaryEmail: 'jdonald@gmail.com',
            secondaryEmail: null
        },
        phone: {
            cellPhone: '918-999-3748',
            homePhone: '233-333-4059'
        }
    },
    schoolStats: {
        year: 'Fifth Year',
        gpa: '2.31',
        major: {
            firstMajor: 'Business Entrepreneur',
            secondMajor: 'Computer Science',
            thirdMajor: null
        },
        minor: {
            firstMinor: null,
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Full Time',
        advisors: {
            firstAdvisor: 'Jeffrey Jingle',
            secondAdvisor: 'Beth Pathers',
            thirdAdvisor: null
        }
    }
});
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000004,
        fName: 'Donald',
        mName: null,
        lName: 'Duck',
        preferredName: 'The Duck Master'
    },
    contactInfo: {
        email: {
            primaryEmail: 'dduck@gmail.com',
            secondaryEmail: 'donaldduck@SpeechGrammarList.com'
        },
        phone: {
            cellPhone: '111-222-3333',
            homePhone: '333-222-1111'
        }
    },
    schoolStats: {
        year: 'First Year',
        gpa: '4.0',
        major: {
            firstMajor: 'Graphic Design',
            secondMajor: null,
            thirdMajor: null
        },
        minor: {
            firstMinor: null,
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Part Time',
        advisors: {
            firstAdvisor: 'Ronald McDonald',
            secondAdvisor: null,
            thirdAdvisor: null
        }
    }
});
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000005,
        fName: 'Mickey',
        mName: null,
        lName: 'Mouse',
        preferredName: 'Mr. Mouse'
    },
    contactInfo: {
        email: {
            primaryEmail: 'mmouse@gmail.com',
            secondaryEmail: null
        },
        phone: {
            cellPhone: '340-333-2947',
            homePhone: null
        }
    },
    schoolStats: {
        year: 'Third Year',
        gpa: '3.2',
        major: {
            firstMajor: 'Computer Engineering',
            secondMajor: null,
            thirdMajor: null
        },
        minor: {
            firstMinor: null,
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Full Time',
        advisors: {
            firstAdvisor: 'Ronald McDonald',
            secondAdvisor: null,
            thirdAdvisor: null
        }
    }
});
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000006,
        fName: 'Scooby',
        mName: null,
        lName: 'Doo',
        preferredName: null
    },
    contactInfo: {
        email: {
            primaryEmail: 'sdoo@gmail.com',
            secondaryEmail: null
        },
        phone: {
            cellPhone: '454-565-6767',
            homePhone: null
        }
    },
    schoolStats: {
        year: 'Fourth Year',
        gpa: '3.8',
        major: {
            firstMajor: 'Multimedia Wed Design and Development',
            secondMajor: null,
            thirdMajor: null
        },
        minor: {
            firstMinor: null,
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Full Time',
        advisors: {
            firstAdvisor: 'Ronald McDonald',
            secondAdvisor: null,
            thirdAdvisor: null
        }
    }
});
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000007,
        fName: 'Bugs',
        mName: null,
        lName: 'Bunny',
        preferredName: null
    },
    contactInfo: {
        email: {
            primaryEmail: 'bbunny@gmail.com',
            secondaryEmail: null
        },
        phone: {
            cellPhone: '322-333-4555',
            homePhone: null
        }
    },
    schoolStats: {
        year: 'First Year',
        gpa: '1.3',
        major: {
            firstMajor: 'Computer Science',
            secondMajor: null,
            thirdMajor: null
        },
        minor: {
            firstMinor: null,
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Full Time',
        advisors: {
            firstAdvisor: 'Beth Pathers',
            secondAdvisor: null,
            thirdAdvisor: null
        }
    }
});
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000010,
        fName: 'Frosty',
        mName: 'The',
        lName: 'Snowman',
        preferredName: null
    },
    contactInfo: {
        email: {
            primaryEmail: 'fsnowman@gmail.com',
            secondaryEmail: null
        },
        phone: {
            cellPhone: '333-426-7390',
            homePhone: null
        }
    },
    schoolStats: {
        year: 'Second Year',
        gpa: '1.2',
        major: {
            firstMajor: 'Sculpting',
            secondMajor: null,
            thirdMajor: null
        },
        minor: {
            firstMinor: null,
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Full Time',
        advisors: {
            firstAdvisor: 'Donald Knuth',
            secondAdvisor: null,
            thirdAdvisor: null
        }
    }
});
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000011,
        fName: 'Santa',
        mName: null,
        lName: 'Claus',
        preferredName: null
    },
    contactInfo: {
        email: {
            primaryEmail: 'sclaus@gmail.com',
            secondaryEmail: 'santaclaus@gmail.com'
        },
        phone: {
            cellPhone: '123-453-4444',
            homePhone: null
        }
    },
    schoolStats: {
        year: 'Third Year',
        gpa: '3.4',
        major: {
            firstMajor: 'Bussiness Management',
            secondMajor: null,
            thirdMajor: null
        },
        minor: {
            firstMinor: null,
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Full Time',
        advisors: {
            firstAdvisor: 'Donald Knuth',
            secondAdvisor: null,
            thirdAdvisor: null
        }
    }
});
students.studentsCollection.insert({
    studentInfo: {
        studentId: 0000012,
        fName: 'Rudolph',
        mName: 'The',
        lName: 'Reindeer',
        preferredName: null
    },
    contactInfo: {
        email: {
            primaryEmail: 'rreinder@gmail.com',
            secondaryEmail: null
        },
        phone: {
            cellPhone: '565-336-5660',
            homePhone: null
        }
    },
    schoolStats: {
        year: 'Fifth Year',
        gpa: '3.6',
        major: {
            firstMajor: 'Radiology',
            secondMajor: null,
            thirdMajor: null
        },
        minor: {
            firstMinor: null,
            secondMinor: null,
            thirdMinor: null
        },
        status: 'Full Time',
        advisors: {
            firstAdvisor: 'Daffy Duck',
            secondAdvisor: null,
            thirdAdvisor: null
        }
    }
});

students.studentsCollection
    .find({ 'schoolStats.gpa': { $gt: '3.5' } })
    .pretty();

students.studentsCollection.findOneAndUpdate(
    { 'schoolStats.advisors.firstAdvisor': 'Donald Knuth' },
    { $set: { 'schoolStats.status': 'Graduated' } },
    { upsert: true, sort: { gpa: -1 }, limit: 1 }
);

students.studentsCollection.findAndModify({
    sort: { 'schoolStats.gpa': 1 },
    update: { $set: { 'schoolStats.status': 'Withdrawn' } }
});
