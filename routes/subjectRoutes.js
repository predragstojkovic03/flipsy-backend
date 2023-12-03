const express = require('express');

const {getSubjects, createSubject, importQuestions, getQuestions} = require("../controllers/subjectController");

const router = express.Router();

router.route('/').get(getSubjects).post(createSubject);
router.route('/:id/questions').put(importQuestions).get(getQuestions);

module.exports = router;