mongo "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.-----.mongodb.net/student_directory"
mongoexport --uri="mongodb+srv://m001-student:m001-mongodb-basics@sandbox.-----.mongodb.net/student_directory" --collection=under_graduate --out=under_graduate_dir.JSON
mongodump --uri="mongodb+srv://m001-student:m001-mongodb-basics@sandbox.-----.mongodb.net/student_directory"

// Database Name = student_directory
// colelction Name = under_graduate

// Populate the database with 10 students
// create the Database
use student_directory
// create the Collection
db.createCollection("under_graduate")
// Could use mongo import with the target URI, Collection Name, and the exported JSON fill
// replacing the dashed with the needed link
mongoimport --uri="mongodb+srv://m001-student:m001-mongodb-basics@sandbox.-----.mongodb.net/student_directory" --collection="under_graduate" --file=under_graduate_dir.JSON

// OR insert into an empty database using an insert statement
db.dir.insert(
  [
    {"stu_ID":18693748,"first_name":"Dean","last_name":"Winchester","pref_name":"Squirrel","email":"dwinchester@hartford.edu","phone":"(123)867-5309","year":"Freshman","gpa":2.8,"major":"Monster Hunting","minor":"Classic Car Repair","status":"part-time","advisor":"Bobby singer","init_enroll":"Sep 2020","grad_date":"May 2024"},
    {"stu_ID":53783759,"first_name":"Sam","last_name":"Winchester","pref_name":"Moose","email":"samwinchester@hartford.edu","phone":"(123)674-2324","year":"Freshman","gpa":3.7,"major":"Monster Hunting","minor":"Historical Literature","status":"full-time","advisor":"Bobby singer","init_enroll":"Sep 2020","grad_date":"May 2024"},
    {"stu_ID":53666903,"first_name":"Fergus","last_name":"Macleod","pref_name":"Crowley","email":"kingofhell@hartford.edu","phone":"(666)666-6666","year":"Sophomore","gpa":3.666,"major":"Demonic Deal Making","minor":"Business Management","status":"full-time","advisor":"The Darkness","init_enroll":"Sep 2020","grad_date":"May 2024"},
    {"stu_ID":33313331,"first_name":"Jimmy","last_name":"Novak","pref_name":"Castiel","email":"castiel@hartford.edu","phone":"(333)643-8942","year":"Sophomore","gpa":3.1,"major":"Angelic Duty","minor":"Winchester Babysitting","status":"full-time","advisor":"Micheal","init_enroll":"Sep 2019","grad_date":"May 2023"},
    {"stu_ID":15847596,"first_name":"Joanna","last_name":"Harvelle","pref_name":"Jo","email":"jharvelle@hartford.edu","phone":"(526)623-8982","year":"Freshman","gpa":2.5,"major":"Monster Hunting","minor":"Food Service","status":"full-time","advisor":"Ellen Harvelle","init_enroll":"Sep 2020","grad_date":"May 2024"},
    {"stu_ID":39485125,"first_name":"Benjamin","last_name":"Lafitte","pref_name":"Benny","email":"blafiite@hartford.edu","phone":"(000)781-6254","year":"Freshman","gpa":3.2,"major":"Hematology","minor":"Food Service","status":"full-time","advisor":"The Old Man","init_enroll":"Sep 2020","grad_date":"May 2024"},
    {"stu_ID":89745984,"first_name":"Charlene","last_name":"Bradbury","pref_name":"Charlie","email":"cbradb@hartford.edu","phone":"(621)254-8456","year":"Freshman","gpa":4.0,"major":"Computer Engineering","minor":"Computer Science","status":"graduated","advisor":"Donald Knuth","init_enroll":"Sep 2020","grad_date":"May 2024"},
    {"stu_ID":26475888,"first_name":"Kevin","last_name":"Tran","pref_name":"Kev","email":"ktran@hartford.edu","phone":"(532)365-8459","year":"Freshman","gpa":3.9,"major":"Linguistics","minor":"Religious studies","status":"full-time","advisor":"Donald Knuth","init_enroll":"Sep 2020","grad_date":"May 2024"},
    {"stu_ID":45557774,"first_name":"Gabriel","last_name":"Archangel","pref_name":"Gabe","email":"Gabriel@hartford.edu","phone":"(333)883-8562","year":"Junior","gpa":2.1,"major":"Messenger of God","minor":"Winchester Babysitting","status":"Withdrawn","advisor":"God","init_enroll":"Sep 2018","grad_date":"May 2022"},
    {"stu_ID":66616661,"first_name":"Sam","last_name":"Winchester","pref_name":"Lucifer","email":"luci@hartford.edu","phone":"(666)532-2643","year":"Junior","gpa":4.0,"major":"Falling From Grace","minor":"Demon Creation","status":"full-time","advisor":"God","init_enroll":"Sep 2018","grad_date":"May 2022"}
  ]
)


// Retrieve all the info from students with a GPA greater than 3.5

db.under_graduate.find( { gpa: { $gt: 3.5 } } ).pretty()


// Update the status of the student advised by Donald Knuth with the highest GPA to “graduated”

db.under_graduate.findAndModify({
  query:{"advisor":"Donald Knuth"},
  sort:{"gpa": -1},
  update:{$set:{"status": "graduated"}},
  new:true
})


// Update the status of the student with the lowest GPA to “withdrawn”

db.under_graduate.findAndModify({
  sort:{"gpa": 1},
  update:{$set:{"status": "withdrawn"}},
  new:true
})
