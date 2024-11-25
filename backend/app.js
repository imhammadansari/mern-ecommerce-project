const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const mongoose = require('mongoose');

const isLoggedin = require("./middlewares/isLoggedin");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const productsModel = require("./models/product-model");
const userModel = require("./models/user-model");
const { model } = require("mongoose");

require("dotenv").config();


app.use(cors({
    origin: "https://mern-ecommerce-project-frontend-alpha.vercel.app", 
    credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/", router);

const PORT = process.env.PORT || 3000;
mongoose.connect("mongodb+srv://imhammadansari:<hammad64>@cluster0.4mdno.mongodb.net/backendproject?retryWrites=true&w=majority&appName=Cluster0");


router.get("/shop", async function (req, res) {
    try {
        
        const product = await productsModel.find();
        res.send({ status: "ok", product: product });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving products");
    }
});

router.post("/addtoCart/:productid", isLoggedin, async function (req, res) {
    try {
        const user = await userModel.findOne({ email: req.user.email }); 
        if (!user) {
            return res.status(404).send("User not found");
        }

        if (!user.cart.includes(req.params.productid)) {
            user.cart.push(req.params.productid);
            await user.save();
        }

        res.send("Product added to cart");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding to cart");
    }
});

router.get("/items/:productid", async function (req, res) {  
    try {
        const productId = req.params.productid;  
        const product = await productsModel.findOne({ _id: productId }); 
        console.log("Item requested:", productId);

        if (!product) {
            return res.status(404).send("Product not found");
        } else {
            res.send({ status: "ok", product: product }); 
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving product");
    }
});


router.get("/addtoCart", isLoggedin, async function (req, res) {
    try {
        const user = await userModel.findOne({ email: req.user.email}).populate("cart");

        res.send({ status: "ok", user: user});
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving users");
        
    }
})

router.delete("/removeFromCart/:productid", isLoggedin, async function (req, res) {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const productIdToRemove = req.params.productid;
    user.cart = user.cart.filter((productId) => productId.toString() !== productIdToRemove);

    await user.save();

    res.send({ status: "ok", cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error removing product from cart");
  }
});



router.post("/checkOut", isLoggedin, async function (req, res) {
    try {
        const { firstName, lastName, email, phoneNumber, streetAddress, city, zipcode, cardNumber, securityCode } = req.body;
        const user = await userModel.findOne({ email: req.user.email});

        if(!user) {
            return res.status(404).send("User Not Found");

        }

        user.personalInfo.push({
            firstName,
            lastName,
            email,
            phoneNumber,
            streetAddress,
            city,
            zipcode,
            cardNumber,
            securityCode
        })

        await user.save();

        res.send({ status: "ok", message: "Info Done"});
    } catch (error) {
        console.error(error);
        res.status(500).send("Error storing Customer Data");
    }
})

router.post("/placeOrder", isLoggedin, async function (req, res) {
    try {
        const { productIds, quantities, totalPrice, firstName, lastName, email, 
            phoneNumber, streetAddress, city, zipcode, cardNumber, securityCode } = req.body;

        const user = await userModel.findOne({ email: req.user.email });
        if (!user) {
            return res.status(404).send("User not found");
        }

        user.orders.push({
            products: productIds.map((id, index) => ({
                productId: id,  
                quantity: quantities[index]  
            })),
            totalPrice: totalPrice, 
            orderDate: new Date(),  
            status: "Pending",
            firstName,
            lastName,
            email,
            phoneNumber,
            streetAddress,
            city,
            zipcode,
            cardNumber,
            securityCode
        });
        
        await user.save();  

        res.send({ status: "ok", message: "Order placed successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error placing order");
    }
});

router.get("/orderDetails", isLoggedin, async function (req, res) {
    try {
        const user = await userModel.findOne({ email: req.user.email }).populate({
            path: "orders.products.productId",
            model: "products"
        });

        if (!user) {
            return res.status(404).send("User Not Found");
        }

        const pendingOrders = user.orders.filter(product => product.status === "Pending");
        

        if (pendingOrders.length === 0) {
            return res.status(404).send("No Pending Orders");
        }

        res.send({ status: "ok", orders: pendingOrders });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving user");
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
