import React from 'react'

const DiscountBanner = () => {
  return (
    <>
    <div className='w-full'>
        <div className='flex px-4 md:px-12 py-4 md:py-16'>

        <div className='flex flex-col justify-center w-3/5 lg:w-1/2'>
                <h1 className='font-bold text-xl sm:text-2xl md:text-2xl lg:text-4xl'>Discount Offer</h1>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg py-2 md:py-4'>Unlock incredible savings with our exclusive discounts! Our special offers
                   ensure you get the best deals. Don't miss out on limited-time discounts across a wide range of products, 
                    designed to make your shopping experience even morerewarding. Save more while enjoying the quality you love—shop now.</p>
                  
            </div>

            <div className='flex items-center justify-end w-2/5 lg:w-1/2'>
                <img className='lg:w-[25rem]' src='bannerpng1.jpg' />
            </div>

        </div>
    </div>
    </>
  )
}

export default DiscountBanner