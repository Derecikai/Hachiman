const Lecture = require("../models/lectureModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const Subscription = require("../models/subscriptionsModel");
const AppError = require("../utils/appError")



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
      data:newSub,
      user: req.user
    })

})
exports.checkIfSubbed = catchAsync( async (req,res,next) =>{

   newSub = await Subscription.find({$and: [
      { lecture: req.params.id }, // Lecture ID condition
      { user: req.user._id } // User ID condition
    ]});

   console.log(newSub,"THIS IS SUBB!!!!!!");

  if( !newSub[0]?.lecture  )
    {
      return next(new AppError("There is no subscription with that id",404));
    }
else if(newSub[0].lecture){
  res.status(200).json({
          status:"Succes",
          subscribed: true,
        })
}


})