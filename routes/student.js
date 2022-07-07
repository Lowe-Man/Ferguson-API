const express = require('express');
const {getStudents} = require("../controllers/student");
const app = express();
app.use(express.json());

app.get('/get-all', getStudents);

module.exports = app;
