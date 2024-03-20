const express = require('express');
const userRouter = require('./routes/userRoutes');
const lectureRouter = require('./routes/lectureRoutes');
const reviewRouter = require('./routes/reviewRoutes')
const app = express();

app.use(express.static(`${__dirname}/public`))

app.use(express.json({ limit: '15kb' }));//middleware

app.use('/api/v1/users', userRouter);
app.use('/api/v1/lectures', lectureRouter);
app.use('/api/v1/reviews', reviewRouter);

module.exports = app;