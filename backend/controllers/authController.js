const Lecture = require('../models/lectureModel');
const User = require('../models/userModel')

exports.signUp = (req, res, next)  => {
 

   const newUser = User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
   }) 
 console.log(req.body);

    res.status(200).json({
     data: 'Sign up complete'
    })
 
};
