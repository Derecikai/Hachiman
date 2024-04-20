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
    
  // firstName:{
  //    type: String,
  //    required: [true,'A lecture must have an uniqe tutor']
  //   },

  // secondName:{
  //    type: String,
  //    required: [true,'A lecture must have an uniqe tutor']
  //   },
    
  mentor:{
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, "A lecture must have a ,mentor"]
    },

  rating:{
        type: Number,
        required: [true,'A lecture must have a rating'],
        default: 4.5
    },
  sesionStart: {
      type: Number,
      required:  [true,'A lecture must have a session start price'],
    },

  quote: {
    type: String,
    trim: true,
    required:  [true,'A lecture must have a quote'],
    },

  topMentor:{
    type: Boolean,
    default: false,
    },

  price:{
        type: Number,
        required: [true,'A lecture must have a price'],
    },
  clients:{
     type: Number,
     default: 0
  },

  createdAt: {
      type: Date,
      default: Date.now(),
    },
  achivments: {
      type: Number,
      default: 0
    },
  brawler: {
        type: mongoose.Schema.ObjectId,
        ref: 'Brawler',
        required: [true, 'A lecture must have a brawler']
    },
  review: {
        type: mongoose.Schema.ObjectId,
        ref: 'Review',
    }

},
{
  toJSON:{virtuals: true},
  toObject:{virtuals: true}
});


// lectureSchema.virtual('author').get(function() {

//   return this.firstName + ' ' + this.secondName;

// });

lectureSchema.pre(/^find/,function(next){ //all the strings that start with find
  //  this.find({ secretTour: { $ne: true } });


   this.start = Date.now();
   
this.populate({
   path: 'brawler',
   select: 'name image',
  });

this.populate({
   path: 'mentor',
   select: 'username email image',
  });

  next();
});

lectureSchema.post(/^find/,function(docs, next){ //all the strings that start with find

  
  console.log(`Query took ${Date.now()-this.start} miliseconds`);



  next();
});


const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
