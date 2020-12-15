//*******************************************************
//Programmer: Erik Rodriguez
//Date: 12/15/2020
//Purpose: To translate XML code to JSON from project 2 using concepts learned from mongodb university
//*******************************************************

//Preload database without using import
db.StudentInformation.insert(
    [
        {
            "Student_ID": "8675309",
            "Student_firstname": "Kevin",
            "Sudent_lastname": "Smith",
            "Student_prefname": "Kev",
            "Student_email": "SmithKev@hartford.edu",
            "Student_phonenumber": "432-793-4729",
            "Student_YealyStatus": "Second Year",
            "Student_GPA": "3.77",
            "Student_Major": "Acting",
            "Student_Minor": "Entrepreneurship",
            "Student_Status": "Full-time",
            "Student_Advisor": "Professor Connors",
            "Student_EnrollmentDate": "August 20th, 2018",
            "Student_GraduationDate": "May 20th, 2022"
        },

        {
            "Student_ID": "9003785",
            "Student_firstname": "Kevin",
            "Student_lastname": "Smith",
            "Student_prefname": "Kevin",
            "Student_email": "SmithK@hartford.edu",
            "Student_phonenumber": "972-023-9974",
            "Student_YearlyStatus": "First Year",
            "Student_GPA": "3.00",
            "Student_Major": "Electrical Engineering",
            "Student_Minor": "Computer Science",
            "Student_Status": "Full-time",
            "Student_Advisor": "Professor Stevens",
            "Student_EnrollmentDate": "August 10th, 2020",
            "Student_GraduationDate": "May 20th, 2024"
        },

        {
            "Student_ID": "7830281",
            "Student_firstname": "Johnathan",
            "Student_lastname": "McKinney",
            "Student_prefname": "John",
            "Student_email": "JMcKinney@hartford.edu",
            "Student_phonenumber": "749-563-2394",
            "Student_YealyStatus": "Fourth Year",
            "Student_GPA": "3.42",
            "Student_Major": "Finance",
            "Student_Minor": "Marketing",
            "Student_Status": "Part-time",
            "Student_Advisor": "Professor Johnson",
            "Student_EnrollmentDate": "August 10th, 2016",
            "Student_GraduationDate": "May 20th, 2020"
        },

        {
            "Student_ID": "5038262",
            "Student_firstname": "Steven",
            "Student_lastname": "Sherman",
            "Student_prefname": "Steve",
            "Student_email": "ShermanS@hartford.edu",
            "Student_phonenumber": "903-023-7396",
            "Student_YearlyStatus": "Fourth Year",
            "Student_GPA": "3.26",
            "Student_Major": "Computer Engineering",
            "Student_Minor": "Entrepreneurship",
            "Student_Status": "Graduated",
            "Student_Advisor": "Professor Brians",
            "Student_EnrollmentDate": "August 20th, 2006",
            "Student_GraduationDate": "May 20th, 2010"
        },

        {
            "Student_ID": "1004298",
            "Student_firstname": "Brian",
            "Student_lastname": "O'conner",
            "Student_prefname": "Brian",
            "Student_email": "Oconner@hartford.edu",
            "Student_phonenumber": "442-371-4368",
            "Student_YealyStatus": "Third Year",
            "Student_GPA": "3.94",
            "Student_Major": "Criminal Justice",
            "Student_Minor": "Mechanical Engineering",
            "Student_Status": "Full-time",
            "Student_Advisor": "Professor Donald Knuth",
            "Student_EnrollmentDate": "June 16th, 2020",
            "Student_GraduationDate": "May 13th, 2024"
        },

        {
            "Student_ID": "4944674",
            "Student_firstname": "Dominick",
            "Student_lastname": "Torreto",
            "Student_prefname": "Dom",
            "Student_email": "DTorreto@hartford.edu",
            "Student_phonenumber": "194-538-2309",
            "Student_YealyStatus": "First",
            "Student_GPA": "3.35",
            "Student_Major": "Mechanical Engineering",
            "Student_Minor": "Electrical Engineering",
            "Student_Status": "Full-time",
            "Student_Advisor": "Professor Wall",
            "Student_EnrollmentDate": "August 22nd, 2019",
            "Student_GraduationDate": "May 13th, 2023"
        },

        {
            "Student_ID": "7652961",
            "Student_firstname": "Mia",
            "Student_lastname": "Torreto",
            "Student_prefname": "Mia",
            "Student_email": "MTorreto@hartford.edu",
            "Student_phonenumber": "512-145-6757",
            "Student_YealyStatus": "Second Year",
            "Student_GPA": "3.83",
            "Student_Major": "Marketing",
            "Student_Minor": "Communications",
            "Student_Status": "Part-time",
            "Student_Advisor": "Professor Stone",
            "Student_EnrollmentDate": "July 07th, 2021",
            "Student_GraduationDate": "December 15th, 2025"
        },

        {
            "Student_ID": "8499036",
            "Student_firstname": "Roman",
            "Student_lastname": "Pearce",
            "Student_prefname": "Roman",
            "Student_email": "Pearce@hartford.edu",
            "Student_phonenumber": "137-420-8378",
            "Student_YealyStatus": "Fourth Year",
            "Student_GPA": "3.61",
            "Student_Major": "Law",
            "Student_Minor": "Entrepreneurship",
            "Student_Status": "Full-time",
            "Student_Advisor": "Professor Green",
            "Student_EnrollmentDate": "August 30th, 2022",
            "Student_GraduationDate": "May 12th, 2026"
        },

        {
            "Student_ID": "5776393",
            "Student_firstname": "Luke",
            "Student_lastname": "Hobbs",
            "Student_prefname": "Luke",
            "Student_email": "LHobbs@hartford.edu",
            "Student_phonenumber": "618-055-4870",
            "Student_YealyStatus": "First Year",
            "Student_GPA": "4.00",
            "Student_Major": "Physical Therapy",
            "Student_Minor": "Criminal Justice",
            "Student_Status": "Part-time",
            "Student_Advisor": "Professor Ryans",
            "Student_EnrollmentDate": "July 03rd, 2020",
            "Student_GraduationDate": "December 15th,2024"
        },

        {
            "Student_ID": "5170704",
            "Student_firstname": "Tej",
            "Student_lastname": "Parker",
            "Student_prefname": "Tej",
            "Student_email": "Tparker@hartford.edu",
            "Student_phonenumber": "301-671-4759",
            "Student_YealyStatus": "Third Year",
            "Student_GPA": "3.23",
            "Student_Major": "Finance",
            "Student_Minor": "Entrepreneurship",
            "Student_Status": "Part-time",
            "Student_Advisor": "Professor Donald Knuth",
            "Student_EnrollmentDate": "June 28th, 2019",
            "Student_GraduationDate": "May 12th, 2023"
        }
    ]
)

//Retrieve all the info from students with a GPA greater than 3.5
db.StudentInformation.find({"Student_GPA": { "$gt" : "3.50" }}).pretty();

//Update the status of the student advised by Donald Knuth with the highest GPA to “graduated” / Referenced Mongodb findAndModify on mongodb website
db.StudentInformation.findAndModify({query: {"Student_Advisor": "Professor Donald Knuth"}, update: {"$set": {"Student_Status": "Graduated"}}, sort: {"Student_GPA": -1}});

//Update the status of the student with the lowest GPA to “withdrawn”
db.StudentInformation.findAndModify({sort: {"Student_GPA": 1}, update: {"$set": {"Student_Status": "Withdrawn"}}});
