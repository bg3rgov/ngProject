const { access } = require('fs');
const Task = require('../models/taskModel');

exports.createTask = (req, res, next) => {

    const task = new Task({

        task_number: req.body.task_number,
        task_title: req.body.task_title,
        task_description: req.body.task_description,
        access_requirements: req.body.access_requirements
    })

    console.log(task);
    task.save()
    .then(createdTask => {

        res.status(200).json({
            message: `Task ${createdTask.task_number} is created`,
            task: createdTask
        })
    })
    .catch(err => {

        let message = 'Invalid task data';
        
        if(err.message) {

            message = err.message;
        }

        res.status(500).json({message});
    })
}

exports.getTasks = (req, res) => {

    Task.find()
    .then(tasks => {

        res.status(200).json({

            message: 'Tasks fetched successfully',
            tasks
        })
    })
}

exports.searchTasks = (req, res) => {

    Task.find({task_number: req.params.task_number})
    .then(task => {

        if(task) {

            res.status(200).json({message: `Tasks found`, tasks: [...task] })
        } else {

            res.status(404).json({message: 'Task not found!'})
        }
    })
}

exports.getTaskById = (req, res) => {

    const access_title = req.query.access_title;
    const taskId = req.params.id;

    Task.findOne({_id: taskId})
    .then(task => {
        if(task) {
            if(access_title) {
                
                // console.log(access_title);
                const filteredAccess = task.access_requirements.filter(access_requirement => access_requirement.access_title === access_title);
                res.status(200).json({
                    task_number: task.task_number, 
                    task_title: task.task_title,
                    task_description: task.task_description,
                    access_requirement: filteredAccess[0],
                    taskId: task._id,
                });
            } else {

                res.status(200).json(task);
            }

        } else {

            res.status(404).json({message: 'Task not found!'});
        }
    })
}

exports.updateTask = (req, res) => {


    const access_title = req.query.access_title;
    const taskId = req.params.id;
    const option = {

        figure_number: req.body.figure_number,
        requiredPanels: req.body.requiredPanels
    }

    Task.findOne({_id: req.params.id})
    .then(task => {

        const access_requirement = task.access_requirements.find(access_requirement => access_requirement.access_title === access_title);
        //if !access_requirement - DEVELOP CONDITIONS!!!

        access_requirement.options.push(option);
        task.save()
        .then(savedTask => {

            console.log(savedTask);
            res.status(200).json(savedTask)
        })


    })
}

exports.deleteTask = (req, res) => {

    Task.deleteOne({_id: req.params.id})
    .then(result => {

        console.log(result);
        res.status(200).json({message: 'Post Deleted!'});
    })
}