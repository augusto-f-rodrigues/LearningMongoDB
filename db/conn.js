require('dotenv').config()
const { MongoClient } = require('mongodb')


const uri = process.env.MONGODB_URI

const client = new MongoClient(uri)

async function run(){
  try {
    await client.connect()
    console.log("Connecting to MongoDB")
  } catch (e) {
    console.log(e)
  }
}

run()

module.exports = client