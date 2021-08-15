const express = require('express');
const app = express();
const { PORT } = require('./config');

const apiRouter = require('./routes/api');

app.use('/', apiRouter);



app.listen(PORT, () => {
    console.log(`The app is listening ${PORT}`);
});