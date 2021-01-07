import express from "express"
import {getCategories, addCategory} from "../controllers/categoryController"

const router  = express.Router()

router.route("/categories")
    .get(getCategories)
    .post(addCategory)



module.exports = router