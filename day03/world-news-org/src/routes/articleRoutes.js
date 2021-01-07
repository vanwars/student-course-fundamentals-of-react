import express from "express"
import {getArticles, addArticle, updateArticle, deleteArticle, wrongRoute} from "../controllers/articleController"

const router  = express.Router()

router.route("/articles")
    .get(getArticles)
    .post(addArticle)
    .delete(wrongRoute)
    .patch(wrongRoute)

router.route("/articles/:id")
    .patch(updateArticle)
    .delete(deleteArticle)
    .post(wrongRoute)


module.exports = router

