const Lecture = require('../models/lectureModel');
const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync')

const SignToken = id =>{
   return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
   });
}

exports.signUp = catchAsync (async (req, res, next)  => {
 
   const newUser = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
   }) 
 console.log(newUser);

const token = SignToken(newUser._id);

     newUser.password = undefined;

    res.status(200).json({
      status: 'succes',
      token: token,
     data: newUser
    })
   
});

exports.logIn = catchAsync(async (req, res, next) =>{
   
    const {email, password} = req.body;

    if(!email || !password){
       return next( new AppError('Please fill the required spaces',404));
    }
  
    const doc = await User.findOne({email}).select("+password");

    if(!doc || !(await doc.correctPassword(password,doc.password))){
       return next( new AppError('Inccorect email or password',404));
    }
     console.log(doc);
    const token = SignToken(doc._id);
    
    doc.password = undefined;

    res.status(200).json({
      status: "Succes",
      token: token,
      data: doc
    });

   
   

});
