const Lecture = require('../models/lectureModel');
const Review = require('../models/reviewModel');
const { all } = require('../routes/lectureRoutes');
const ApiFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');

exports.createLecture = async (req, res, next)  => {
 
try{

   const newLec = await Lecture.create(req.body);

    res.status(200).json({
     status: "succes",
     data: newLec
     
    })
 }
 catch(err)
 {
   
   console.log(err.message);
   
   res.status(404).json({
     status: "fail",
     message: err.message,
     
    })
  
 }
   };

   exports.getAllLectures = async (req, res, next)  => {
 
try{
 let newLec
   if(req.query.search) {
    const features = new ApiFeatures(Lecture.find({ name: { $regex: req.query.search, $options: 'i' } }));
     newLec = await features.query;
} else {
   const features = new ApiFeatures(Lecture.find(),req.query).filter().sort().limitFields().paginate();
    newLec = await features.query;
    // Code for handling cases where there is no search query
}

   // const newLec = await Lecture.find({ name: { $regex: req.query.search, $options: 'i' } });

    res.status(200).json({
     status: "succes",
     length: newLec.length,
     data: newLec
     
    })
 }
 catch(err)
 {
  console.log(err.message);
 }
   };

  
   
   exports.getLectureById = async (req, res, next)  => {
 
try{

   const newLec = await Lecture.findById(req.params.id);
   newLec._doc.clients = newLec._doc.clients.toLocaleString("en-US");
   
 // Get the total number of reviews for the lecture
        const totalReviewsCount = await Review.countDocuments({ lecture: req.params.id });

   const reviews = await Review.find({lecture: req.params.id}).limit(1);
   const associeted = await Lecture.find({
            mentor: newLec.mentor._id,
            _id: { $ne: req.params.id }  // Exclude the current lecture
        }).limit(3);
   
   // console.log("associeted lectures of the mentor are", associeted);
 //We populate review
   
    newLec._doc.reviews = reviews;

    console.log("REVIEWS ARE::: !!! ",reviews);

    if(newLec._doc.reviews){
     newLec._doc.reviewsLength = totalReviewsCount;
   }
     //We populate associated courses of the mentor
    newLec._doc.associeted = associeted;
   
   // console.log("This is blabla:", newLec);
   
  

    res.status(200).json({
     status: "succes",
     data:newLec
    })
 }
 catch(err)
 {
  console.log(err.message);
 }
   };

   exports.updateLecture = async (req, res , next) => {
      try{
         const doc = await Lecture.findByIdAndUpdate(req.params.id, req.body , {
            new: true, // Return the modified document
    runValidators: true  // Disable validation during update
         });

     if(!doc)
     {
      console.log("There is no Document with that Id");
      return next(new AppError("There is no Lecture with that Id",404));
     }

       res.status(200).json({
         status: "Succes",
         data: doc,
       });


      }catch(err)
      {
          console.log(err.message);
      }
   }