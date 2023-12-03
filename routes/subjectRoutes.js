const express = require('express');

const {getSubjects, createSubject, importQuestions} = require("../controllers/subjectController");

const router = express.Router();

router.route('/').get(getSubjects).post(createSubject);
router.route('/:id/questions').put(importQuestions);

module.exports = router;