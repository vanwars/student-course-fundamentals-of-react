import Category from "../models/categoryModel"


exports.wrongRoute = async (req, res) => {
    return res.status(405).json({general : "method not allowed" })
}

// This is a function that returns all the categories
exports.getCategories = async (req, res) => {

    try {
        const categories = await Category.find()
        return res.status(200).json(categories)
    } catch (e) {
        return res.status(500).json({
            error: e.message
        })
    }

}

//This  is the function that adds a category
exports.addCategory = async (req, res) => {

     try {
        const newCategory = await Category.create(valuesInput(req.body));
        
        return res.status(201).json({
            status: "success",
            category: newCategory
        });

    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

const valuesInput = data => {
    return {
    
        name: data.name,
        description: data.description,
        criteria: data.criteria,
        poster: data.poster

    }
}