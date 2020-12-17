use students
db.createCollection('students')
db.students.insert({
	id: 1,
	name: {
		first: "Tyler",
		middle: "Joseph",
		last: "Reilly"
	},
	contact: {
		email: "treilly@hartford.edu",
		phone: "31280583242"
	},
	gpa: 1.0,
	major: "Computer Science",
	minor: "Math",
	advisor: "Ingrid Russell",
	enrollment_date: "2017",
	graduation_date: "2021",
	status: "full-time"
	})
	
db.students.insert({
	id: 2,
	name: {
		first: "Nick",
		middle: "Brennan",
		last: "Reilly"
	},
	contact: {
		email: "nreilly@hartford.edu",
		phone: "8608423431"
	},
	gpa: 1.5,
	major: "Computer Science",
	minor: null,
	advisor: "Carolyn P Roseing",
	enrollment_date: "2018",
	graduation_date: "2022",
	status: "full-time"
	})

db.students.insert({
	id: 3,
	name: {
		first: "William",
		middle: "Stewart",
		last: "Zaimes"
	},
	contact: {
		email: "zaimes@hartford.edu",
		phone: "23134123"
	},
	gpa: 3.6,
	major: "Civil Engineering",
	minor: null,
	advisor: "Donald Knuth",
	enrollment_date: "2017",
	graduation_date: "2021",
	status: "full-time"
	})
	
db.students.insert({
	id: 4,
	name: {
		first: "Steve",
		middle: "Esteban",
		last: "Vollaro"
	},
	contact: {
		email: "vollaro@hartford.edu",
		phone: "23145432"
	},
	gpa: 3.9,
	major: "Mechanical Engineering",
	minor: "Math",
	advisor: "Sally May",
	enrollment_date: "2017",
	graduation_date: "2021",
	status: "full-time"
	})

db.students.insert({
	id: 5,
	name: {
		first: "Spencer",
		middle: "Waldon",
		last: "Thomas"
	},
	contact: {
		email: "thomas@hartford.edu",
		phone: "234755733"
	},
	gpa: 3.7,
	major: "Mechanical Engineering",
	minor: "Computer Science",
	advisor: "Timothy Becker",
	enrollment_date: "2017",
	graduation_date: "2021",
	status: "full-time"
	})
	
db.students.insert({
	id: 6,
	name: {
		first: "Not",
		middle: "To",
		last: "Smart"
	},
	contact: {
		email: "smart@hartford.edu",
		phone: "23134123"
	},
	gpa: 1.6,
	major: "Buisness",
	minor: null,
	advisor: "Donald Knuth",
	enrollment_date: "2020",
	graduation_date: "2024",
	status: "full-time"
	})
	
db.students.insert({
	id: 7,
	name: {
		first: "Evan",
		middle: null,
		last: "Forte"
	},
	contact: {
		email: "forte@hartford.edu",
		phone: "978575689"
	},
	gpa: 3.51,
	major: "Nurse",
	minor: null,
	advisor: "Tyler Reilly",
	enrollment_date: "2017",
	graduation_date: "2021",
	status: "part-time"
	})
	
db.students.insert({
	id: 8,
	name: {
		first: "James",
		middle: "Timmy",
		last: "Bean"
	},
	contact: {
		email: "bean@hartford.edu",
		phone: "567463634"
	},
	gpa: 3.8,
	major: "Computer Science",
	minor: null,
	advisor: "Ingrid Russell",
	enrollment_date: "2017",
	graduation_date: "2021",
	status: "full-time"
	})

db.students.insert({
	id: 9,
	name: {
		first: "Elisha",
		middle: "Nelson",
		last: "Manning"
	},
	contact: {
		email: "manning@hartford.edu",
		phone: "3133133131"
	},
	gpa: 2.5,
	major: "FootBall",
	minor: null,
	advisor: "Tom Coughlin",
	enrollment_date: "2004",
	graduation_date: "2020",
	status: "full-time"
	})
	
db.students.insert({
	id: 10,
	name: {
		first: "Hasan",
		middle: "John",
		last: "Ramic"
	},
	contact: {
		email: "ramic@hartford.edu",
		phone: "3126552345"
	},
	gpa: 3.2,
	major: "Architecture",
	minor: "History",
	advisor: "Eric Canter",
	enrollment_date: "2017",
	graduation_date: "2021",
	status: "full-time"
	})

//$gt = greaterthan $lt=lessthan || these only work if there is 1 entry for each
db.students.find({"gpa":{$gt : 3.5}});

db.students.update({"advisor":"Donald Knuth","gpa":{$gt : 3.5}},
	{$set:{"status":"Graduate"}});

db.students.update({"advisor":"Donald Knuth","gpa":{$lt : 3.5}},
	{$set:{"status":"Withdrawn"}});