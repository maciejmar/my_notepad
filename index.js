const express = require('express');
const app = express();
const config = require('./config');

app.get('/', function(req,res)  {
    res.send('Serwer działa poprawnie');
});

app.listen(config.PORT, () => {
    console.log(`The app is listening ${config.PORT}`);
});