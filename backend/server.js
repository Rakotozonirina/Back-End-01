const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
//const { getAllProduct } = require('./controllers/product.controller');
const Product = require('./models/product.model');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Database connection established successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// Define your routes and controllers here

// Endpoint to get all products

app.get('/', (req, res) => {
  res.redirect('/getProducts');
});

app.get('/getProducts', (req, res) => {
  Product.find()
  .then(products => res.json(products))
  .catch(err => res.json(err))
});

// Define other routes as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
