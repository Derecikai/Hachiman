const mongoose = require('mongoose');


const friendshipSchema = new mongoose.Schema({

 reciver: {type: mongoose.Schema.ObjectId, ref: 'User', required: [true,"A friendship must have a reciver"]}



})