import mongoose, { SchemaType } from "mongoose";
const {ObjectId} = mongoose.Schema;

const articleSchema = new mongoose.Schema({


    title: {type: String, required: true},
    body: {type: String, required: true},
    authors:[{type: ObjectId, ref: "Author", required:true}],
    categories : {type: ObjectId, ref: "Category", required: true},
    poster: {type: String},
    video: {type: String},
    createdAt:{ type: Date, default: Date.now}


});

articleSchema.pre(/^find/, function(next){
    this.populate({
        path : "authors", 
        select: "name email avatar" 
    }).populate({
        path: "categories",
        select: "name"
    })
    next()
} )


const Article = mongoose.model("Article", articleSchema);
module.exports = Article; 