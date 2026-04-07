const { MongoClient } = require("mongodb")

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

async function run() {
    await client.connect()
    const db = client.db("testdb")
    const collection = db.collection("users")

    await collection.insertOne({ name: "ABC", age: 22 })

    console.log("Data created")

    await client.close()
}

run()