import React from 'react'
import Header from './Header'


const Return = () => {
  return (
    <>
    <Header />
    <div className='w-full'>
    <div className='md:flex px-4 md:px-12 py-4 md:py-16'>

<div className='flex flex-col justify-center w-full md:w-3/5'>


        <h1 className='font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl'>Return Policy</h1>
        <div className='flex items-center justify-center my-4 w-full md:hidden'>
        <img className='w-[8rem] md:hidden' src='return.png' />
    </div>
        <p className='text-xs sm:text-sm md:text-base py-2 md:py-4'>At our Store, customer satisfaction is our top priority. If 
            you're not completely happy with your purchase, we're here to help!</p>

        <p className='text-start text-xs sm:text-sm md:text-base py-2 md:py-4 font-bold'>Eligibility for Returns:</p>
            <ul className='text-start list-disc pl-5 text-xs md:text-sm lg:text-base'>
                <li>You have 30 days from the date of purchase to return an item.</li>
                <li>Items must be in their original condition (unused, unwashed, and with all tags/labels attached).</li>
                <li>Certain items like personalized or intimate products (e.g., undergarments) cannot be returned for hygiene reasons.</li>
            </ul>
        
        <p className='text-start text-xs sm:text-sm md:text-base py-2 md:py-4 font-bold'>How to Make a Return:</p>
            <ul className='text-start list-disc pl-5 text-xs md:text-sm lg:text-base'>
                <li><span className='font-bold'>Contact Us:</span> Email our customer support at [email address] with your order number and the reason for return.</li>
                <li><span className='font-bold'>Ship the Item:</span> After approval, send the item back to us at [return address].</li>
                <li><span className='font-bold'>Refund or Exchange:</span> Once we receive the item, we will inspect it and notify you. If approved, we’ll process your refund or send you an exchange.
                </li>
            </ul>
        
        <p className='text-start text-xs sm:text-sm md:text-base py-2 md:py-4 font-bold'>Returns:</p>
            <ul className='text-start list-disc pl-5 text-xs md:text-sm lg:text-base'>
                <li>Refunds will be issued to your original payment method within 5-10 business day</li>
                <li>Shipping costs are non-refundable, unless the return is due to an error on our part (e.g., wrong or defective item).</li>
                
            </ul>
        
        <p className='text-start text-xs sm:text-sm md:text-base py-2 md:py-4 font-bold'>Non-Returnable Items:
</p>
            <ul className='text-start list-disc pl-5 text-xs md:text-sm lg:text-base'>
                <li>Sale items</li>
                <li>Gift Cards</li>
                <li>Personalized items</li>
                
            </ul>

            <div className='my-2 md:mt-6'>
            <h1 className='text-start font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl pb-2'>Our Support</h1>


<p className='text-start text-xs md:text-sm lg:text-base'>We're here to help! If you have any questions, concerns, or need assistance with your order, feel free to reach out to our friendly
     support team. You can contact us via email at abcd@gmail.com or by phone at [111 222 333 444]. Our team is available 
     [9AM to 5PM], and we're committed to providing prompt and helpful service!</p>
            </div>
          
    </div>

    <div className='flex md:flex-col md:justify-between md:items-center w-full md:w-2/5'>
    <div className='flex justify-center md:justify-start'>
        <img className='hidden md:block md:w-[15rem] lg:w-[20rem]' src='return.png' />
    </div>
    
    <div className='flex w-full justify-center items-center md:mt-4'>
        <img className='w-[8rem] md:w-[15rem] lg:w-[20rem]' src='help-desk.png' />
    </div>
</div>



</div>
    </div>
    
    </>
  )
}

export default Return