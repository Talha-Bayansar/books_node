const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(3001);