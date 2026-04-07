const { MongoClient } = require("mongodb")

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

async function run() {
    await client.connect()
    const db = client.db("testdb")
    const collection = db.collection("users")

    await collection.updateOne(
        { name: "ABC" },
        { $set: { age: 24 } }
    )

    console.log("Data updated")

    await client.close()
}

run()