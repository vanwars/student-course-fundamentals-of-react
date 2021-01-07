
import Author from "../models/authorModel"
import regeneratorRuntime from "regenerator-runtime";

exports.wrongRoute = async (req, res) => {
    return res.status(405).json({general : "method not allowed" })
}

exports.getAuthors = async (req, res) => {

    try {
        const authors = await Author.find()
        return res.status(200).json(authors)
    } catch (e) {
        return res.status(500).json({
            error: e.message
        })
    }

}

exports.addAuthor = async (req, res) => {

     try {

        const {name, email, description, avatar} = req.body

        const newAuthor = await Author.create({name, email, description, avatar});
        return res.status(201).json({
            status: "success",
            author: newAuthor
        })

    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

