const Product = require('../models/product.model');

// Get all products

const getAllProduct = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
};

// Add a new product

const addProduct = async (req, res) => {
    const { nom, description, prix } = req.body;

    const newProduct = new Product({nom, description, prix});

    try{
        await newProduct.save();
        res.json('Product added successfully');
    }catch(err){
        res.status(400).json({error: err.message});
    }
};

// Implement update and delete operations as needed

module.exports = { getAllProduct, addProduct };