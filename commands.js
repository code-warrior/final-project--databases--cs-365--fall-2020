db = db.getSiblingDB("university")

db.createCollection("studentsCollection")

db.studentsCollection.insert([
  {
    _id:"1234",
    name:{
      first:"Guy",
      middle:"Ribs",
      last:"Fieri",
      pref:"Guy"
    },
    email:"gfieri@uni.edu",
    phone:"111-111-1111",
    year:"first-year",
    gpa:2.3,
    major:"Culinary Arts",
    minor:"Business",
    status:"enrolled",
    advisor:"Donald Knuth",
    enrollDate:"9/9/18",
    graduationDate:"N/A"
  },
  {
    _id:"2345",
    name:{
      first:"John",
      middle:"Dwayne",
      last:"Rockefeller",
      pref:"Rocky"
    },
    email:"johnr@uni.edu",
    phone:"111-111-1112",
    year:"second-year",
    gpa:3.7,
    major:"Business",
    minor:"Film",
    status:"enrolled",
    advisor:"Donald Knuth",
    enrollDate:"9/6/15",
    graduationDate:"N/A"
  },
  {
    _id:"4567",
    name:{
      first:"James",
      middle:"Ceasar",
      last:"Panzee",
      pref:"Jim"
    },
    email:"jamespanzee@uni.edu",
    phone:"111-111-1113",
    year:"fourth-year",
    gpa:3.9,
    major:"Biology",
    minor:"N/A",
    status:"enrolled",
    advisor:"Donald Knuth",
    enrollDate:"8/28/13",
    graduationDate:"N/A"
  },
  {
    _id:"5678",
    name:{
      first:"Perry",
      middle:"Don",
      last:"Plat'o'pas",
      pref:"Donny"
    },
    email:"pplatopas@uni.edu",
    phone:"111-111-1114",
    year:"second-year",
    gpa:3.1,
    major:"Criminal Justice",
    minor:"Biology",
    status:"enrolled",
    advisor:"Donald Knuth",
    enrollDate:"9/9/15",
    graduationDate:"N/A"
  },
  {
    _id:"6789",
    name:{
      first:"Ronald",
      middle:"Smile",
      last:"McDonald",
      pref:"Ronald"
    },
    email:"ronmcdon@uni.edu",
    phone:"111-111-1115",
    year:"second-year",
    gpa:1.5,
    major:"Communications",
    minor:"N/A",
    status:"part-time",
    advisor:"Heinz Doofenshmirtz",
    enrollDate:"9/3/11",
    graduationDate:"N/A"
  },
  {
    _id:"7890",
    name:{
      first:"Billy",
      middle:"Vanilly",
      last:"Williams",
      pref:"Billy"
    },
    email:"billywill@uni.edu",
    phone:"222-222-2220",
    year:"fourth-year",
    gpa:3.6,
    major:"Mathematics",
    minor:"Communications",
    status:"full-time",
    advisor:"Heinz Doofenshmirtz",
    enrollDate:"9/2/2013",
    graduationDate:"N/A"
  },
  {
    _id:"8901",
    name:{
      first:"Sarah",
      middle:"Rose",
      last:"Jimothy",
      pref:"Sarah"
    },
    email:"sarahjim@uni.edu",
    phone:"777-777-3333",
    year:"third-year",
    gpa:3.7,
    major:"Computer Science",
    minor:"Communications",
    status:"full-time",
    advisor:"Donald Knuth",
    enrollDate:"9/3/14",
    graduationDate:"N/A"
  },
  {
    _id:"9012",
    name:{
      first:"Samuel",
      middle:"Sung",
      last:"Phone",
      pref:"Sam"
    },
    email:"samuelph@uni.edu",
    phone:"999-008-3883",
    year:"first-year",
    gpa:3.6,
    major:"Electrical Engineering",
    minor:"Communications",
    status:"part-time",
    advisor:"Donald Knuth",
    enrollDate:"9/2/14",
    graduationDate:"N/A"
  },
  {
    _id:"4321",
    name:{
      first:"Rupert",
      middle:"Dupert",
      last:"Von Gupert",
      pref:"Rupert"
    },
    email:"rupertvongupe@uni.edu",
    phone:"373-333-8847",
    year:"third-year",
    gpa:1.2,
    major:"History",
    minor:"N/A",
    status:"enrolled",
    advisor:"Heinz Doofenshmirtz",
    enrollDate:"8/30/12",
    graduationDate:"N/A"
  },
  {
    _id:"3210",
    name:{
      first:"Ash",
      middle:"Pallet",
      last:"Ketchum",
      pref:"Ash"
    },
    email:"ashketch@uni.edu",
    phone:"151-400-8007",
    year:"thrid-year",
    gpa:2.3,
    major:"Biology",
    minor:"Communications",
    status:"part-time",
    advisor:"Sam Oak",
    enrollDate:"9/2/10",
    graduationDate:"N/A"
  },
  {
    _id:"8765",
    name:{
      first:"Johnathan",
      middle:"",
      last:"Joestar",
      pref:"Jojo"
    },
    email:"jojo@uni.edu",
    phone:"777-097-7737",
    year:"fourth-year",
    gpa:3.8,
    major:"Archeology",
    minor:"History",
    status:"graduated",
    advisor:"Antonio Zeppeli",
    enrollDate:"9/7/08",
    graduationDate:"5/22/12"
  },

])

db.studentsCollection.find(
  {
    gpa:{$gt:3.5}
  }
)

//I can't find out a way to sort the data within the update filter field and
//therefore cannot find the highest and lowest gpas for the rest of the queries

//I'm not sure why mongo removes all other fields when doing this operation
db.studentsCollection.update(
  {
    gpa: {$gt:3.5},
    advisor:"Donald Knuth"
  },
  {
    set:
    {
      status:"graduated"
    }
})
