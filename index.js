const express = require('express');
const app = express();
const { PORT } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
require('./db/mongoose');
app.use('/api/', apiRouter);

app.use(express.urlencoded({extended: false})); 
app.use(express.json());   
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(PORT, () => {
    console.log(`The app is listening ${PORT}`);
});