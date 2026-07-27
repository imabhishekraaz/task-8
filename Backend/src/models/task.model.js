const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    status:{
        type: Boolean,
        default: false
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
});


exports.taskModel = mongoose.model('task',taskSchema);