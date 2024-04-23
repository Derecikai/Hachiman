const express = require('express');
const router = express.Router();
const brawlerController = require('../controllers/brawlerController');

router
.route("/")
.get(brawlerController.getAllBrawlers)
.post(brawlerController.createBrawler);


module.exports = router;