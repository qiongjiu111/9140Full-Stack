const { MongoClient } = require("mongodb")

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

async function run() {
    await client.connect()
    const db = client.db("testdb")
    const collection = db.collection("users")

    await collection.deleteOne({ name: "ABC" })

    console.log("One document deleted")

    await client.close()
}

run()