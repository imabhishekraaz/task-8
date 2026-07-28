require('dotenv').config();
const { default: mongoose } = require('mongoose');

const mongoDB = async () => {

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB Connected successfully...")
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    mongoDB
}   



