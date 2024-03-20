const mongoose = require('mongoose')
const User = require("./userModel");
const Lecture = require("./lectureModel");

const reviewSchema = new mongoose.Schema({
      
      review:{
       type: String,
       trim: true,
       required: [true,"A review should have a review"]
      },
      rating:{
       type: Number,
       min: 1,
       max: 5
      },
      createAd:{
       type: Date,
       default: Date.now()
      },

      lecture:{
       type: mongoose.Schema.ObjectId,
       ref: "Lecture",
       required: [true,"A review should have a lecture"]
      },
      user:{
       type: mongoose.Schema.ObjectId,
       ref: "User",
       required: [true,"A review should have an User"]
      }

},
{ toJSON: { virtuals: true},
  toObject: { virtuals: true}
 })

 reviewSchema.index({tour: 1, user: 1}, { unique: true });

 reviewSchema.pre(/^find/, function(next){


  this.populate({
   path: 'user',
   select: 'username',
  });
  next();
 })

 const Review = mongoose.model('Review', reviewSchema);




module.exports = Review;

