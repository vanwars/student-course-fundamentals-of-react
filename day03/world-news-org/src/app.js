///Importing the required modules
import express from "express";
import bodyParser from "body-parser";
//Mongoose is the tool we use to interact with the database
import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

///Create the express server.
const app = express();

//These are middleware to help parse data.
app.use(express.json());
app.use( bodyParser.json());
app.use(express.static("public"));



//This is the initialization of the database where we connect to the database
const username = 'keeper_admin';
const dbName = 'keeper_app'
const uri = `mongodb+srv://${username}:${process.env.PASSWORD}@web-projects.lnztl.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// console.log(uri)
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected')
});


///These are the routes accesses, they are linked to the folders with the routes
app.use('/api', require('./routes/authorRoutes'))
app.use('/api', require('./routes/categoryRoutes'))
app.use('/api', require('./routes/articleRoutes'))

///The endpoint listening for any requests.
app.listen(process.env.PORT || 3000, () =>
  console.log('WorldNewsOrg app listening on port 3000!'),
);




