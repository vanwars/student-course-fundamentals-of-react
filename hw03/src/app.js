/*Importing the required modules*/
import express from "express";
import bodyParser from "body-parser";

/*Mongoose is the tool we use to interact with the database*/
import mongoose from "mongoose";

/*Create the express server*/
const app = express();

/*These are middleware to help parse data.*/
app.use(express.json());
app.use(bodyParser.json())
app.use(express.static("public"));



/*This is the initialization of the database where we connect to the database*/
// mongo  --username keeper_admin

mongoose.connect(`mongodb://user:pw@host1.com:27017`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected')
});


/*These are the routes accesses, they are linked to the folders with the routes*/
app.use('/api', require('./routes/noteRoutes'))

/*The endpoint listening for any requests.*/
app.listen(process.env.PORT || 8000, () =>
  console.log('KeeperApi listening on port 8000!'),
);




