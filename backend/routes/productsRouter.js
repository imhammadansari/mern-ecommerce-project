const express = require('express')
const router = express.Router();
const upload = require("../config/multer-confiq");
const productsModel = require("../models/product-model");


router.get("/", function (req, res) {
    res.send("Hey working")
});

router.post("/addproducts", upload.single("image"), async function (req, res) {
    try {
        if (!req.file) throw new Error("Image is required"); 
        let { name, price, discount, category } = req.body;

        let product = await productsModel.create({
            image: req.file.buffer,
            name, 
            price,
            discount,
            category
        });

        res.status(201).json({
            message: "Product added successfully",
            product: product
        });
    } catch (error) {

        res.status(400).json({
            message: "Error adding product",
            error: error.message
        });
    }
});

router.get("/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      
      const products = category === 'all'
        ? await productsModel.find()
        : await productsModel.find({ category });
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).send("Error retrieving products by category");
    }
  });
  

module.exports = router;