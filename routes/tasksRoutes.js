const express = require('express')
const router = express.Router();

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask);
router.get('/tasks', TaskController.showTask);

module.exports = router;

