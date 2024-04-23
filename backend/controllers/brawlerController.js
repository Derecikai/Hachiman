const ApiFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Brawler = require("../models/brawlerModel");

exports.getAllBrawlers = catchAsync( async (req, res, next) =>{

    
   const newDoc =  await Brawler.find();
 
  res.status(200).json({
     status: "succes",
     length: newDoc.length,
     data: newDoc
    })
 


});

exports.createBrawler = catchAsync( async (req, res, next) =>{

    
   const newDoc =  await Brawler.create(req.body);
 
  res.status(200).json({
     status: "succes",
     length: newDoc.length,
     data: newDoc
    })
 


});