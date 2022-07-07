const Student = require('../models/student');
const {catchAsync, CustomError} = require("../util/error");

exports.getStudents = catchAsync(async (req, res, next) => {
  const result = await Student.find()
  if (!result) return next(new CustomError("Students could not be found", 404));
  res.status(200).json(result);
})
