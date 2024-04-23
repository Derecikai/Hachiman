const mongoose = require("mongoose");

const brawlerSchema = new mongoose.Schema({

     name:{
        type: String,
        required: [true,'A brawler must have a name'],
        unique: true,
        trim: true,
    },
     image:{
      type: String,
      required: [true,'A brawler should have an image'],
     },

    summary:{
      type: String,
      trim: true,
      required: [true,'A brawler should have an image'],
    },

});

const Brawler = mongoose.model('Brawler', brawlerSchema);

module.exports = Brawler;