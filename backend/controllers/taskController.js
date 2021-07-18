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

    const searchTask = req.query.task_number;

    const query = Task.find();

    if(!searchTask) {

        query.then(tasks => {

            res.status(200).json({

                message: 'Tasks fetched successfully',
                tasks
            })
        })
    } else {

        query.then(tasks => {

            const task = tasks.filter(task => task.task_number === searchTask);
            console.log(task)
            res.status(200).json({message: 'Task fetched', tasks: task})
        })
    }
}


exports.getTaskById = (req, res) => {

    
    const access_title = req.query.access_title;
    const taskId = req.params.id;
    console.log(req.params)
    console.log(taskId)
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

exports.createTaskOption = (req, res) => {

    if(req.body.figure_number ==='' || req.body.requiredPanels === '') {

        res.status(400).json({message: 'Figure Number and Require Panels are mandatory!'});
        return;
    }

    const taskId = req.params.taskId;
    const access_requirement_id = req.params.access_requirement_id;
    const option = {

        figure_number: req.body.figure_number,
        requiredPanels: req.body.requiredPanels
    }
    
    Task.findOne({_id: taskId})
    .then(task => {

        if(!task) res.status(404).json({message: 'Task Not Found!'});
        const access_requirement = task.access_requirements.find(access_requirement => {

            return access_requirement._id == access_requirement_id;
        });

        const status = access_requirement.options.find(opt => opt.figure_number === option.figure_number );
        if(!status) {

            access_requirement.options.push(option);
            task.save()
            .then(savedTask => {
    
                res.status(200).json({
                    message: `New Option created(${option.figure_number}) for Task ${savedTask.task_number}`,
                    savedTask
                })
                return;
            })
        } else {

            res.status(500).json({message: `Option ${option.figure_number} is already included!`})
        }
    })
}

exports.deleteTask = (req, res) => {

    Task.deleteOne({_id: req.params.id})
    .then(result => {

        res.status(200).json({message: 'Post Deleted!'});
    })
}