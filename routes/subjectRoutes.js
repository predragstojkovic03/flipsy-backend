const express = require('express');

const {getSubjects, createSubject} = require("../controllers/subjectController");

const router = express.Router();

router.route('/').get(getSubjects).post(createSubject);

module.exports = router;