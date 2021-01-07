const express = require('express')
import {getAuthors, addAuthor, wrongRoute} from "../controllers/authorController"

const router  = express.Router()

router.route("/authors")
    .get(getAuthors)
    .post(addAuthor)
    .delete(wrongRoute)
    .patch(wrongRoute)
    
module.exports = router