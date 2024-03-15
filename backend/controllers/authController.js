
exports.signUp = (req, res, next)  => {
 
 console.log(req.body);

    res.status(200).json({
     data: 'Sign up complete'
    })
 
   };