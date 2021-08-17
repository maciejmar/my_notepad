const express = require('express');
const app = express();
const { PORT } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
require('./db/mongoose');
app.use('/api/', apiRouter);
app.use( bodyParser.json() );


app.listen(PORT, () => {
    console.log(`The app is listening ${PORT}`);
});