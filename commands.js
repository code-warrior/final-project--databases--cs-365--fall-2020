db = db.getSiblingDB('studentRecords');

db.createCollection('theStudentRecordsCollection');

db.theStudentRecordsCollection.insertMany(
    [
        {
            studentId: 1000001,
            studentName: {
                firstName: "Keith",
                middleName: "James",
                lastName: "Eagleson",
                preferredName: "Keith"
            },
            contactDetails: {
                emailAddress: "keagleson@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 1,
                    areaCode: 401,
                    exchangeCode: 123,
                    lineNumber: 4567
                }
            },
            programDetails: {
                status: {
                    year: "Fourth Year",
                    type: "Part-Time",
                    enrollmentDate: {
                        year: 2018,
                        month: 6,
                        day: 15
                    },
                    expectedGraduationDate: {
                        year: 2021,
                        month: 1,
                        day: 5
                    }
                },
                major: {
                    program: "Computer Science",
                    type: "Bachelor of Science"
                },
                minors: {},
                gpa: 3.93,
                advisor: {
                    firstName: "Andrew",
                    middleName: null,
                    lastName: "Jung"
                }
            }
        },
        {
            studentId: 1000002,
            studentName: {
                firstName: "Alexandria",
                middleName: null,
                lastName: "Ocasio-Cortez",
                preferredName: "AOC"
            },
            contactDetails: {
                emailAddress: "aocortez@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 1,
                    areaCode: 917,
                    exchangeCode: 555,
                    lineNumber: 1234
                }
            },
            programDetails: {
                status: {
                    year: "Second Year",
                    type: "Full-Time",
                    enrollmentDate: {
                        year: 2018,
                        month: 1,
                        day: 5
                    },
                    expectedGraduationDate: {
                        year: 2022,
                        month: 5,
                        day: 15
                    }
                },
                major: {
                    program: "International Relations",
                    type: "Bachelor of Arts",
                    program: "Economics",
                    type: "Bachelor of Arts"
                },
                minors: {
                    program: "English"
                },
                gpa: 3.99,
                advisor: {
                    firstName: "Donald",
                    middleName: null,
                    lastName: "Knuth"
                }
            }
        },
        {
            studentId: 1000003,
            studentName: {
                firstName: "Christopher",
                middleName: null,
                lastName: "Hedges",
                preferredName: "Chris"
            },
            contactDetails: {
                emailAddress: "chedges@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 1,
                    areaCode: 813,
                    exchangeCode: 123,
                    lineNumber: 4567
                }
            },
            programDetails: {
                status: {
                    year: "Fourth Year",
                    type: "Full-Time",
                    enrollmentDate: {
                        year: 2017,
                        month: 8,
                        day: 22
                    },
                    expectedGraduationDate: {
                        year: 2021,
                        month: 5,
                        day: 15
                    }
                },
                major: {
                    program: "Computer Science",
                    type: "Bachelor of Science"
                },
                minors: {
                    program: "English"
                },
                gpa: 3.62,
                advisor: {
                    firstName: "Donald",
                    middleName: null,
                    lastName: "Knuth"
                }
            }
        },
        {
            studentId: 1000004,
            studentName: {
                firstName: "Heather",
                middleName: "Ann",
                lastName: "Thompson",
                preferredName: "Heather"
            },
            contactDetails: {
                emailAddress: "hthompson@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 1,
                    areaCode: 401,
                    exchangeCode: 123,
                    lineNumber: 4567
                }
            },
            programDetails: {
                status: {
                    year: "Fourth Year",
                    type: "Full-Time",
                    enrollmentDate: {
                        year: 2018,
                        month: 6,
                        day: 15
                    },
                    expectedGraduationDate: {
                        year: 2021,
                        month: 1,
                        day: 5
                    }
                },
                major: {
                    program: "Computer Science",
                    type: "Bachelors of Science"
                },
                minors: {
                    program: "American History",
                    program: "History"
                },
                gpa: 3.97,
                advisor: {
                    firstName: "Grace",
                    middleName: null,
                    lastName: "Hopper"
                }
            }
        },
        {
            studentId: 1000005,
            studentName: {
                firstName: "Mohandas",
                middleName: "Karamchand",
                lastName: "Gandhi",
                preferredName: "Gandhi"
            },
            contactDetails: {
                emailAddress: "mgandhi@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 91,
                    areaCode: 731,
                    exchangeCode: 2244,
                    lineNumber: 4567
                }
            },
            programDetails: {
                status: {
                    year: "Third Year",
                    type: "Full-Time",
                    enrollmentDate: {
                        year: 2017,
                        month: 9,
                        day: 7
                    },
                    expectedGraduationDate: {
                        year: 2022,
                        month: 5,
                        day: 15
                    }
                },
                major: {
                    program: "Computer Science",
                    type: "Bachelors of Science"
                },
                minors: {},
                gpa: 4.00,
                advisor: {
                    firstName: "Alan",
                    middleName: null,
                    lastName: "Turing"
                }
            }
        },
        {
            studentId: 1000006,
            studentName: {
                firstName: "Donald",
                middleName: "John",
                lastName: "Trump",
                preferredName: "DONALD"
            },
            contactDetails: {
                emailAddress: "dtrump@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 1,
                    areaCode: 202,
                    exchangeCode: 456,
                    lineNumber: 1111
                }
            },
            programDetails: {
                status: {
                    year: "Fourth Year",
                    type: "Part-Time",
                    enrollmentDate: {
                        year: 2017,
                        month: 1,
                        day: 20
                    },
                    expectedGraduationDate: {
                        year: 2021,
                        month: 1,
                        day: 20
                    }
                },
                major: {
                    program: "Chaos",
                    type: "Bachelors of Arts"
                },
                minors: {},
                gpa: 1.00,
                advisor: {
                    firstName: "Roger",
                    middleName: "Jason",
                    lastName: "Stone"
                }
            }
        },
        {
            studentId: 1000007,
            studentName: {
                firstName: "Lucian",
                middleName: "Lincoln",
                lastName: "Wood",
                preferredName: "Lin"
            },
            contactDetails: {
                emailAddress: "lwood@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 1,
                    areaCode: 268,
                    exchangeCode: 123,
                    lineNumber: 4567
                }
            },
            programDetails: {
                status: {
                    year: "Fourth Year",
                    type: "Part-Time",
                    enrollmentDate: {
                        year: 2018,
                        month: 6,
                        day: 15
                    },
                    expectedGraduationDate: {
                        year: 2021,
                        month: 1,
                        day: 5
                    }
                },
                major: {
                    program: "Law",
                    type: "Bachelors of Science"
                },
                minors: {

                },
                gpa: 1.01,
                advisor: {
                    firstName: "Linda",
                    middleName: null,
                    lastName: "Fairstein"
                }
            }
        },
        {
            studentId: 1000008,
            studentName: {
                firstName: "Steve",
                middleName: "Kevin",
                lastName: "Bannon",
                preferredName: "Steve"
            },
            contactDetails: {
                emailAddress: "sbannon@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 1,
                    areaCode: 332,
                    exchangeCode: 123,
                    lineNumber: 4567
                }
            },
            programDetails: {
                status: {
                    year: "First Year",
                    type: "Full-Time",
                    enrollmentDate: {
                        year: 2020,
                        month: 8,
                        day: 27
                    },
                    expectedGraduationDate: {
                        year: 2030,
                        month: 5,
                        day: 15
                    }
                },
                major: {
                    program: "Urban Planning",
                    type: "Bachelors of Science"
                },
                minors: {},
                gpa: 1.04,
                advisor: {
                    firstName: "Vladimir",
                    middleName: null,
                    lastName: "Putin"
                }
            }
        },
        {
            studentId: 1000009,
            studentName: {
                firstName: "Stephen",
                middleName: null,
                lastName: "Miller",
                preferredName: "Steve"
            },
            contactDetails: {
                emailAddress: "smiller@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 1,
                    areaCode: 112,
                    exchangeCode: 123,
                    lineNumber: 4567
                }
            },
            programDetails: {
                status: {
                    year: "Fourth Year",
                    type: "Part-Time",
                    enrollmentDate: {
                        year: 2018,
                        month: 6,
                        day: 15
                    },
                    expectedGraduationDate: {
                        year: 2021,
                        month: 1,
                        day: 5
                    }
                },
                major: {
                    program: "Political Science",
                    type: "Bachelors of Science"
                },
                minors: {},
                gpa: 1.01,
                advisor: {
                    firstName: "Jean",
                    middleName: null,
                    lastName: "Raspail"
                }
            }
        },
        {
            studentId: 1000010,
            studentName: {
                firstName: "Jared",
                middleName: "Corey",
                lastName: "Kushner",
                preferredName: "Jared"
            },
            contactDetails: {
                emailAddress: "jkushner@hartford.edu",
                primaryPhoneNumber: {
                    countryCode: 1,
                    areaCode: 318,
                    exchangeCode: 123,
                    lineNumber: 4567
                }
            },
            programDetails: {
                status: {
                    year: "Second Year",
                    type: "Full-Time",
                    enrollmentDate: {
                        year: 2018,
                        month: 6,
                        day: 15
                    },
                    expectedGraduationDate: {
                        year: 2022,
                        month: 1,
                        day: 5
                    }
                },
                major: {
                    program: "Government",
                    type: "Bachelors of Science"
                },
                minors: {},
                gpa: 1.03,
                advisor: {
                    firstName: "Ivanka",
                    middleName: null,
                    lastName: "Trump"
                }
            }
        }
    ]
);

// Retrieve all the info from students with a GPA greater than 3.5
db.theStudentRecordsCollection.find({ programDetails: { gpa: { $gt: 3.5 } } });

// Update the status of the student advised by Donald Knuth with the highest GPA to "graduated"
const advisorFilter = {
    programDetails: {
        advisor: {
            firstName: "Donald",
            middleName: null,
            lastName: "Knuth"
        }
    }
};
const graduatedStatusUpdate = {
    $set: {
        programDetails: {
            status: {
                type: "graduated"
            }
        }
    }
};
const advisorStatusOptions = { sort: { "programDetails.gpa": -1 }, returnNewDocument: true };

db.theStudentRecordsCollection.findOneAndUpdate(advisorFilter, graduatedStatusUpdate, advisorStatusOptions);

// Update the status of the student with the lowest GPA to "withdrawn"
const gpaSort = { "programDetails.gpa": 1 };
const withdrawnStatusUpdate = {
    $set: {
        programDetails: {
            status: {
                type: "withdrawn"
            }
        }
    }
};

db.theStudentRecordsCollection.findAndModify({
    sort: gpaSort,
    update: withdrawnStatusUpdate,
    new: true
});
