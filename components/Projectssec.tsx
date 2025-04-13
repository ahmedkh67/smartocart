"use client"

import React from 'react'
import GalleryCell from './GalleryCell'
import {Autoplay , Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';

const Projectssec = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center overflow-hidden bg-amber-400 py-[25px] px-[15%] md:px-[5%] -translate-y-40 ">
                
        
                <Swiper
                modules={[Autoplay, Pagination , Scrollbar]}
                pagination={true}
                slidesPerView={1}
                breakpoints={
                    {
                      800: {
                        slidesPerView: 4
                      }
                    }
                  }
                  
                scrollbar
                loop={true}
                autoplay={{delay: 2500 ,
                    disableOnInteraction: false
                }}
                spaceBetween={100}
                 className='flex justify-center items-center ' >

                    <SwiperSlide><GalleryCell src={'image1'} /></SwiperSlide>
                    <SwiperSlide><GalleryCell src={'image2'} /></SwiperSlide>
                    <SwiperSlide><GalleryCell src={'image3'} /></SwiperSlide>
                    <SwiperSlide><GalleryCell src={'image4'} /></SwiperSlide>
                    <SwiperSlide><GalleryCell src={'image5'} /></SwiperSlide>
                    <SwiperSlide><GalleryCell src={'image6'} /></SwiperSlide>
                    <SwiperSlide><GalleryCell src={'image8'} /></SwiperSlide>
                    <SwiperSlide><GalleryCell src={'image9'} /></SwiperSlide>

                 </Swiper>
        
        
        
        
    </div>
    <div className="flex w-full justify-center items-center bg-amber-400 pb-[50px] -translate-y-40 ">
      <Link href={'/Projectspage'}>
        <button className="flex bg-red-500 h-14 justify-center items-center px-12 rounded-2xl
        transition-[0.3s] hover:bg-red-600 ">
            <h1 className='text-white font-bold text-xl font-sans '>
                جميع الأعمال  
            </h1>
        </button>
        </Link>
    </div>
    </>
  )
}

export default Projectssec