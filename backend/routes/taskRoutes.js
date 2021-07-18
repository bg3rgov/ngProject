const express = require('express');
const TaskController = require('../controllers/taskController');

const router = express.Router();
router.post('/create', TaskController.createTask);

router.get('', TaskController.getTasks);
router.get('/:id', TaskController.getTaskById)
// router.get('/:task_number', TaskController.searchTasks);


router.put('/:taskId/:access_requirement_id', TaskController.createTaskOption);

router.delete('/:id', TaskController.deleteTask);

module.exports = router;