const express = require('express');
const app = express();
const port = 8000;

app.get('/main', (req, res) => {
    console.log('Hello');
    res.status(200).send('Yo baby');
});

app.listen(port, () => {
    console.log('Server working on port 8000');
});
