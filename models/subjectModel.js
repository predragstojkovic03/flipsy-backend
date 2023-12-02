const mongoose = require('mongoose');
const {StudyField, YearOfStudy} = require("../entities/enums");

const questionSchema = mongoose.Schema({
    questionText: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true
    }
});

const subjectSchema = mongoose.Schema(
    {
        studyField: {
            type: String,
            enum: [StudyField.It, StudyField.Management],
            required: true
        },
        yearOfStudy: {
            type: String,
            enum: [YearOfStudy.I, YearOfStudy.II, YearOfStudy.III, YearOfStudy.IV],
            required: true
        },
        questions: [questionSchema]
    },
    {
        timestamps: true,
    }
);

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;