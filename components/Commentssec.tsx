"use client"

import React from 'react'
import { CommentBox } from '.'

import {Autoplay , Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Commentsecc } from '@/Constants';


const Commentssec = () => {
  return (
    <>
      <div className="flex w-full justify-end flex-col items-end bg-red-400 md:px-[10%] px-[5%] -translate-y-40 ">
      
          <h1 className='md:text-4xl text-4xl text-end font-bold mt-12 text-white font-sans pb-1 '>
              ماذا قال عملاؤنا ؟
          </h1>
          
      </div>
    <div className="flex w-full py-20 justify-center items-center Comments_Backgroundd bg-red-400  md:px-[10%] px-[10%] -translate-y-40 ">
        

        <Swiper
        modules={[Autoplay, Pagination , Scrollbar]}
        pagination={false}
        slidesPerView={1}
        breakpoints={
            {
              800: {
                slidesPerView: 3
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

          {Commentsecc.map((item) => (
            <SwiperSlide className='flex justify-center items-center' key={item.name} >
            <CommentBox name={item.name} comment={item.comment}
             src={item.src} rate={item.rate}  />
            </SwiperSlide>
          ))}
            

            


        </Swiper>

        
        
    </div>
    {/*          writebutton vvvv 
    <div className="flex w-30 h-30 bg-black rounded-lg justify-center items-center">
          <Image src={WriteIcon} alt={'writeicon'} width={30} height={30} />
        </div>
    */}
    
    </>
  )
}

export default Commentssec