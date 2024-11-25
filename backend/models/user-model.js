const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }], 
    isAdmin: Boolean,
    orders: [{
        products: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
            },
            quantity: Number
        }],
        totalPrice: Number,
        orderDate: Date, 
        status: String,
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: Number,
        streetAddress: String,
        city: String,
        zipcode: String,
        cardNumber: Number,
        securityCode: Number,
    }],
    
    contact: Number,
    picture: String,
});

module.exports = mongoose.model("user", userSchema);

