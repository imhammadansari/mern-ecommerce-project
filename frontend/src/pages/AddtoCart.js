import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { MdDelete } from "react-icons/md";

function AddtoCart() {
  const [cartProducts, setcartProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const getCartProducts = async () => {
    try {
      const response = await axios.get("https://mern-ecommerce-project.vercel.app//addtoCart");
      const user = response.data.user;

      setcartProducts(user.cart || []); 
      setQuantities(user.cart.map(() => 1)); 
    } catch (error) {
      console.error("Error fetching cart products:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  const increaseQuantity = (index) => {
    setQuantities(prevQuantities =>
      prevQuantities.map((quantity, i) => (i === index ? quantity + 1 : quantity))
    );
  };

  const decreaseQuantity = (index) => {
    setQuantities(prevQuantities =>
      prevQuantities.map((quantity, i) => (i === index && quantity > 1 ? quantity - 1 : quantity))
    );
  };

  const checkOut = () => {
    const totalPrice = cartProducts.reduce((total, item, index) => {
      return total + ((quantities[index] || 0) * item.price);
    }, 0);

    navigate("/checkout", {
      state: {
        cartProducts,
        quantities,
        totalPrice
      }
    });
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`https://mern-ecommerce-project.vercel.app//removeFromCart/${productId}`);
      if (response.status === 200) {
        setcartProducts((prevCart) => prevCart.filter((item) => item._id !== productId));
        setQuantities((prevQuantities, index) => 
          prevQuantities.filter((_, i) => cartProducts[i]._id !== productId));
        console.log("Product removed from cart");
      }
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };
  

  const totalQuantity = (quantities || []).reduce((total, quantity) => total + quantity, 0);
  const totalPrice = (cartProducts || []).reduce((total, item, index) => {
    return total + ((quantities[index] || 0) * item.price);
  }, 0);

  if (loading) {
    return <p>Loading cart...</p>;
  }

  return (
    <div className="w-full">
      <Header />
      {cartProducts.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty</p>
      ) : (
        cartProducts.map((item, index) => {
          const base64Image = Buffer.from(item.image).toString('base64');
          const individualPrice = item.price * quantities[index];

          return (
            <div className="flex flex-col lg:flex-row px-14 py-4 items-center justify-between" key={item._id}>
              <img className="w-48 h-36 mt-8 lg:mt-0 lg:w-52 lg:h-60" src={`data:image/jpeg;base64,${base64Image}`} alt={item.name} />
              <p className="text-sm w-[18rem] mt-3 lg:mt-0 lg:text-lg lg:w-[36rem]">{item.name}</p>
              <div className="flex gap-4 items-center">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <p>{quantities[index]}</p>
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
              <p className="text-lg">{`${individualPrice.toFixed(2)} PKR`}</p>
              <button onClick={() => deleteProduct(item._id)}>
                <MdDelete />
              </button>
            </div>
          );
        })
      )}

      <div className="flex justify-between border-t mt-4">
        <div className="flex flex-col w-1/2">
          <h1 className="mt-4 text-base lg:text-lg font-bold">Total Products:</h1>
          <h1 className="mt-2 text-base lg:text-lg font-bold">Total Quantity:</h1>
          <h1 className="mt-2 text-base lg:text-lg font-bold">Total Price:</h1>
        </div>

        <div className="flex flex-col w-1/2">
          <h1 className="mt-4 text-base lg:text-lg">{cartProducts.length}</h1>
          <h1 className="mt-2 text-base lg:text-lg">{totalQuantity}</h1>
          <h1 className="mt-2 text-base lg:text-lg">{totalPrice.toFixed(2)} PKR</h1>
        </div>
      </div>

      <button className="w-72 lg:w-96 h-8 bg-black text-white my-4" onClick={checkOut}>
        Check Out
      </button>
    </div>
  );
}

export default AddtoCart;
