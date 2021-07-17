const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');
const optionSchema = Schema({

    'figure_number': String,
    'requiredPanels': String,
});

const accessSchema = Schema({

    access_title: {type: String, required: true},
    options: {type: [optionSchema]},
});

const taskSchema = Schema({

    task_number: {type: String, required: true, unique: true},
    task_title: {type: String, required: true},
    task_description: {type: String, required: true},
    access_requirements: {type: [accessSchema], required: true}
});

// taskSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Task', taskSchema);