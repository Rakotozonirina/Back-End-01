const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        nom : {
            type: String, required: true
        },
        description : {
            type: String, required: true
        },
        prix : {
            type: Number, required: true
        }
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;