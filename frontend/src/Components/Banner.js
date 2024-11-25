"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {


    return (
        <>
            <div className='w-full'>

                <div className='mt-2'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className='' src='./slide01.png' /> </SwiperSlide>
                        <SwiperSlide><img className='' src='./slide02.png' /> </SwiperSlide>

                    </Swiper>

                </div>

            </div>
        </>
    )
}

export default Banner