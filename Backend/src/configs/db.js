require('dotenv').config();
const { default: mongoose } = require('mongoose');

const mongoDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://ffabhishek116_db_user:Abhishekraj@cluster0.zxjqoof.mongodb.net/?appName=Cluster0');
        console.log("MongoDB Connected successfully...")
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    mongoDB
}