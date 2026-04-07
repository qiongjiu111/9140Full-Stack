const { MongoClient } = require("mongodb")

const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

async function run() {
    await client.connect()
    const db = client.db("testdb")
    const collection = db.collection("users")

    const user = await collection.findOne({ name: "A" })

    console.log(user)

    await client.close()
}

run()