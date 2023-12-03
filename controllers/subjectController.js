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

// @desc    Import questions for given subject
// @route   POST /api/subjects/:id/questions
// @access  Public
const importQuestions = asyncHandler(async (req, res) => {
    const subjectId = req.params.id;

    const { questions } = req.body;

    const subject = await Subject.findById(subjectId);

    if(!subject) {
        res.status(404);
        throw new Error('Nepostojeci predmet');
    }


    if(subject.questions)
        subject.questions = [...subject.questions, ...questions];
    else
        subject.questions = questions;

    await subject.save();

    res.status(200).json(subject);
});

module.exports = {
    getSubjects,
    createSubject,
    importQuestions
};
