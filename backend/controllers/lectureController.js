const Lecture = require('../models/lectureModel');
const { all } = require('../routes/lectureRoutes');
const ApiFeatures = require('../utils/apiFeatures');


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
   const features = new ApiFeatures(Lecture.find(),req.query).filter().sort().limitFields();
   const newLec = await features.query;

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

  
   
   exports.getLectureById = async (req, res, next)  => {
 
try{

   const newLec = await Lecture.findById(req.params.id);

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