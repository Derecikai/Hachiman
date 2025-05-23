const Lecture = require("../models/lectureModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const Subscription = require("../models/subscriptionsModel");
const AppError = require("../utils/appError")



exports.subscribeLecture = catchAsync( async (req, res, next) =>{


 const  lectId  = req.params.id;
 const userId = req.user._id;

   console.log("THIS IS LECTID!!!!!!",lectId);

 const subscription  = await Subscription.create({
  lecture: lectId,
  user: userId,
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
exports.checkIfSubbed =  async (req,res,next) =>{
try{
   newSub = await Subscription.findOne({$and: [
      { lecture: req.params.id }, // Lecture ID condition
      { user: req.user._id } // User ID condition
    ]});

   console.log(newSub,"THIS IS SUBB!!!!!!");

  if( newSub === null )
    {
       res.status(200).json({
          status:"Succes",
          subscribed: false,
        })
    }
else if( newSub !== null){
  res.status(200).json({
          status:"Succes",
          subscribed: true,
        })
}
}
catch(error)
{
  console.log("An error occured",error);
  next(error);
}
}

exports.deleteSub = catchAsync(async (req, res, next) => {
   
   

  const doc = await Subscription.findOneAndDelete({user: req.user._id,
    lecture: req.params.id
   });

   if(!doc){
    next(new AppError("There no Subscription with that id",404));
   }

   res.status(204).json({
    status: "Delete was succsesful"
   })



})