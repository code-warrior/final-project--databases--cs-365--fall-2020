use students
db.createCollection(`studentsCollection`)
db.studentsCollection.insert({
	id: 1,
	fname: "Ed",
	mname: null,
	lname: "Bob",
	pref_name: "Eddy",
	email: "ebob@hartford.edu",
	phone: "555-555-5555",
	gpa: 4.0,
	major: "Computer Science",
	minor: "Math",
	advisor: "Roy Vanegas",
	enrolled: "Sept 2017",
	graduation: "May 2021",
	year: "Senior",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 2,
	fname: "Ed",
	mname: "Jeff",
	lname: "Bob",
	pref_name: null,
	email: "ebob2@hartford.edu",
	phone: null,
	gpa: 3.5,
	major: "Math",
	minor: "Computer Science",
	advisor: "Roy Vanegas",
	enrolled: "Sept 2017",
	graduation: "May 2025",
	year: "Sophomore",
	status: "part-time"
	})



db.studentsCollection.insert({
	id: 3,
	fname: "Jack",
	mname: null,
	lname: "Goldson",
	pref_name: null,
	email: "jgoldson@hartford.edu",
	phone: null,
	gpa: 4.0,
	major: "Computer Science",
	minor: null,
	advisor: "Donald Knuth",
	enrolled: "January 2017",
	graduation: "December 2020",
	year: "Senior",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 4,
	fname: "Emily",
	mname: null,
	lname: "Jackson",
	pref_name: null,
	email: "ejackson@hartford.edu",
	phone: null,
	gpa: 3.1,
	major: "Math",
	minor: null,
	advisor: "Donald Knuth",
	enrolled: "September 2017",
	graduation: "May 2021",
	year: "Senior",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 5,
	fname: "Joe",
	mname: null,
	lname: "Jordan",
	pref_name: null,
	email: "jjordan@hartford.edu",
	phone: null,
	gpa: 3.6,
	major: "Musical Theater",
	minor: null,
	advisor: "Roy Vanegas",
	enrolled: "Sept 2018",
	graduation: "May 2022",
	year: "Junior",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 6,
	fname: "Jane",
	mname: null,
	lname: "Doe",
	pref_name: null,
	email: "jdoe@hartford.edu",
	phone: null,
	gpa: 3.6,
	major: "Politics",
	minor: null,
	advisor: "Roy Vanegas",
	enrolled: "Sept 2019",
	graduation: "May 2023",
	year: "Sophomore",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 7,
	fname: "Bethany",
	mname: null,
	lname: "Xander",
	pref_name: null,
	email: "bxander@hartford.edu",
	phone: null,
	gpa: 3.6,
	major: "Computer Engineering",
	minor: null,
	advisor: "Roy Vanegas",
	enrolled: "Sept 2020",
	graduation: "May 2024",
	year: "Freshman",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 8,
	fname: "Larry",
	mname: null,
	lname: "Johnson",
	pref_name: null,
	email: "ljohnson@hartford.edu",
	phone: null,
	gpa: 3.6,
	major: "MMWD",
	minor: null,
	advisor: "Roy Vanegas",
	enrolled: "January 2020",
	graduation: "December 2023",
	year: "Freshman",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 9,
	fname: "Daryl",
	mname: null,
	lname: "Hendricks",
	pref_name: null,
	email: "dhendricks@hartford.edu",
	phone: null,
	gpa: 2.4,
	major: "Math",
	minor: null,
	advisor: "Roy Vanegas",
	enrolled: "Sept 2019",
	graduation: "May 2023",
	year: "Sophomore",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 10,
	fname: "Harry",
	mname: null,
	lname: "Jensen",
	pref_name: null,
	email: "hjensen@hartford.edu",
	phone: null,
	gpa: 2.1,
	major: "Computer Science",
	minor: null,
	advisor: "Roy Vanegas",
	enrolled: "Sept 2019",
	graduation: "May 2023",
	year: "Sophomore",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 11,
	fname: "Janet",
	mname: null,
	lname: "Orson",
	pref_name: null,
	email: "jorson@hartford.edu",
	phone: null,
	gpa: 2.4,
	major: "English",
	minor: null,
	advisor: "Roy Vanegas",
	enrolled: "Sept 2019",
	graduation: "May 2023",
	year: "Sophomore",
	status: "full-time"
	})
db.studentsCollection.insert({
	id: 12,
	fname: "Olivia",
	mname: null,
	lname: "Peterson",
	pref_name: null,
	email: "opeterson@hartford.edu",
	phone: null,
	gpa: 2.4,
	major: "Computer Science",
	minor: null,
	advisor: "Roy Vanegas",
	enrolled: "Sept 2020",
	graduation: "May 2024",
	year: "Freshman",
	status: "full-time"
	})

db.studentsCollection.find({ gpa: { $gt: 3.5 } })

db.studentsCollection.update(
	{id: db.studentsCollection.find({ advisor: "Donald Knuth" }).sort({gpa: -1}).limit(1)[0].id},
	{$set: {status: "graduated"}})
db.studentsCollection.update(
	{id: db.studentsCollection.find().sort({gpa: +1}).limit(1)[0].id},
	{$set: {status: "withdrawn"}})