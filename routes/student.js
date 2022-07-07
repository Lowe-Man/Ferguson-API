const express = require('express');
const {getStudents, getStudent, createStudent} = require("../controllers/student");
const app = express();
app.use(express.json());

app.get('/get-all', getStudents);
app.get('/get', getStudent);
app.post('/create', createStudent);

module.exports = app;
