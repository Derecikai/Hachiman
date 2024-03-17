const mongoose = require('mongoose')


const lectureSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,'A lecture must have a name'],
        unique: true,
        trim: true,
    },
    
    firstName:{
     type: String,
     required: [true,'A lecture must have an uniqe tutor']
    },

     secondName:{
     type: String,
     required: [true,'A lecture must have an uniqe tutor']
    },

    rating:{
        type: Number,
        required: [true,'A lecture must have a rating'],
        default: 4.5
    },

    price:{
        type: Number,
        required: [true,'A lecture must have a price'],
    }

},
{
  toJSON:{virtuals: true},
  toObject:{virtuals: true}
});


lectureSchema.virtual('author').get(function() {

  return this.firstName + ' ' + this.secondName;

})


const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
