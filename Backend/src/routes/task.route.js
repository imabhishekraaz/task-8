const express = require('express');
const { addTask } = require('../controller/task.controller');

const taskRouter = express.Router();

taskRouter.post('/user/task',addTask);

module.exports = {
    taskRouter
}