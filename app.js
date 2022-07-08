const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const studentRoutes = require('./routes/student');
const errorHandler = require("./util/error");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/student', studentRoutes);

app.use(errorHandler);

module.exports = app;
