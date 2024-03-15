
const port = 8000;
const app = require('./app');

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
