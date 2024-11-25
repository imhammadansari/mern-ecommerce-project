import axios from 'axios'
import React, { useState } from 'react'

function Products() {

  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [discount, setdiscount] = useState("");
  const [category, setcategory] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("category", category);

    console.log(image, name, price, discount, category);

    try {
      const response = await axios.post("https://mern-ecommerce-project.vercel.app//products/addproducts", 
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 201) {
        alert("Product Added Successfully");
      }

      setimage("");
        setname("");
        setprice("");
        setdiscount("");
        setcategory("");

    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <>
      <div className='w-full'>
        <div className='flex flex-col items-start px-10 py-4'>
          <h1 className='font-bold text-xl'>Add Products</h1>
          <form className='mt-6 flex flex-col gap-3' onSubmit={submit}>

            <input className='text-xs' type='file' name='image' onChange={(e) => {
              setimage(e.target.files[0]);
            }} />
            <input className='w-96 p-1 bg-black bg-opacity-10' type='text' placeholder='Enter Title' name='title' onChange={(e) => {
              setname(e.target.value);
            }} />
            <input className='w-96 p-1 bg-black bg-opacity-10' type='number' placeholder='Enter Price' name='price' onChange={(e) => {
              setprice(e.target.value);
            }} />
            <input className='w-96 p-1 bg-black bg-opacity-10' type='number' placeholder='Enter Discount' name='discount' onChange={(e) => {
              setdiscount(e.target.value);
            }} />

            <select className='bg-black bg-opacity-10 p-1' onChange={(e) => {
              setcategory(e.target.value);
            }}>
              <option>Category</option>
              <option>Kitchen Accessories</option>
              <option>Men Fashion</option>
              <option>Men Jeans</option>
              <option>Men Shoes</option>
              <option>Men Watches</option>
              <option>Electronics</option>
              <option>Women Fashion</option>
              <option>Women Shoes</option>
              <option>Household Accessories</option>
              <option>Sports & Outdoors</option>
            </select>

            <button type='submit' className='w-32 h-9 mt-5 bg-black bg-opacity-10'>Add Product</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Products;
