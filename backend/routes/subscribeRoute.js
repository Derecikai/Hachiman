const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController")
const subscribeController = require("../controllers/subscribeController");


router.post('/:id', subscribeController.subscribeLecture);
router.get('/:id', authController.protect,subscribeController.getSubscribption);
router.get('/check/:id', authController.protect, subscribeController.checkIfSubbed);

module.exports = router;