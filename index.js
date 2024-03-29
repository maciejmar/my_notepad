const express = require('express');
const app = express();
const { PORT } = require('./config');
const apiRouter = require('./backend/routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.urlencoded({extended: false})); 
app.use(express.json());   
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
require('./db/mongoose');
app.use('/api/', apiRouter);


app.listen(PORT, () => {
    console.log(`The app is listening ${PORT}`);
});