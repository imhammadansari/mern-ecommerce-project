const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    image: Buffer,
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    category: String
})

module.exports = mongoose.model("products", productSchema);