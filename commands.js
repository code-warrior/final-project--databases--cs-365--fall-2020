//create or use existing database called university
use university;

//create the student collection
db.createCollection('student');

//insert 10 students
db.student.insert({
    studentInfo: {
        fname: "Patrick",
        mname: "Joseph",
        lname: "Gorman",
        prefname: "Patrick",
    },
    contactInfo: {
        email: "pgorman@university.edu",
        phone: "1111111111",
    },
    academicInfo: {
        major: "Computer Science",
        minor: "Math",
        gpa: "3.2",
        year: "Senior, Transfer",
        status: "Full Time",
        advisor: "Donald Knuth",
        edate: "2019",
        gdate: "2021",
    },
});
db.student.insert({
    studentInfo: {
        fname: "Victoria",
        mname: "Elizabeth",
        lname: "Gorman",
        prefname: "Victoria",
    },
    contactInfo: {
        email: "vgorman@university.edu",
        phone: "2222222222",
    },
    academicInfo: {
        major: "Bio Chemistry",
        minor: "Forensics",
        gpa: "3.9",
        year: "Junior",
        status: "Full Time",
        advisor: "David Crosby",
        edate: "2018",
        gdate: "2022",
    },
});
db.student.insert({
    studentInfo: {
        fname: "Abigail",
        mname: "Frances",
        lname: "Gorman",
        prefname: "Abby",
    },
    contactInfo: {
        email: "agorman@university.edu",
        phone: "3333333333",
    },
    academicInfo: {
        major: "Paleantology",
        minor: null,
        gpa: "4.0",
        year: "Sophomore",
        status: "Full Time",
        advisor: "Donald Knuth",
        edate: "2019",
        gdate: "2023",
    },
});
db.student.insert({
    studentInfo: {
        fname: "Edward",
        mname: "Joseph",
        lname: "Gorman",
        prefname: "Ed",
    },
    contactInfo: {
        email: "egorman@university.edu",
        phone: "4444444444",
    },
    academicInfo: {
        major: "Pre-Law",
        minor: "History",
        gpa: "2.8",
        year: "Senior",
        status: "Full Time",
        advisor: "Donald Knuth",
        edate: "2017",
        gdate: "2021",
    },
});
db.student.insert({
    studentInfo: {
        fname: "Liesl",
        mname: "Kristen",
        lname: "Zwicklbauer",
        prefname: "Liesl",
    },
    contactInfo: {
        email: "lzwicklbauer@university.edu",
        phone: "5555555555",
    },
    academicInfo: {
        major: "Pre-Law",
        minor: "English, Economics",
        gpa: "3.9",
        year: "Senior",
        status: "Full Time",
        advisor: "Stephen Stills",
        edate: "2017",
        gdate: "2021",
    },
});
db.student.insert({
    studentInfo: {
        fname: "Paul",
        mname: "Xavier",
        lname: "Blart",
        prefname: "Paul",
    },
    contactInfo: {
        email: "pblart@university.edu",
        phone: "6666666666",
    },
    academicInfo: {
        major: "Forensics",
        minor: "Economics",
        gpa: "3.1",
        year: "Freshman",
        status: "Part Time",
        advisor: "Donald Knuth",
        edate: "2020",
        gdate: "2024",
    },
});
db.student.insert({
    studentInfo: {
        fname: "Theodore",
        mname: "Evelyn",
        lname: "Mosby",
        prefname: "Ted",
    },
    contactInfo: {
        email: "tmosby@university.edu",
        phone: "7777777777",
    },
    academicInfo: {
        major: "Architecture",
        minor: "Math",
        gpa: "3.6",
        year: "Senior, Transfer",
        status: "Full Time",
        advisor: "David Crosby",
        edate: "2018",
        gdate: "2021",
    },
});
db.student.insert({
    studentInfo: {
        fname: "Lillian",
        mname: null,
        lname: "Aldrin",
        prefname: "Lily",
    },
    contactInfo: {
        email: "laldrin@university.edu",
        phone: "8888888888",
    },
    academicInfo: {
        major: "Education",
        minor: "Psychology",
        gpa: "2.7",
        year: "Junior",
        status: "Full Time",
        advisor: "Graham Nash",
        edate: "2018",
        gdate: "2022",
    },
});
db.student.insert({
    studentInfo: {
        fname: "Barnabus",
        mname: "Wait For It",
        lname: "Stinson",
        prefname: "Barney",
    },
    contactInfo: {
        email: "bstinson@university.edu",
        phone: "9999999999",
    },
    academicInfo: {
        major: "Business",
        minor: "International Studies",
        gpa: "1.5",
        year: "Senior",
        status: "Part Time",
        advisor: "Neil Young",
        edate: "2016",
        gdate: "2021",
    },
});
db.student.insert({
    studentInfo: {
        fname: "Robin",
        mname: null,
        lname: "Scherbatsky",
        prefname: "Robin",
    },
    contactInfo: {
        email: "rscherbatsky@university.edu",
        phone: "1010101010",
    },
    academicInfo: {
        major: "Journalism",
        minor: "English, International Studies",
        gpa: "4.0",
        year: "Senior",
        status: "Full Time",
        advisor: "Donald Knuth",
        edate: "2017",
        gdate: "2021",
    },
});

db.student.find({
    'academicInfo.gpa': { $gt: 3.5 }
}).pretty();

db.student.findOneAndUpdate({ 'academicInfo.advisor': 'Donald Knuth' },
    { $set: { 'academicInfo.status': 'Graduated' } },
    { upsert: true, sort: { gpa: -1 }, limit: 1 }
);

db.student.findAndModify({
    sort: { 'academicInfo.gpa': 1 },
    update: { $set: { 'academicInfo.status': 'Withdrawn' } }
});