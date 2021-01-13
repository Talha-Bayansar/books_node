if (process.env.NODE_URL !== 'production') require('dotenv').config();

// brew services stop mongodb-community@4.4 --> to stop mongodb service

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to mongoose'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.use(cors());

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(3001, () => console.log('Server is running.'));