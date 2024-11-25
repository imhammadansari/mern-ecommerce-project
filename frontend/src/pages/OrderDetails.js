import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Buffer } from 'buffer';

function OrderDetails() {
  const [orderItems, setOrderItems] = useState([]);

  axios.defaults.withCredentials = true;

  const getOrderItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/orderDetails');
      
      console.log(response.data);
        setOrderItems(response.data.orders);
    } catch (error) {
      console.log('Error fetching order details:', error);
    }
  };

  useEffect(() => {
    getOrderItems();
  }, []);

  return (
    <div className='w-full'>
      
      {orderItems?.map((order, index) => (
        <div key={index} className='px-14 py-4 text-start'>
          <h2 className='text-base sm:text-base md:text-xl font-bold mb-4 text-center'>
            Order #{order._id} - Date: {new Date(order.orderDate).toLocaleDateString()}
          </h2>
          <p className='mb-2'><span className='font-bold'>Name:</span> {order.firstName} {order.lastName}</p>
          <p className='mb-2'><span className='font-bold'>Email:</span> {order.email}</p>
          <p className='mb-2'><span className='font-bold'>Phone Number:</span> {order.phoneNumber}</p>
          <p className='mb-2'><span className='font-bold'>Your Address</span> {order.streetAddress}</p>
          <p className='mb-2'><span className='font-bold'>City:</span> {order.city}</p>
          <p className='mb-2'><span className='font-bold'>Order Status:</span> {order.status}</p>
          


          <h1 className='font-bold text-2xl text-center mt-6 mb-4'>Ordered Items</h1>
          {order.products?.map((product, prodIndex) => {
            const base64Image = Buffer.from(product.productId.image).toString('base64');
            return (
              <div key={prodIndex} className='flex flex-col md:flex-row items-center justify-between mb-4'>
                
                <img className='w-40 h-36 mt-6 sm:mt-0' src={`data:image/jpeg;base64,${base64Image}`} alt={product.name} />
                <p className='text-lg'>{product.name}</p>
                <p className='text-lg'>Price: ${product.productId.price}</p>
                <p className='text-lg'>Quantity: {product.quantity}</p>
              </div>
            );
          })}

          <p className='text-2xl font-bold mt-4 text-center'>Total Price: ${order.totalPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderDetails;
