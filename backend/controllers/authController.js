const Lecture = require('../models/lectureModel');
const User = require('../models/userModel')
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync')
const {promisify} = require('util');

const SignToken = id =>{
   return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
   });
}

exports.signUp = catchAsync (async (req, res, next)  => {
 
   const newUser = await User.create({
      email: req.body.email,
      username: req.body.username,
      image: req.body.image,
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

exports.protect = catchAsync( async(req,res,next) =>{

  let token;



  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
      token = req.headers.authorization.split(' ')[1];

  if(!token)
  {
    return next( new AppError('You are not logged in bro',401));
  }


  const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);

  const freshUser = await User.findById(decoded.id);
  
  if(!freshUser)
  {
    return next( new AppError('User does not exist',401));
  }

  // if(freshUser.changedPasswordAfter(decoded.iat))
  // {
  //   return next( new AppError('Password has been changed, log in again',401));
  // }

  req.user = freshUser;

  next();
  
});
