// import all required module
const express = require('express');
const { mongoDB } = require('./src/configs/db');

const dns = require('dns');
const { taskRouter } = require('./src/routes/task.route');
const { userRouter } = require('./src/routes/user.route');

dns.setServers(["1.1.1.1", "8.8.8.8"])

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect the database
mongoDB();

// Handle the diffent routes
app.use('/api', userRouter)
app.use('/api', taskRouter)

app.listen(4000, () => {
    console.log('server is running...');
});


