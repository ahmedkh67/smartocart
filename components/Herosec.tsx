"use client"

import React from 'react'
import {Autoplay ,Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';
import { motion } from 'motion/react';

type Heroslidestype = {
  slide1: string , 
  slide2: string, 
  slide3: string, 
  slide4: string , 
  slide5: string, 
  slide6: string, 
  slide7: string , 
  slide8: string, 
  slide9: string, 
  bgcolor: string , 
  title: string, bio: string
}

function Herosec({slide1 , slide2, slide3,slide4, slide5, slide6, slide7, slide8, slide9, bgcolor, title , bio}: Heroslidestype){

  return (
    
    <div className={`flex flex-col md:pt-[0px] pt-[100px] justify-between items-center ${bgcolor} bg-green-400 rounded-md :* `}>
     {/* <div className="flex w-[90%] md:w-1/3 h-[410px] border-black border-8 border-double absolute md:translate-x-64 translate-x-4 translate-y-8 md:translate-y-8 md:mr-0 mr-5">

      </div> */}
     <div className="flex justify-center items-center w-full bg-red-500 md:m-10 h-[550px] md:mr-0mr-5" >
        

                  <motion.div initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: 0.7}}} className='flex w-[90%] h-[90%]  justify-center items-center ' >
                  <Swiper
                  modules={[Autoplay, Pagination , Scrollbar, Navigation]}
                  pagination={false}
                  navigation={false}
                  slidesPerView={1}
                  scrollbar
                  loop={true}
                  autoplay={{delay: 2500 ,
                      disableOnInteraction: false
                  }}
                  spaceBetween={100}
                   className='flex w-full h-full  md:mr-0mr-5  ' >
                    <SwiperSlide className='flex justify-center items-center' >
                      <div className={`flex w-full h-full Img1 ${slide1} :*`}>

                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center' >
                      <div className={`flex w-full h-full Img2 ${slide2} :*`}>

                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center' >
                      <div className={`flex w-full h-full Img3 ${slide3} :*`}>

                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center' >
                      <div className={`flex w-full h-full Img1 ${slide4} :*`}>

                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center' >
                      <div className={`flex w-full h-full Img2 ${slide5} :*`}>

                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center' >
                      <div className={`flex w-full h-full Img3 ${slide6} :*`}>

                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center' >
                      <div className={`flex w-full h-full Img1 ${slide7} :*`}>

                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center' >
                      <div className={`flex w-full h-full Img2 ${slide8} :*`}>

                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center items-center' >
                      <div className={`flex w-full h-full Img3 ${slide9} :*`}>

                      </div>
                    </SwiperSlide>
                    

                   </Swiper>
                   </motion.div>

        
      </div> 
     <div className=" flex flex-col justify-center items-end w-[90%] bg-blackk md:m-10 md:pr-[5%] px-[5%] pb-10 rounded-ss-xl[120px] rounded-4xl -translate-y-50 bg-amber-400 z-30">
       <h1 className='md:text-7xl text-5xl text-end font-bold my-10 text-whitee text-white fadeanimate font-sans'>
          {title}     
        </h1>



       <motion.div initial={{opacity: 0 , translateY: 10}} whileInView={{opacity: 1, translateY: 0}} >
        <h1 className='md:text-4xl text-2xl text-end text-whitee text-white font-sans transition-[0.3s]'>
          {bio}     
        </h1>
       </motion.div>


       <Link href={'https://wa.me/+966543367208'} >
       <button className="flex bg-red-500 h-14 justify-center items-center px-12 mt-12 rounded-md
        transition-[0.3s] hover:bg-red-600 ">
          <h1 className='text-white font-bold text-lg'>

          طلب خدمة
          </h1>
        </button>
        </Link>
      </div> 
    </div>  
    )
}



export default Herosec ;