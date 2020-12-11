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
                minors: {},
                gpa: 3.97,
                advisor: {
                    firstName: "Grace",
                    middleName: null,
                    lastName: "Hopper"
                }
            }
        },
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
                    type: "Bachelors of Science"
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
                    type: "Bachelors of Science"
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
                    type: "Bachelors of Science"
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
                    type: "Bachelors of Science"
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
                    type: "Bachelors of Science"
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
                    type: "Bachelors of Science"
                },
                minors: {},
                gpa: 3.93,
                advisor: {
                    firstName: "Andrew",
                    middleName: null,
                    lastName: "Jung"
                }
            }
        }
    ]
)