import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Buffer } from 'buffer';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer'


const ProductDetails = () => {
    const { productid } = useParams();
    const [cartProducts, setcartProducts] = useState("");
    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: { data: null },
        category: '',
    });

    const getProduct = async () => {
        try {
            const response = await axios.get(`https://mern-ecommerce-project.vercel.app/items/${productid}`);
            setProduct(response.data.product);
            console.log(response.data.product);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const addtoCart = async (productId) => {
        try {
          const response = await axios.post(`https://mern-ecommerce-project.vercel.app/addtoCart/${productId}`);
          console.log("Product added to cart:", response);
          setcartProducts(response.data);
          
          
        } catch (error) {
          console.error("Error adding to cart:", error.response ? error.response.data : error.message);
          if(error.response.data === "You need to login first")
            alert("You need to login first");
        }
    
        
      };

    useEffect(() => {
        getProduct();
    }, [productid]);

    const base64Image =
        product.image?.data && product.image.data.length
            ? `data:image/jpeg;base64,${Buffer.from(product.image.data).toString('base64')}`
            : null;

    return (
        <>
        <Header />
        <div className="px-4 lg:px-12 py-4 md:py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            
            <div className="flex items-center justify-center">
                {base64Image ? (
                    <div className="flex flex-col md:flex-row">
                        <div className="hidden md:flex w-1/3 flex-col items-center">
                            <img src={base64Image} alt={product.name} />
                        </div>
                        <div className="hidden md:flex w-2/3 items-center">
                            <img
                                className="border border-1 border-solid border-black border-opacity-10"
                                src={base64Image}
                                alt={product.name}
                            />
                        </div>
                        <div className="w-full flex justify-center md:hidden">
                            <img
                                className="w-[16rem] border border-1 border-solid border-black border-opacity-10"
                                src={base64Image}
                                alt={product.name}
                            />
                        </div>
                    </div>
                ) : (
                    <p>No images available</p>
                )}
            </div>

            <div>
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-base md:text-xl font-bold text-start">{product.name}</p>
                    <p className="text-lg md:text-xl text-red-600 mt-2">${product.price}</p>
                    <p className="text-sm md:text-base text-gray-500">{product.category}</p>
                    <br />
                    <div className="flex justify-center mt-2">
                  <button onClick={() => addtoCart(product._id)} className="w-28 h-8 bg-black text-white">
                    Add to Cart
                  </button>
                </div>
                </div>
            </div>
        </div>
        <Footer />
        
        </>
    );
};


export default ProductDetails;
