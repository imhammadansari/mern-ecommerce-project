"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Categories = () => {
    return (
        <div className='w-full'>
            <div className='items-center px-4 py-4 text-lg lg:text-xl xl:text-xl'>
                <h1 className='text-center mb-10 text-lg md:text-xl lg:text-3xl font-bold'>Best Categories</h1>
                <div>
                    <Swiper
                        slidesPerView={1} 
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <a href='http://localhost:3000/products/Kitchen%20Accessories'>
                                <div className='flex flex-col items-center justify-center'>
                                    <img className='w-[10rem] md:w-[20rem] lg:w-[25rem]' src='./kitchen.jpg' alt='Kitchen Accessories' />
                                    <h1 className='text-base md:text-lg lg:text-xl py-2'>Kitchen Accessories</h1>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='http://localhost:3000/products/Men%20Fashion'>
                                <div className='flex flex-col items-center justify-center'>
                                    <img className='w-[10rem] md:w-[20rem] lg:w-[25rem]' src='./mobile.jpg' alt='Mobile Accessories' />
                                    <h1 className='py-2 text-base md:text-lg lg:text-xl'>Men's Fashion</h1>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='http://localhost:3000/products/Sports%20&%20Outdoors'>
                                <div className='flex flex-col items-center justify-center'>
                                    <img className='w-[10rem] md:w-[20rem] lg:w-[25rem]' src='./sports.jpg' alt='Sports Accessories' />
                                    <h1 className='py-2 text-base md:text-lg lg:text-xl'>Sports Accessories</h1>
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href='http://localhost:3000/products/Household%20Accessories'>
                                <div className='flex flex-col items-center justify-center'>
                                    <img className='w-[10rem] md:w-[20rem] lg:w-[25rem]' src='./grocery.jpg' alt='Grocery' />
                                    <h1 className='py-2 text-base md:text-lg lg:text-xl'>Household Accessories</h1>
                                </div>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Categories;
