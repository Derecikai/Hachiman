const Lecture = require('../models/lectureModel');


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
 }
   };