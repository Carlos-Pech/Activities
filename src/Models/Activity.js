const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const activitySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
