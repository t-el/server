var express = require('express');
var router = express.Router();
const CollectionsContainer = require('../mongodbServer.js');

/* GET home page. */
router.get('/giftcollection', async function(req, res, next) {

 const  collections = await CollectionsContainer();
   const giftcollection = collections.giftlist;
    const giftaddresses = await giftcollection.find({}).toArray();
  res.json({"giftaddresses":giftaddresses});
});

router.get('/giftcollectioncount', async function(req, res, next) {

 const  collections = await CollectionsContainer();
   const giftcollection = collections.giftlist;
    const count = await giftcollection.find({}).count();
  res.json({"count":count});
});

router.get('/whitelistcollectioncount', async function(req, res, next) {

 const  collections = await CollectionsContainer();
   const whitelistcollection = collections.whitelist;
    const count = await whitelistcollection.find({}).count();
  res.json({"count":count});
});

router.post('/giftcollection/add', async function(req, res, next) {
 const  collections = await CollectionsContainer();
   const giftcollection = collections.giftlist;
   const giftaddresse = await giftcollection.insertOne({"address":req.body.address});
   res.json({"giftaddresse":giftaddresse});
});



router.get('/whitelistcollection', async function(req, res, next) {
 const  collections = await CollectionsContainer();
   const whitelistcollection = collections.whitelist;
    const whitelistaddresses = await whitelistcollection.find({}).toArray();
  res.json({"whitelistaddresses":whitelistaddresses});
});


router.post('/whitelistcollection/add', async function(req, res, next) {
 const  collections = await CollectionsContainer();
   const whitelistcollection = collections.whitelist;
    const whitelistaddresse = await whitelistcollection.insertOne({"address":req.body.address});
  res.json({"whitelistaddresse":whitelistaddresse});
});

module.exports = router;