import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {
  return (
    <>
    <div className='w-full bg-black bg-opacity-15 mt-20'>
        <div className='hidden md:px-12 md:py-10 md:grid grid-cols-2 md:grid-cols-3'>

            <div className='flex flex-col '>
                <h1 className='font-bold text-base md:text-lg lg:text-xl'>About Us</h1>
                <p className='text-xs md:text-sm lg:text-base'>Welcome, your one-stop destination for quality products at unbeatable prices. We are dedicated to offering 
                    a seamless online shopping experience with a wide range of products, from the latest trends to everyday essentials. Our mission 
                    is to provide excellent customer service, fast shipping, and a secure platform that you can trust. Shop with confidence, and let
                     us bring the best deals right to your doorstep!</p>
            </div>

            <div className='hidden md:flex flex-col items-start mx-auto'>

    <h1 className='font-bold text-base md:text-lg lg:text-xl text-center'>Contact Us</h1>

    <div className='flex py-4 text-xs md:text-sm lg:text-base items-center'>
        <FaPhoneAlt />
        <p className='px-4'>111 222 333 44</p>
    </div>

    <div className='flex py-2 text-xs md:text-sm lg:text-base items-center'>
        <MdEmail />
        <p className='px-4'>abcd@gmail.com</p>
    </div>

    <div className='flex py-2 text-xs md:text-sm lg:text-base items-center'>
        <FaLocationDot />
        <p className='px-4'>Gulshan Iqbal, Karachi</p>
    </div>
    
</div>


        <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-base md:text-lg lg:text-xl'>Send Us a Message</h1>
                    <form className='py-4 flex flex-col items-center'>
                        <input type='text' className='md:w-[15rem] lg:w-[26rem] text-sm md:text-base lg:text-base p-1 rounded' placeholder='Your Name'/>
                        <input type='text' className='md:w-[15rem] lg:w-[26rem] text-sm md:text-base lg:text-base p-1 rounded mt-2' placeholder='Your Email'/>
                        <textarea className='md:w-[15rem] lg:w-[26rem] mt-2 p-1 text-sm md:text-base lg:text-base'rows={3} placeholder='Your Message'></textarea>

                        <button className='w-20 h-9 bg-white text-black mt-4'>Send</button>
                    </form>
                </div>

        </div>

        <div className='px-4 py-6 flex md:hidden'>

        <div className='flex flex-col w-[30rem]'>
                <h1 className='font-bold text-sm'>About Us</h1>
                <p className='text-xs pt-1'>Welcome, your one-stop destination for quality products at unbeatable prices. We are dedicated to offering 
                    a seamless online shopping experience with a wide range of products, from the latest trends to everyday essentials.</p>
            </div>

            <div className='flex flex-col w-[20rem] items-end'>
                    <h1 className='font-bold text-sm'>Send Us a Message</h1>
                    <form>
                        <div className='py-2 flex flex-col items-end'>
                        <input type='text' className='w-[7.5rem] text-xs p-1 rounded' placeholder='Your Name'/>
                        <input type='text' className='w-[7.5rem] text-xs p-1 rounded mt-2' placeholder='Your Email'/>
                        <textarea className='w-[7.5rem] mt-2 p-1 text-xs'rows={2} placeholder='Your Message'></textarea>
                        </div>
                        
                        <div className='mt-2 flex justify-center items-center'>
                        <button className='w-12 h-7 bg-white text-xs text-black'>Send</button>
                        </div>

                    </form>
                </div>



        </div>

        <p className='text-center text-xs md:text-sm lg:text-base'>©Copyright-2024 - Created by Hammad Ansari</p>

    </div>
    </>
  )
}

export default Footer