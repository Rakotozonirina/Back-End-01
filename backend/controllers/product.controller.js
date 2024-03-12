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
    const { name, category, description, price, symbolcurrency, imageURL, availability, tags } = req.body;

    const newProduct = new Product({name, category, description, price, symbolcurrency, imageURL, availability, tags});

    try{
        await newProduct.save();
        res.json('Product added successfully');
    }catch(err){
        res.status(400).json({error: err.message});
    }
};

// Implement update and delete operations as needed

module.exports = { getAllProduct, addProduct };