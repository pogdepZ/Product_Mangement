const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
}