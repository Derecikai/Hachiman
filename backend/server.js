const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = 8000;
const app = require('./app');

dotenv.config({ path: './config.env'});

//Conection to DB
const DB = process.env.DATABASE;
console.log("This is DB: ",DB); 

mongoose.connect(DB,{
 useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false
})
.then(()=> console.log('DB connection succsesfull'));


const lectureSchema = new mongoose.Schema({

    name:{
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

})

const Lecture = mongoose.model('Lecture', lectureSchema);

const testLec = new Lecture({
    name: 'Video ai',
    rating: 4.7,
    price: 400
});

testLec.save().then(doc =>{
    console.log(doc);
}).catch(err => {
    console.log(err.message);
})

app.get('/main', (req, res) => {
    console.log('Hello there');
    res.status(200).json({
        text: "Hello"
    });
});

const server = app.listen(port , () =>{
 console.log(`App running on port ${port}...`);

});

process.on('unhandledRejection', err =>{
 console.log(err.name, err.message);
 console.log('Shuting down server');
 server.close(() => {
  process.exit(1);
 })
});
