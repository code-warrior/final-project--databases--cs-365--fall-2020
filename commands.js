 // base node.js code borrowed from https://github.com/mongodb-developer/nodejs-quickstart/blob/master/connection.js
 var MongoClient = require('mongodb').MongoClient,
 Code= require('mongodb').Code;

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://localhost:27017/students";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
		const db = client.db("students");
		result = await db.createCollection("studentCollection");
		studentcollect = db.collection("studentCollection");
		jsfunctions = db.collection("system.js");
		studentcollect.insertOne({first: 'Peter', middle:'Micheal', last: 'Klesczewski', preferdname:'Peter', studentID:'123456781', email:'email@example.com', phonenum:'555-555-5551', yearstatus:'senior', gpa:3.8, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Donald Knuth', enrolldate:'fall 2017', graddate:'spring 2021'});
		studentcollect.insertOne({first: 'Joe', middle:'Alan', last: 'Klesczewski', preferdname:'Joe', studentID:'123456782', email:'email@example2.com',   phonenum:'555-555-5552', yearstatus:'senior', gpa:3.7, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Krista Hill', enrolldate:'fall 2017', graddate:'spring 2021' });
		studentcollect.insertOne({first: 'Dan', middle:'Alan', last: 'Klesczewski', preferdname:'Dan', studentID:'123456783', email:'email@example3.com',   phonenum:'555-555-5553', yearstatus:'senior', gpa:3.5, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Krista Hill', enrolldate:'fall 2017', graddate:'spring 2021' });	
		studentcollect.insertOne({first: 'Tom', middle:'Alan', last: 'Klesczewski', preferdname:'Tom', studentID:'123456784', email:'email@example4.com',   phonenum:'555-555-5554', yearstatus:'senior', gpa:3.5, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Krista Hill', enrolldate:'fall 2017', graddate:'spring 2021' });
		studentcollect.insertOne({first: 'Bob', middle:'Alan', last: 'Klesczewski', preferdname:'Bob', studentID:'123456785', email:'email@example5.com',   phonenum:'555-555-5555', yearstatus:'senior', gpa:3.5, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Krista Hill', enrolldate:'fall 2017', graddate:'spring 2021' });
		studentcollect.insertOne({first: 'Tim', middle:'Alan', last: 'Klesczewski', preferdname:'Tim', studentID:'123456786', email:'email@example6.com',   phonenum:'555-555-5556', yearstatus:'senior', gpa:2.5, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Krista Hill', enrolldate:'fall 2017', graddate:'spring 2021' });	
		studentcollect.insertOne({first: 'Jake', middle:'Alan', last: 'Klesczewski', preferdname:'Jake', studentID:'123456787', email:'email@example7.com', phonenum:'555-555-5557', yearstatus:'senior', gpa:2.5, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Krista Hill', enrolldate:'fall 2017', graddate:'spring 2021' });
		studentcollect.insertOne({first: 'Jack', middle:'Alan', last: 'Klesczewski', preferdname:'Jack', studentID:'123456788', email:'email@example8.com', phonenum:'555-555-5558', yearstatus:'senior', gpa:2.5, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Krista Hill', enrolldate:'fall 2017', graddate:'spring 2021' });
		studentcollect.insertOne({first: 'Josh', middle:'Alan', last: 'Klesczewski', preferdname:'Josh', studentID:'123456789', email:'email@example9.com', phonenum:'555-555-5559', yearstatus:'senior', gpa:2.5, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Krista Hill', enrolldate:'fall 2017', graddate:'spring 2021' });	
		studentcollect.insertOne({first: 'Eric', middle:'Alan', last: 'Klesczewski', preferdname:'Eric', studentID:'123456780', email:'email@example0.com', phonenum:'555-555-5550', yearstatus:'senior', gpa:2.2, major:'CompE', minor:'CS', statustime:'Fulltime', advisor:'Donald Knuth', enrolldate:'fall 2017', graddate:'spring 2021'});		
		jsfunctions.save({_id: "findgpa",value: new Code(function (){return db.studentCollection.find( {  gpa: { $gt: 3.5 }  } );})});
		jsfunctions.insertOne({_id: "graduate",value: new Code(function (){return db.studentCollection.findOneAndUpdate({}, {$set: {"statustime": 'graduated'}},{sort:{"gpa" : -1}});})});
		jsfunctions.insertOne({_id: "withdraw",value: new Code(function (){return db.studentCollection.findOneAndUpdate({}, {$set: {"statustime": 'withdrawn'}},{sort:{"gpa" : 1}});})});

		result = await db.command({dbStats: 1,});
		console.log(result);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
