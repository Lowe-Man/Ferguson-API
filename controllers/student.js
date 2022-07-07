const Student = require('../models/student');
const {catchAsync, CustomError} = require("../util/error");
const mongoose = require("mongoose");

exports.getStudents = catchAsync(async (req, res, next) => {
  const result = await Student.aggregate([
    {$lookup: {from: "states", localField: "StateCode", foreignField: "_id", as: "StateCode"}},
    {$unwind: "$StateCode"},
    {$project: {"StateCode._id": 0}}
  ]);
  if (!result) return next(new CustomError("Students could not be found", 404));
  res.status(200).json(result);
})

exports.getStudent = catchAsync(async (req, res, next) => {
  const result = await Student.aggregate([
    {$lookup: {from: "states", localField: "StateCode", foreignField: "_id", as: "StateCode"}},
    {$unwind: "$StateCode"},
    {$project: {"StateCode._id": 0}},
    {
      $match: {_id: new mongoose.Types.ObjectId(req.query.id)}
    }
  ]);

  if (!result) return next(new CustomError("Student could not be found", 404));
  res.status(200).json(result);
})

exports.createStudent = catchAsync(async (req, res, next) => {
  const result = await Student.create(req.body);
  if (!result) return next(new CustomError("Student could not be created", 400));
  res.status(201).json(result);
})
