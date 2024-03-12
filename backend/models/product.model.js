const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        name: String,
        category: String,
        description: String,
        price: Number,
        symbolcurrency: String,
        imageURL: String,
        availability: Boolean,
        tags: [String]
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('products', productSchema);

module.exports = Product;