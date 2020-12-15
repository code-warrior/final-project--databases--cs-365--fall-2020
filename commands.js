// Create roster database
var db = db.getSiblingDB('roster')
// Create students collection
db.students.drop()

// Add initial entries
db.students.insertMany([
  // Original entires
  { "_id": "18099873",
    "name": {"first": "John", "middle": ["Jeremy"], "last": "Jones", "preferred": ["Johnny"]},
    "contact": {"email": ["JJones1@uhart.edu"], "phone":["860-344-9909"]},
    "advisor": "Timothy Becker",
    "year": {"enrollment": 2018, "graduation": 2222, "current": "third"},
    "current": {"major": ["MWD"], "minor": [], "gpa": 3.9, "status": "full-time"}
  },
  { "_id": "17090874",
    "name": {"first": "John", "middle": ["Jeremy"], "last": "Jones", "preferred": ["JJ"]},
    "contact": {"email": ["JJones@uhart.edu"], "phone":["860-555-3452"]},
    "advisor": "Donald Jones",
    "year": {"enrollment": 2017, "graduation": 2221, "current": "fourth"},
    "current": {"major": ["English"], "minor": ["business"], "gpa": 3.4, "status": "full-time"}
  },
  { "_id": "19025864",
    "name": {"first": "Zachary", "middle": [], "last": "Shoemaker", "preferred": ["Zack"]},
    "contact": {"email": ["ZShoemaker@uhart.edu"], "phone":["860-123-4568","917-873-9563"]},
    "advisor": "Ingrid Russel",
    "year": {"enrollment": 2019, "graduation": 2223, "current": "second"},
    "current": {"major": ["Computer Science", "Engineering"], "minor": ["Math"], "gpa": 3.6, "status": "full-time"}
  },
  // New Entries
  { "_id": "1725960",
    "name": {"first": "Norman", "middle": ["Manson"], "last": "Normie", "preferred": ["Norm"]},
    "contact": {"email": ["NNormie@uhart.edu"], "phone":["917-803-4592"]},
    "advisor": "Donald Kluth",
    "year": {"enrollment": 2017, "graduation": 2221, "current": "fourth"},
    "current": {"major": ["Psychology"], "minor": ["Philosophy"], "gpa": 3.8, "status": "full-time"}
  },
  { "_id": "18075664",
    "name": {"first": "Samara", "middle": ["Madylin"], "last": "Ring", "preferred": ["Sammie"]},
    "contact": {"email": ["SRing@uhart.edu"], "phone":["123-555-0100"]},
    "advisor": "David Copperpot",
    "year": {"enrollment": 2018, "graduation": 2222, "current": "third"},
    "current": {"major": ["Performance"], "minor": ["Musical Theatre"], "gpa": 2.9, "status": "full-time"}
  },
  { "_id": "19026344",
    "name": {"first": "Robin", "middle": ["Martin"], "last": "Moreaux", "preferred": ["Robbie"]},
    "contact": {"email": ["RMoreaux@uhart.edu"], "phone":["980-667-6455"]},
    "advisor": "Donald Kluth",
    "year": {"enrollment": 2019, "graduation": 2223, "current": "second"},
    "current": {"major": ["Psychology"], "minor": [], "gpa": 2.0, "status": "part-time"}
  },
  { "_id": "16028794",
    "name": {"first": "Dora", "middle": [], "last": "Explorer", "preferred": []},
    "contact": {"email": ["DExplorer@uhart.edu"], "phone":["123-345-5678"]},
    "advisor": "Mary Poppins",
    "year": {"enrollment": 2016, "graduation": 2220, "current": "fourth"},
    "current": {"major": ["Archeology"], "minor": ["Spanish"], "gpa": 3.0, "status": "graduated"}
  },
  { "_id": "20923454",
    "name": {"first": "Tina", "middle": ["Marlow"], "last": "Portuna", "preferred": []},
    "contact": {"email": ["TPortuna@uhart.edu"], "phone":["917-555-1234"]},
    "advisor": "Donald Jones",
    "year": {"enrollment": 2020, "graduation": 2224, "current": "first"},
    "current": {"major": ["English"], "minor": ["International Studies"], "gpa": 2.4, "status": "full-time"}
  },
  { "_id": "19137869",
    "name": {"first": "Mikoto", "middle": [], "last": "Romanov", "preferred": ["M"]},
    "contact": {"email": ["MRomanov@uhart.edu"], "phone":["860-347-1812"]},
    "advisor": "Mary Monroe",
    "year": {"enrollment": 2019, "graduation": 2223, "current": "second"},
    "current": {"major": ["Politics"], "minor": [], "gpa": 1.8, "status": "part-time"}
  },
  { "_id": "18075093",
    "name": {"first": "Jack", "middle": ["Elizabeth"], "last": "Daniels", "preferred": []},
    "contact": {"email": ["JDaniels@uhart.edu"], "phone":["123-305-4456"]},
    "advisor": "Mary Poppins",
    "year": {"enrollment": 2018, "graduation": 2222, "current": "third"},
    "current": {"major": ["Acting"], "minor": ["English"], "gpa": 2.3, "status": "full-time"}
  },
  { "_id": "18573742",
    "name": {"first": "Theodore", "middle": ["Franklin"], "last": "Roosevelt", "preferred": ["Teddy"]},
    "contact": {"email": ["TRoosevelt@uhart.edu"], "phone":["860-900-4556"]},
    "advisor": "Mary Monroe",
    "year": {"enrollment": 2018, "graduation": 2222, "current": "third"},
    "current": {"major": ["Politics"], "minor": [], "gpa": 3.6, "status": "full-time"}
  },
  { "_id": "20247180",
    "name": {"first": "Ramona", "middle": ["Jennifer"], "last": "Leffingwell", "preferred": []},
    "contact": {"email": ["RLeffingwell@uhart.edu"], "phone":["917-590-6731"]},
    "advisor": "Donald Jones",
    "year": {"enrollment": 2020, "graduation": 2224, "current": "first"},
    "current": {"major": ["English"], "minor": ["Art"], "gpa": 3.7, "status": "full-time"}
  }
])

// Retrieve all the info from students with a GPA greater than 3.5
db.students.find({ "current.gpa": { $gt: 3.5 }})

// Update Donald Knuth's student with highest GPA to graduated
var change = db.students.find({"advisor": "Donald Kluth"}).sort({"current.gpa": -1})[0]
db.students.findOneAndUpdate({"_id": change._id}, {$set: {"current.status": "graduated"}})

// Update status of student with lowest GPA to withdrawn
var change2 = db.students.find({}).sort({"current.gpa": 1})[0]
db.students.findOneAndUpdate({"_id": change2._id}, {$set: {"current.status": "withdrawn"}})
