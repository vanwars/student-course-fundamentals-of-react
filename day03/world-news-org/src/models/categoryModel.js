import mongoose from "mongoose";
const Schema = mongoose.Schema;


const categorySchema = new Schema ({

    name: {type: String, required: true},
    description: {type: String, required: true},
    criteria:  {type: String, required: true},
    poster: {type: String},
    createdAt:{ type: Date, default: Date.now}

});


const Category = mongoose.model("Category", categorySchema);

module.exports = Category;