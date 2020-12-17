//+ Retrieve all the info from students with a GPA greater than 3.5
//recource: mongo university
db.theStudentsCollection.find({"gpa":{"$gt": 3.5}}).pretty()

//+ Update the status of the student advised by Donald Knuth with the highest GPA to “graduated”
//resource https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/
db.theStudentsCollection.findOneAndUpdate({"advisor":"Donald Knuth"},{"$set": {"status":"graduated"}},{sort: {"gpa": -1}})

// + Update the status of the student with the lowest GPA to “withdrawn”
db.theStudentsCollection.findOneAndUpdate({"status":"Full Time"},{"$set": {"status":"withdrawn"}},{sort: {"gpa": 1}})


//insert commands
//recource mongo university
db.theStudentsCollection.insert(
  [
    {"student_id":"12341234","first_name":"Michael","middle_name":"Gary","last_name":"Scott","pref_name":"Michael","email":"scott@hartford.edu","phone":"8605553292","year":"4","gpa":2.2,"major":"Management","minor":"Marketing","status":"Full Time","advisor":"smith","enrollment":"August 2017","graduation":"May 2021"},
    {"student_id":"12341235","first_name":"Michael","middle_name":"Gary","last_name":"Scott","pref_name":"Mike","email":"scott@hartford.edu","phone":"8605553264","year":"1","gpa":3.2,"major":"Nursing","minor":"Psychology","status":"Full Time","advisor":"Rose","enrollment":"August 2020","graduation":"May 2024"},
    {"student_id":"12341236","first_name":"Dwight","middle_name":"Kurt","last_name":"Schrutte","pref_name":"Dwight","email":"schrutte@hartford.edu","phone":"8605554837","year":"2","gpa":3.6,"major":"Economics","minor":"Criminal Justice","status":"Full Time","advisor":"Donald Knuth","enrollment":"August 2019","graduation":"May 2023"},
    {"student_id":"12341237","first_name":"Pamela","middle_name":"Morgan","last_name":"Beesly","pref_name":"Pam","email":"beesly@hartford.edu","phone":"8605559374","year":"3","gpa":3.8,"major":"Art","minor":"Drawing","status":"Full Time","advisor":"Picasso","enrollment":"August 2018","graduation":"May 2022"},
    {"student_id":"12341238","first_name":"James","middle_name":"Duncan","last_name":"Halpert","pref_name":"Jim","email":"halpert@hartford.edu","phone":"8605559742","year":"3","gpa":3.7,"major":"Finance","minor":"Marketing","status":"Full Time","advisor":"Bezos","enrollment":"August 2018","graduation":"May 2022"},
    {"student_id":"12341239","first_name":"Andrew","middle_name":"Baines","last_name":"Bernard","pref_name":"Andy","email":"bernard@hartford.edu","phone":"8605556812","year":"1","gpa":3.1,"major":"Performing Arts","minor":"Theater","status":"Full Time","advisor":"Donald Knuth","enrollment":"August 2020","graduation":"May 2024"},
    {"student_id":"12341240","first_name":"Angela","middle_name":"Noelle","last_name":"Martin","pref_name":"Angela","email":"martin@hartford.edu","phone":"8605558219","year":"2","gpa":4.0,"major":"Accounting","minor":"Law","status":"Full Time","advisor":"Pacioli","enrollment":"August 2019","graduation":"May 2023"},
    {"student_id":"12341241","first_name":"Ryan","middle_name":"Baily","last_name":"Howard","pref_name":"Ryan","email":"howard@hartford.edu","phone":"8605558258","year":"4","gpa":2.8,"major":"Business","minor":"Management","status":"Full Time","advisor":"Buffett","enrollment":"August 2017","graduation":"May 2021"},
    {"student_id":"12341242","first_name":"Toby","middle_name":"Wyatt","last_name":"Flenderson","pref_name":"Toby","email":"flenderson@hartford.edu","phone":"8605552481","year":"2","gpa":3.9,"major":"Psychology","minor":"Business","status":"Full Time","advisor":"Freud","enrollment":"August 2019","graduation":"May 2023"},
    {"student_id":"12341243","first_name":"Stanley","middle_name":"James","last_name":"Hudson","pref_name":"Stanley","email":"hudson@hartford.edu","phone":"8605553512","year":"3","gpa":3.4,"major":"Marketing","minor":"Data Analytics","status":"Full Time","advisor":"Freud","enrollment":"August 2018","graduation":"May 2022"}

  ]
)
