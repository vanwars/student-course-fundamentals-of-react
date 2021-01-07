import mongoose from "mongoose";
require('mongoose-type-email');

const authorSchema = new mongoose.Schema({

    name: {type: String, required: true},
    email:{type:String, required: true },
    description: {type: String},
    avatar: {type: String}


});

const Author = mongoose.model("Author", authorSchema);


module.exports = Author