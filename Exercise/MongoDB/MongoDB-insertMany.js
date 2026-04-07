const { MongoClient } = require("mongodb")

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

async function run() {
    await client.connect()
    const db = client.db("testdb")
    const collection = db.collection("users")

    await collection.insertMany([
        { name: "A", age: 18 },
        { name: "B", age: 25 },
        { name: "C", age: 30 }
    ])

    console.log("Multiple data inserted")

    await client.close()
}

run()