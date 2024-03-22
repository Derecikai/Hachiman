const express = require('express');
const userRouter = require('./routes/userRoutes');
const lectureRouter = require('./routes/lectureRoutes');
const reviewRouter = require('./routes/reviewRoutes')
const app = express();
const globalErrorHandler = require('./controllers/errorController')
const cors = require('cors'); // Import cors

app.use(express.static(`${__dirname}/public`))

app.use(express.json({ limit: '15kb' }));//middleware

app.use(cors());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/lectures', lectureRouter);
app.use('/api/v1/reviews', reviewRouter);


app.all('*', (req,res,next) =>{
  


  // const err = new Error(`Can't find ${req.originalUrl} on this server`)
  // err.status = 'fail';
  // err.statusCode = 404;



  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404 ));
});

//eror handling middleware
app.use(globalErrorHandler);

module.exports = app;