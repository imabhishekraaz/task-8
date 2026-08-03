const express = require('express');
const taskController= require('../controller/task.controller');
const authMiddleware = require('./../middleware/auth.middleware')

const taskRouter = express.Router();

taskRouter.post('/user/task', authMiddleware.verifyToken, taskController.addTask);

taskRouter.put('/user/task/:id', authMiddleware.verifyToken, taskController.updateUserTask);

taskRouter.delete('/user/task/:id', authMiddleware.verifyToken, taskController.deleteUserTask);

taskRouter.get('/user/tasks', authMiddleware.verifyToken, taskController.userAllTasks)

taskRouter.get('/user/task/:id',authMiddleware.verifyToken, taskController.getUserTask)

module.exports = {
    taskRouter
}