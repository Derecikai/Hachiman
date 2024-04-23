const Review = require("../models/reviewModel");
const Lecture = require("../models/lectureModel");


exports.createReview = async (req, res, next) => {


 try{

   const doc = await Review.create(req.body);

  //  await doc.populate('user').execPopulate(); ??
   
  const lectureToUpdate = await Lecture.findById(doc.lecture);
  console.log("This is the lecture we update",lectureToUpdate);
if (!lectureToUpdate) {
  return next(new AppError("There is no Lecture with that Id",404));
}

lectureToUpdate.reviews.push(doc._id);

await lectureToUpdate.save();

   console.log("Yahoo",doc);
   res.status(201).json({
    status: "Succes",
    data: doc
   })
  }
  catch(err)
  {
   console.log(err.message);
  }

};


exports.getReview = async (req, res, next) => {


 try{

   const doc = await Review.findById(req.params.id);
   console.log(doc);
   res.status(201).json({
    status: "Succes",
    data: doc
   })
  }
  catch(err)
  {
   console.log(err.message);
  }

};