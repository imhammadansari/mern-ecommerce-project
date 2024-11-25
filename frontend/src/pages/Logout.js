import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Logout() {
    const [user, setuser] = useState("");

    

    useEffect(() => {
      axios.defaults.withCredentials = true;
      const logout = async () => {
          try {
              const response = await axios.get("https://mern-ecommerce-project.vercel.app//users/logout");
              setuser(response.data);
              console.log(response.data);
          } catch (error) {
              console.error("Logout error:", error.response.data);
          }
      };
  
      logout();
  }, []);
  
  return (
    <div>Logout</div>
  )
}

export default Logout
