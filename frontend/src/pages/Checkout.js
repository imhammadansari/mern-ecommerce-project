import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {

    const location = useLocation();
  const { cartProducts, quantities, totalPrice } = location.state;

  const navigate = useNavigate();

  const totalQuantity = quantities.reduce((total, quantity) => total + quantity, 0);

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [streetAddress, setstreetAddress] = useState("");
    const [city, setcity] = useState("");
    const [zipcode, setzipcode] = useState("");
    const [cardNumber, setcardNumber] = useState("");
    const [securityCode, setsecurityCode] = useState("");

    axios.defaults.withCredentials = true;

    const orderItems = async () => {
        if (!firstName || !lastName || !email || !phoneNumber || !streetAddress || !city || !zipcode || !cardNumber || !securityCode) {
            alert("Please fill out all billing details.");
            return;
          }
        try {
          const productIds = cartProducts.map(item => item._id);
      
          const response = await axios.post("https://mern-ecommerce-project.vercel.app//placeOrder", {
            productIds: productIds,
            quantities: quantities,  
            totalPrice: totalPrice,   
            firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                streetAddress: streetAddress,
                city: city,
                zipcode: zipcode,
                cardNumber: cardNumber,
                securityCode: securityCode
          });
      
          if (response.data.status === "ok") {
            alert("Order placed successfully!");
            navigate("/orderdetails");
          } else {
            alert("Failed to place order");
          }
        } catch (error) {
          console.error(error);
          alert("Error placing order");
        }

      };




  return (
    <>
    <div className="w-full">
        <div className="px-4 md:px-8 lg:px-12 py-4 flex flex-col md:flex-row">
          <form className="w-full flex flex-col md:flex-row">

            <div className="w-full lg:w-[50rem] ">
              <h1 className="font-bold text-center text-xl">Billing Details</h1>
              <div className="py-4 flex flex-col gap-2 items-center">
                <div className="flex gap-2 ">
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[9.5rem] sm:w-[15rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={(e) => {setfirstName(e.target.value)}}
                  />
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[9.5rem] sm:w-[15rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={(e) => {setlastName(e.target.value)}}
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[9.5rem] sm:w-[15rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => {setemail(e.target.value)}}
                  />
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[9.5rem] sm:w-[15rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    onChange={(e) => {setphoneNumber(e.target.value)}}
                  />
                </div>
                <input
                  className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[19.5rem] sm:w-[30.5rem] md:w-[27.5rem] lg:w-[42.5rem]"
                  required
                  type="text"
                  placeholder="Street Address"
                  name="streetAddress"
                  onChange={(e) => {setstreetAddress(e.target.value)}}
                />

                <div className="flex gap-2">
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[15rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={(e) => {setcity(e.target.value)}}
                  />
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[15rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="number"
                    placeholder="Zip Code"
                    name="zipcode"
                    onChange={(e) => {setzipcode(e.target.value)}}
                  />
                </div>

                <input
                  className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[22.35rem] sm:w-[30.5rem] md:w-[27.5rem] lg:w-[42.5rem] mt-4"
                  required
                  type="number"
                  placeholder="Card Number"
                  name="cardNumber"
                  onChange={(e) => {setcardNumber(e.target.value)}}
                />

                <div className="flex gap-2">
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[15rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="text"
                    placeholder="Expiration (MM/YYYY)"
                    name="expiration"
                  />
                  <input
                    className="bg-white border border-1 border-solid border-black border-opacity-30 p-1 text-sm md:text-base w-[11rem] sm:w-[15rem] md:w-[13.5rem] lg:w-[21rem]"
                    required
                    type="number"
                    placeholder="Security Code"
                    name="securityCode"
                    onChange={(e) => {setsecurityCode(e.target.value)}}
                  />
                </div>
              </div>
            </div>


            <div className="w-full sm:w-[30rem] md:2/6 lg:w-[30rem] flex flex-col md:border-l border-black">

  <h1 className="font-bold text-xl mt-4 md:mt-0 px-4 md:px-8">Total Payment</h1>

  <div className="flex flex-col px-12 md:px-8 py-8 gap-2">
    <div className="flex justify-between">
      <h1>Sub Total</h1>
      <p>{totalPrice} PKR</p>
    </div>

    <div className="flex justify-between">
      <h1>Total Products</h1>
      <p>{cartProducts.length}</p>
    </div>

    <div className="flex justify-between">
      <h1>Total Quantity</h1>
      <p>{totalQuantity}</p>
    </div>
  </div>

  <div className="flex items-center px-4 md:px-8 py-10">
    <button
      onClick={(e) => {
        e.preventDefault(); 
        orderItems();
      }}
      type="submit"
      className="w-full h-9 bg-black text-white"
    >
      Place Order
    </button>
  


              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Checkout
