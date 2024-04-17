const mongoose = require('mongoose')


const lectureSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,'A lecture must have a name'],
        unique: true,
        trim: true,
    },
     image:{
      type: String,
      required: [true,'A lecture should have an image'],
     },

    summary:{
      type: String,
      trim: true
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
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    brawler: {
        type: mongoose.Schema.ObjectId,
        ref: 'Brawler',
        required: [true, 'A lecture must have a brawler']
    }

},
{
  toJSON:{virtuals: true},
  toObject:{virtuals: true}
});


lectureSchema.virtual('author').get(function() {

  return this.firstName + ' ' + this.secondName;

});

lectureSchema.pre(/^find/,function(next){ //all the strings that start with find
  //  this.find({ secretTour: { $ne: true } });


   this.start = Date.now();
   
this.populate({
   path: 'brawler',
   select: 'name image',
  });

  next();
});

lectureSchema.post(/^find/,function(docs, next){ //all the strings that start with find

  
  console.log(`Query took ${Date.now()-this.start} miliseconds`);



  next();
});


const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
