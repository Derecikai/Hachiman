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

exports.logIn = async (req, res, next) =>{
   try{
    const {email, password} = req.body;

    if(!email || !password){
      console.log("Please fill in the form");
    }
  
    const doc = await User.findOne({email}).select("+password");

    if(!doc || !(await doc.correctPassword(password,doc.password))){
       console.log("Username or password inccorect");
    }
     console.log(doc);
    const token = SignToken(doc._id);


    res.status(200).json({
      status: "Succes",
      token: token,
      data: doc
    });

   }
   catch(err){
      console.log(err.message);
   }

}
