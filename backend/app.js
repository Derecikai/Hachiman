const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(express.static(`${__dirname}/public`))

app.use(express.json({ limit: '15kb' }));//middleware

app.use('/api/v1/users', userRouter);

module.exports = app;