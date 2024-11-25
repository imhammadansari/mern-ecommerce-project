import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CategoryProducts = (product) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState("");
  const navigate = useNavigate();
  
  axios.defaults.withCredentials = true;

  const addtoCart = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:8080/addtoCart/${productId}`);
      console.log("Product added to cart:", response);
      setCartProducts(response.data);
      
      
    } catch (error) {
      console.error("Error adding to cart:", error.response ? error.response.data : error.message);
      if(error.response.data === "You need to login first")
        alert("You need to login first");
    }

    
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/products/category/${category}`);
      setProducts(response.data);

    } catch (error) {
      console.error("Error fetching products:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  

  return (
    <>
      <Header />
      <h1>{category}</h1>
      <div className="w-full">
        <div className="flex flex-wrap px-6 py-4 gap-8 w-full">
          {products?.map((item) => {
            const base64Image = Buffer.from(item.image).toString('base64');
            return (
              <div className="flex flex-col items-center w-[18.7rem]" key={item._id}>
                <img className="w-64 h-52 mt-4" src={`data:image/jpeg;base64,${base64Image}`} alt={item.name} />
                <Link to={`/items/${item._id}`}>
                <p className='mt-4'>{item.name}</p>
                
                </Link>
                
                <p className='mt-2'>{item.price}</p>
                <div className="flex justify-center mt-2">
                  <button onClick={() => addtoCart(item._id)} className="w-28 h-8 bg-black text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryProducts;
