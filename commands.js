let db;
let studentdirectory;
db.studentdirectory.insert([
    {"personal_Information" :{
            "name": [{
                "first": "Jacob",
                "middle": "Ryan",
                "last": "Davidson",
                "preferred": "Jacob"
            }],
            "phone": "2036487951",
            "email_Address": "Davidson@hartford.edu"
        },
        "school_Information": {
            "student_ID": 19346872,
            "curriculum": [{
                "major": "Computer Science",
                "minor": "None"}],
            "advisor": "Professor Rosiene"
        },
        "graduation_Status": {
            "year": "fourth-year",
            "gpa": 3.66,
            "student_Status": "full-time",
            "date_of_Initial_Enrollment": "September 2013",
            "graduation_date": "May 2017"}
    },
    {"personal_Information": {
            "name": [{
                "first": "Andrew",
                "middle": "Michael",
                "last": "Valentine",
                "preferred": "Andy"
            }],
            "phone": "8607356644",
            "email_Address": "Valentine@hartford.edu"
        },
        "school_Information": {
            "student_ID":19672234,
            "curriculum": [{
                "major": "Mathematics",
                "minor": "English"}],
            "advisor": "Professor Donald Knuth"
        },
        "graduation_Status": {
            "year": "third-year",
            "gpa": 3.85,
            "student_Status": "part-time",
            "date_of_Initial_Enrollment": "September 2016",
            "graduation_date": "May 2021"}
    },
    {"personal_Information": {
            "name": [{
                "first": "Thomas",
                "middle": "Joseph",
                "last": "Bradley",
                "preferred":"Tom"
            }],
            "phone":"2037645467",
            "email_Address":"Tbradley@hartford.edu"
        },
        "school_Information": {
            "student_ID": 19467965,
            "curriculum": [{
                "major": "Vocal Performance",
                "minor": "None"}],
            "advisor": "Professor Andrews"
        },
        "graduation_Status": {
            "year": "first-year",
            "gpa": 4.00,
            "student_Status": "full-time",
            "date_of_Initial_Enrollment": "Sept 2014",
            "graduation_date": "May 2018"}
    },
    {"personal_Information": {
            "name": [{
                "first": "John",
                "middle": "Victor",
                "last": "Robbins",
                "preferred":"Jack"
            }],
            "phone":"2038571093",
            "email_Address":"Jorobbins@hartford.edu"
        },
        "school_Information": {
            "student_ID": 19678843,
            "curriculum": [{
                "major": "Mathematics",
                "minor": "Computer Science"}],
            "advisor": "Professor Haruta"
        },
        "graduation_Status": {
            "year": "fourth-year",
            "gpa": 3.50,
            "student_Status": "full-time",
            "date_of_Initial_Enrollment": "Sept 2016",
            "graduation_date": "May 2020"}
    },
    {"personal_Information": {
            "name": [{
                "first": "Valerie",
                "middle": "Sarah",
                "last": "Martinez",
                "preferred": "Val"
            }],
            "phone": "4132298763",
            "email_Address": "Martinez@hartford.edu"
        },
        "school_Information": {
            "student_ID": 19769875,
            "curriculum": [{
                "major": "Mathematics",
                "minor": "Physics"}],
            "advisor": "Professor Turpin"
        },
        "graduation_Status": {
            "year": "second-year",
            "gpa": 3.60,
            "student_Status": "part-time",
            "date_of_Initial_Enrollment": "Sept 2017",
            "graduation_date": "May 2022"}
    },
    {"personal_Information": {
            "name": [{
                "first": "Danielle",
                "middle": "Christina",
                "last": "Jackson",
                "preferred": "Dani"
            }],
            "phone": "2037428641",
            "email_Address": "Jackson@hartford.edu"
        },
        "school_Information": {
            "student_ID": 19863345,
            "curriculum": [{
                "major": "Computer Engineering",
                "minor": "None"}],
            "advisor": "Professor Yang"
        },
        "graduation_Status": {
            "year": "Second-year",
            "gpa": 3.75,
            "student_Status": "full-time",
            "date_of_Initial_Enrollment": "Sept 2018",
            "graduation_date": "May 2022"}
    },
    {"personal_Information": {
            "name": [{
                "first": "Lily",
                "middle": "Evelyn",
                "last": "Roberts",
                "preferred": "Lily"
            }],
            "phone": "8605486221",
            "email_Address": "Lroberts@hartford.edu"
        },
        "school_Information": {
            "student_ID": 19950933,
            "curriculum": [{
                "major": "Mathematics",
                "minor": "None"}],
            "advisor": "Professor Haruta"
        },
        "graduation_Status": {
            "year": "fourth-year",
            "gpa": 3.25,
            "student_Status": "part-time",
            "date_of_Initial_Enrollment": "Sept 2019",
            "graduation_date": "Dec 2023"}
    },
    {"personal_Information": {
            "name": [{
                "first": "Michelle",
                "middle": "Lisa",
                "last": "Nelson",
                "preferred": "Mickey"
            }],
            "phone": "4139283304",
            "email_Address": "MNelson@hartford.edu"
        },
        "school_Information": {
            "student_ID": 19384487,
            "curriculum": [{
                "major": "Computer Science",
                "minor": "Mathematics"}],
            "advisor": "Professor Donald Knuth"
        },
        "graduation_Status": {
            "year": "Second-year",
            "gpa": 2.75,
            "student_Status": "full-time",
            "date_of_Initial_Enrollment": "Sept 2013",
            "graduation_date": "May 2017"}
    },
    {"personal_Information": {
            "name": [{
                "first": "Stephen",
                "middle": "Michael",
                "last": "Jones",
                "preferred": "Mike"
            }],
            "phone": "8603937479",
            "email_Address": "MiJones@hartford.edu"
        },
        "school_Information": {
            "student_ID": 19853974,
            "curriculum": [{
                "major": "Computer Science",
                "minor": "None"}],
            "advisor": "Professor Russell"
        },
        "graduation_Status": {
            "year": "third-year",
            "gpa": 1.83,
            "student_Status": "part-time",
            "date_of_Initial_Enrollment": "Sept 2018",
            "graduation_date": "May 2023"}
    },
    {"personal_Information": {
            "name": [{
                "first": "Victoria",
                "middle": "Jessica",
                "last": "Nunez",
                "preferred": "Vicki"
            }],
            "phone": "4139387743",
            "email_Address": "Nunez@hartford.edu"
        },
        "school_Information": {
            "student_ID": 19874643,
            "curriculum": [{
                "major": "Computer Science",
                "minor": "Mathematics"}],
            "advisor": "Professor Russell"
        },
        "graduation_Status": {
            "year": "third-year",
            "gpa": 1.00,
            "student_Status": "part-time",
            "date_of_Initial_Enrollment": "Sept 2018",
            "graduation_date": "May 2023"}
    }
]);
db.studentdirectory.find({"graduation_Status.gpa": {"$gt":"3.50"}});
db.studentdirectory.update({"$and": [{"school_Information.advisor":"Professor Donald Knuth","graduation_Status.gpa": {"$gt":"3.50"}}], "$set":{"graduation_Status.student_Status":"graduated"}});
db.studentdirectory.update({"$and": [{"school_Information.advisor":"Professor Donald Knuth","graduation_Status.gpa": {"$lt":"3.50"}}], "$set":{"graduation_Status.student_Status":"withdrawn"}});
