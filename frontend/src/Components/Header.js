"use client";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users/check-login");
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    checkAuthStatus();
  }, []);


  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8080/users/logout");
      setIsLoggedIn(false);
      navigate("/login"); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleCategorySelect = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center pl-4 md:pl-12 py-4 text-lg lg:text-xl xl:text-xl">

        <h1 className="hidden md:block md:text-xl lg:text-2xl xl:text-2xl text-black mt-1 lg:mt-2 xl:mt-2">
          <Link to="/">Logo.</Link>
        </h1>


        <div className="lg:w-full lg:flex lg:justify-end lg:items-center xl:w-full xl:flex xl:justify-end xl:items-center w-full">
          <ul className="flex justify-center md:justify-center lg:justify-end items-center text-black gap-1 lg:gap-8 xl:gap-8 text-xs md:text-sm lg:text-lg xl:text-lg w-full">
            <li className="hover:bg-black hover:bg-opacity-10 rounded w-10 md:w-16 xl:w-16 h-7 lg:h-9 xl:h-9 flex items-center justify-center">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:bg-black hover:bg-opacity-10 rounded w-20 md:w-20 lg:w-20 xl:w-20 h-7 lg:h-9 xl:h-9 flex items-center justify-center">
              <select
                onChange={(e) => handleCategorySelect(e.target.value)}
                className="bg-none w-20 lg:w-24 xl:w-24 h-7 lg:h-9 xl:h-9"
              >
                <option value="all">Category</option>
                <option value="Kitchen Accessories">Kitchen Accessories</option>
                <option value="Men Fashion">Men's Fashion</option>
                <option value="Men Jeans">Men's Jeans</option>
                <option value="Men Shoes">Men's Shoes</option>
                <option value="Men Watches">Men's Watches</option>
                <option value="Electronics">Electronics</option>
                <option value="Women Fashion">Women's Fashion</option>
                <option value="Women Shoes">Women's Shoes</option>
                <option value="Household Accessories">
                  Household Accessories
                </option>
                <option value="Sports & Outdoors">Sports & Outdoors</option>
              </select>
            </li>

            <li className="hover:bg-black hover:bg-opacity-10 rounded w-28 md:w-40 xl:w-40 flex h-7 lg:h-9 xl:h-9 items-center justify-center">
              <Link to="/returnpolicy">Return & Support</Link>
            </li>

            {isLoggedIn ? (
              <li
                className="hover:bg-black hover:bg-opacity-10 rounded w-10 md:w-16 xl:w-16 flex h-7 lg:h-9 xl:h-9 items-center justify-center cursor-pointer"
                onClick={handleLogout}
              >
                Log out
              </li>
            ) : (
              <li className="hover:bg-black hover:bg-opacity-10 rounded w-10 md:w-16 xl:w-16 flex h-7 lg:h-9 xl:h-9 items-center justify-center">
                <Link to="/login">Log in</Link>
              </li>
            )}

            <li className="px-4">
              <Link to="/cart">
                <div className="flex">
                  <button>
                    <FaShoppingCart />
                  </button>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
