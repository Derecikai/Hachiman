const Lecture = require('../models/lectureModel');
const User = require('../models/userModel')
const jwt = require('jsonwebtoken');

const SignToken = id =>{
   return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
   });
}

exports.signUp = async (req, res, next)  => {
 

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
 
};
