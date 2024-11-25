import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';

function Shop() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState("");
  const navigate = useNavigate();
  
  axios.defaults.withCredentials = true;
  const addtoCart = async (productId) => {
    try {
      const response = await axios.post(`http://localhost:8080/addtoCart/${productId}`);
      console.log(response);
      setCartProducts(response.data); 
    } catch (error) {
      console.error("Error adding to cart:", error.response ? error.response.data : error.message);
    }
  };
  
  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/shop');
      setProducts(response.data.product);
      console.log(response.data.product);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="flex flex-wrap px-6 py-4 gap-8 w-full">
          {products?.map((item) => {
            const base64Image = Buffer.from(item.image).toString('base64');
            return (
              <div className="flex flex-col items-center w-[18.7rem]" key={item._id}> 
                <img className='w-[215px] h-[240px]' src={`data:image/jpeg;base64,${base64Image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <div className='flex justify-center'>
                  <button onClick={() => addtoCart(item._id)} className='w-28 h-8 bg-black bg-opacity-15'>Add to Cart</button> 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;
