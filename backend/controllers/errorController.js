const AppError = require('../utils/appError');

const handleCastErrorDB = err => {
  const message = `${err.value} is not a correct ${err.path}.`;
  return new AppError(message, 400);
};

const handleDuplicateIdError = err =>{
  const message = `It seems that there already is a tour with the name or email ${err.keyValue.email}`;
  return new AppError(message, 400);
};


const handleIncorectValidation = err =>{
  const error = Object.values(err.errors).map(el =>el.message);
  const message = `${error.join('. ')}`; 
  return new AppError(message, 400);
};


const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const handleJWTError = err => new AppError(err.message, 401);

const handleJWTExpire = err => new AppError('Please log in again your token of login validation has expired',401);

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }
  else {
    res.status(500).json({
      status: 'error',
      message: `Something went very wrong `
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
    
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = err;
    // console.log(error.name);
    if(error.name === 'CastError') error = handleCastErrorDB(error);
   
    if(error.code === 11000) error = handleDuplicateIdError(error);
  //  if(error.code === 100)
    // console.log(error.name);
    if(error.name === "ValidationError") 
    {  
      // console.log(error);
      error = handleIncorectValidation(error);}

      //Hnadle JWT Token error(inccorect or unvalid jwt with the ones from DB)
    if(error.name === "JsonWebTokenError")
      error = handleJWTError(error);
    if(error.name === "TokenExpiredError")
      error = handleJWTExpire(error);
    
    sendErrorProd(error, res);
  }
};