const Review = require("../models/reviewModel");


exports.createReview = async (req, res, next) => {


 try{

   const doc = await Review.create(req.body);
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