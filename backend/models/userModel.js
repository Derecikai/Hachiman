const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator') //npm i validator
const bcrypt = require('bcryptjs'); //npm i bcryptjs
const { type } = require('os');
const Lecture = require('./lectureModel');

const userSchema = new mongoose.Schema({

email: {
  type: String,
  required: [true, 'A user must have an email'],
  unique: true,
  lowercase: true,
  validate : [validator.isEmail, 'Please provide a valid email']
 },

 username: {
  type: String,
   required: [true,'A user must have a name'],
 },
 
 image:{
  type: String,
  required: [true,"A user must have an image"],
 },
 
  password: {
     type: String,
     required: [true,'A user must have a password'],
     minlength: 8,
     select: false
 },
 passwordConfirm: {
     type: String,
     required: function() {
        return this.isNew
    },
     //Only works on create and save!!
     validate: {
        validator: function(el) {
            return el === this.password
        } 
     } 
 },
 passwordChangedAt: Date,
 passwordResetToken: String,
 passwordResetExpire: Date,
 active: {
   type: Boolean,
   default: true,
   select: false
 }
});

userSchema.pre('save', async function (next) {
   
  if(!this.isModified('password')) return next()

else {
   //npm i bycryptjs
   this.password = await bcrypt.hash(this.password, 12);

   this.passwordConfirm = undefined;
   //we don't need the passwordConfirm when we send the user data to the DB
   next();
}

});

userSchema.pre('save', function(next){
      if(!this.isModified('password') || this.isNew) return next();


      this.passwordChangedAt = Date.now() -1000;
      next();
});

userSchema.methods.correctPassword = async function(candidatePassword,userPassword) {

   return await bcrypt.compare(candidatePassword,userPassword)


};

const User = mongoose.model('User', userSchema);

module.exports = User;