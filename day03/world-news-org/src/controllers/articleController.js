
import Article from "../models/articleModel"

exports.wrongRoute = async (req, res) => {
    return res.status(405).json({general : "method not allowed" })
}

exports.getArticles = async (req, res) => {
    console.log(req);

    try {
        const articles = await Article.find()
        return res.status(200).json(articles)
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }

}

exports.addArticle = async (req, res) => {
    // console.log(req);
    console.log(req.body);
    console.log(valuesInput(req.body));
    try {
        const newArticle = await Article.create(valuesInput(req.body));
        return res.status(201).json({
            status: "success",
            article: newArticle
        })

    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

exports.deleteArticle = async (req, res) => {

    try{
        const deletedArticle  = await Article.findByIdAndDelete(req.params.id)

        if (!deletedArticle) {
            return res.status(404).json({general: "Article not found"})
        }else {
            return res.status(200).json({general: "Article deleted successfully"})
        }
    }catch(err){
        return res.status(500).json({error: err.message})
    }

}

exports.updateArticle = async (req, res) => {

    try{

        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if (!updatedArticle) {
            return res.status(404).json({general: "Article not found"})
        }else {
            return res.status(200).json(updatedArticle)
        }
    }catch(err){
        return res.status(403).json({error: err.message})
    }
}


const valuesInput = data => {
    return {
        title: data.title,
        body: data.body,
        authors: data.authors,
        categories: data.categories,
        poster: data.poster,
        video: data.video
    }
}

