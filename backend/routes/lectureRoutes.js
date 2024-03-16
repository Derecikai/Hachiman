const express = require('express');
const router = express.Router();
const lectureController = require("../controllers/lectureController");


router.post('/', lectureController.createLecture);

module.exports = router;