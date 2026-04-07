const { MongoClient } = require("mongodb")

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

async function run() {
    await client.connect()
    const db = client.db("testdb")
    const collection = db.collection("users")

    const result = await collection.find({ age: { $gt: 20 } }).toArray()

    console.log(result)

    await client.close()
}

run()