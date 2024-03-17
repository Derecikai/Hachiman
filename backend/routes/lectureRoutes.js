const express = require('express');
const router = express.Router();
const lectureController = require("../controllers/lectureController");



router
.route('/')
.get(lectureController.getAllLectures)
.post(lectureController.createLecture)


router
.route('/:id')
.get(lectureController.getLectureById);
module.exports = router;