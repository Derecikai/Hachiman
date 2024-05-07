const Lecture = require("../models/lectureModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const Subscription = require("../models/subscriptionsModel");



exports.subscribeLecture = catchAsync( async (req, res, next) =>{

 const { lectId} = req.body;

   console.log("THIS IS LECTID!!!!!!",lectId);

 const subscription  = await Subscription.create({
  lecture: lectId,
  user: req.params.id
 });
  console.log("THIS IS SUBB!!!!!!",subscription);

  res.status(200).json({
     status: "succes",
     data: subscription
    })

} ) 
exports.getSubscribption = catchAsync( async (req,res,next) => {


    newSub = await Subscription.findById(req.params.id);
    

    res.status(200).json({
     status: 'Succes',
      data:newSub
    })

})