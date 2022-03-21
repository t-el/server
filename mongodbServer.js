
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const uri = "mongodb+srv://taha:taharajawidima@cluster0.js9xu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let container = {};
 const Container = async() =>{
   await client.connect();
   const db = client.db("LGS");
   const whitelistCollection = db.collection('whitelist');

   container["whitelist"] = whitelistCollection;
   const giftCollection = db.collection('giftlist');

   container["giftlist"] = giftCollection;

   return container;
 }



module.exports = Container;
