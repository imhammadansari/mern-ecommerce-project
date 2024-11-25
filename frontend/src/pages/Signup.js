import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [password, setpassword] = useState("");

  const notify = () => {
    toast.warn('You already have an account, Please Login', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const notify2 = () => {
    toast.warn('User Created Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://mern-ecommerce-project.vercel.app/users/register", {
        fullname: fullname,
        email: email,
        password: password
      });
      console.log(response.data);

      if(response.data ==="You already have an account, Please Login"){
        notify();
      }
      else if(response.data === "User created Successfully"){
        notify2();
      }
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <>
    <div className='w-full flex justify-center items-center'>

      <div className='w-[18rem] md:w-[22rem] lg:w-[25rem] h-[20rem] shadow-2xl'>
        <h1 className='font-bold text-xl'>Sign Up</h1>

        <form className='flex flex-col items-center mt-8'>
          <input className='bg-black bg-opacity-5 p-1 w-[15rem] md:w-[19rem] lg:w-[21rem]' type='text' required placeholder='Enter Name' onChange={(e) => {
            setfullname(e.target.value)
          }} name='fullname'/>
          <input className='bg-black bg-opacity-5 p-1 w-[15rem] md:w-[19rem] lg:w-[21rem] mt-3' type='text' required placeholder='Enter Email' onChange={(e) => {
            setemail(e.target.value)
          }} name='email'/>
          <input className='bg-black bg-opacity-5 p-1 w-[15rem] md:w-[19rem] lg:w-[21rem] mt-3' type='password' required placeholder='Enter Password' onChange={(e) => {
            setpassword(e.target.value)
          }} name='password'/>
          <button onClick={submit} className='w-20 h-9 bg-black bg-opacity-5 mt-4' type='submit'>Sign Up</button>
          <p className='text-sm md:text-base mt-6'>Already have an account? <Link to='/login'><span className='text-blue-800'>Login</span></Link></p>
        </form>

      </div>
      <ToastContainer/>
    </div>
    </>
  )
}

export default Signup
