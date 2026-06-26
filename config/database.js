const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://farhankhan10794:Khan1296@nodejs.kifkbtn.mongodb.net/devTinder')
}

module.exports = connectDB;

