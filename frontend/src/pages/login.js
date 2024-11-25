import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const notify = () => {
    toast.error("Email or Password Incorrect", {
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
  

  axios.defaults.withCredentials = true;
  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://mern-ecommerce-project.vercel.app/users/login", {
        email: email,
        password: password
      });
      console.log(response.data);
      if(response.data === "You can log in"){
        navigate("/home")
      }
      else if(response.data === "Email or Password Incorrect"){
        notify();
      }
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[18rem] md:w-[22rem] lg:w-[25rem] h-[18rem] shadow-2xl'>
        <h1 className='font-bold text-xl'>Login</h1>
        <form className='flex flex-col items-center mt-8' onSubmit={submit}>
          <input
            className='bg-black bg-opacity-5 p-1 w-[15rem] md:w-[19rem] lg:w-[21rem]'
            type='email' 
            required
            placeholder='Enter Email'
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            className='bg-black bg-opacity-5 p-1 w-[15rem] md:w-[19rem] lg:w-[21rem] mt-3'
            type='password'
            required
            placeholder='Enter Password'
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className='w-20 h-9 bg-black bg-opacity-5 mt-4' type='submit'>
            Login
          </button>
          <p className=' text-sm md:text-base mt-6'>
            Don't have an account?{" "}
            <Link to='/signup'>
              <span className='text-blue-800'>Create Account</span>
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer/>
    </div>
    
  );
}

export default Login;
