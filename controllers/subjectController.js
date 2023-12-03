const asyncHandler = require('express-async-handler');
const Subject = require('../models/subjectModel');
const generateToken = require('../utils/generateToken');

// @desc    Get all subjects
// @route   GET /api/subjects
// @access  Public
const getSubjects = asyncHandler(async (req, res) => {
    const subjects = await Subject.find({});

    res.json(subjects);
});

// @desc    Create subject
// @route   POST /api/subjects
// @access  Public
const createSubject = asyncHandler(async (req, res) => {
    const { studyField, yearOfStudy, questions } = req.body;

    const subject = new Subject({studyField, yearOfStudy, questions});
    await subject.save();

    res.status(201).json(subject);
});

module.exports = {
    getSubjects,
    createSubject
};
