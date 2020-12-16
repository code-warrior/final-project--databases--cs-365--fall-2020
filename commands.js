//use students
db.createCollection("studentsCollection")
db.studentsCollection.insertMany(
[
{
 "name": "John Stacy",
 "id": "01",

 "name-info": {
  "first-name": "John",
  "middle-name": "Marshall",
  "last-name": "Stacy",
  "preferred-name": "\"John\""
},

 "contact-info": {
  "email": "Stacy@hartford.edu",
  "phone": "888-888-8888"
},

 "education-status": {
  "student-id": "01111111",
  "major": "Journalism",
  "minor": "N/A",
  "status": "Second-year",
  "GPA": 3.9,
  "advisor": "Donald Knuth",
  "enrollment-date": "August 2019",
  "projected-graduation-date": "May 2023"
}
},

{
"name": "John Stacy",
"id": "02",

 "name-info": {
  "first-name": "John",
  "middle-name": "Tyler",
  "last-name": "Stacy",
  "preferred-name": "\"Johnny\""
},

 "contact-info": {
  "email": "JStacy@hartford.edu",
  "phone": "474-747-4747"
},

"education-status": {
  "student-id": "02222222",
  "major": "Financial Advisor",
  "minor": "Multimedia Web Design",
  "status": "Fifth-year",
  "GPA": 3.6,
  "advisor": "Donald Knuth",
  "enrollment-date": "August 2016",
  "projected-graduation-date": "May 2021"
}
},
{
"name": "Nick OBrien",
"id": "03",

 "name-info": {
  "first-name": "Nick",
  "middle-name": "Baldwin",
  "last-name": "OBrien",
  "preferred-name": "Nick"
},

 "contact-info": {
  "email": "obrien@hartford.edu",
  "phone": "860-111-2222"
},

"education-status": {
  "student-id": "03333333",
  "major": "Computer Science",
  "minor": "",
  "status": "Fourth-year",
  "GPA": 3.5,
  "advisor": "Bill Marshall",
  "enrollment-date": " August 2017",
  "projected-graduation-date": " May 2020"
}
},
{
"name": "Cole Cayer",
"id": "04",

 "name-info": {
  "first-name": "Cole",
  "middle-name": "Cornelious",
  "last-name": "Cayer",
  "preferred-name": "Cole"
},

 "contact-info": {
  "email": "cayerman@gmail.com",
  "phone": "860-555-5559"
},

"education-status": {
  "student-id": "04444444",
  "major": "Communications",
  "minor": "",
  "status": "Second-year",
  "GPA": 4.0,
  "advisor": "Donald Knuth",
  "enrollment-date": "August 2019",
  "projected-graduation-date": "May 2023"
}
},
{
"name": "Daniel Reynolds",
"id": "05",

 "name-info": {
  "first-name": "Daniel",
  "middle-name": "Tyler",
  "last-name": "Reynolds",
  "preferred-name": "Danny"
},

 "contact-info": {
  "email": "dantheman@gmail.com",
  "phone": "860-555-4444"
},

"education-status": {
  "student-id": "05555555",
  "major": "Mathematics",
  "minor": "Business",
  "status": "First-year",
  "GPA": 3.6,
  "advisor": "John Stacy",
  "enrollment-date": "August 2020",
  "projected-graduation-date": "May 2024"
}
},
{
"name": "David Gardner",
"id": "06",

 "name-info": {
  "first-name": "David",
  "middle-name": "John",
  "last-name": "Gardner",
  "preferred-name": "David"
},

 "contact-info": {
  "email": "dibs@comcast.net",
  "phone": "860-434-2222"
},

"education-status": {
  "student-id": "06666666",
  "major": "Philosophy",
  "minor": "",
  "status": "First-year",
  "GPA": 2.9,
  "advisor": "Charles Schumacher",
  "enrollment-date": "August 2020",
  "projected-graduation-date": "May 2024"
}
},
{
"name": "Christian Deal",
"id": "07",

 "name-info": {
  "first-name": "Christian",
  "middle-name": "",
  "last-name": "Deal",
  "preferred-name": "Chris"
},

 "contact-info": {
  "email": "chrischris@hartford.edu",
  "phone": "860-777-5555"
},

"education-status": {
  "student-id": "07777777",
  "major": "Business",
  "minor": "Computer Science",
  "status": "Third-year",
  "GPA": 1.4,
  "advisor": "Finneas Schyuler",
  "enrollment-date": "August 2018",
  "projected-graduation-date": "May 2022"
}
},
{
"name": "Luke Fehrman",
"id": "08",

 "name-info": {
  "first-name": "Luke",
  "middle-name": "John",
  "last-name": "Fehrman",
  "preferred-name": "Moses"
},

 "contact-info": {
  "email": "moses@outlook.com",
  "phone": "860-999-4837"
},

"education-status": {
  "student-id": "08888888",
  "major": "History",
  "minor": "",
  "status": "Fifth-year",
  "GPA": 3.2,
  "advisor": "Tom Brady",
  "enrollment-date": "August 2016",
  "projected-graduation-date": "May 2021"
}
},
{
"name": "Ed Bob",
"id": "09",

 "name-info": {
  "first-name": "Ed",
  "middle-name": "Boberson",
  "last-name": "Bob",
  "preferred-name": "Eduardo"
},

 "contact-info": {
  "email": "edbob@hartford.edu",
  "phone": "860-860-8600"
},

"education-status": {
  "student-id": "09999999",
  "major": "Edbob studies",
  "minor": "bob studies",
  "status": "First-year",
  "GPA": 1.0,
  "advisor": "Drew Brees",
  "enrollment-date": "August 2020",
  "projected-graduation-date": "May 2024"
}
},
{
"name": "Jason Bourne",
"id": "10",

 "name-info": {
  "first-name": "Jason",
  "middle-name": "Gavin",
  "last-name": "Bourne",
  "preferred-name": "Jay"
},

 "contact-info": {
  "email": "bourneultimatum@gmail.com",
  "phone": "860-230-4356"
},

"education-status": {
  "student-id": "10000000",
  "major": "Mathematics",
  "minor": "Chemistry",
  "status": "Second-year",
  "GPA": 3.4,
  "advisor": "Russel Wilson",
  "enrollment-date": "August 2019",
  "projected-graduation-date": "May 2023"
}
}
]
)

//Retrieve all the info from students with a GPA greater than 3.5
db.studentsCollection.find({"education-status.GPA" : { $gt : 3.4 }}).pretty()

//Update the status of the student advised by Donald Knuth with the highest GPA to “graduated”
db.studentsCollection.update(
   { "education-status.advisor" : "Donald Knuth", "education-status.GPA" : 4.0 },
   {
     $set: {
		"education-status.status" : "graduated"
     }
   }
)
//Update the status of the student with the lowest GPA to “withdrawn”
db.studentsCollection.update(
   { "education-status.GPA" : 1.0 },
   {
     $set: {
		"education-status.status" : "withdrawn"
     }
   }
)
