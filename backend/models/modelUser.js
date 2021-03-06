const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        tel: String,
        age: String,
        role: String,
        password: String,
    }
);

module.exports = mongoose.model('User', UserSchema);