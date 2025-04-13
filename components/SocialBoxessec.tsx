import { SocialBoxes } from '@/Constants'
import React from 'react'
import SocialBox from './SocialBox'
const SocialBoxessec = () => {
  return (
    <>
    <div className="flex w-full justify-center items-center bg-amber-400 pt-10 -translate-y-40 pb-10">
        <h1 className="text-[50px] text-white font-sans font-bold" >
            حساباتنا    
        </h1>
    </div>
    <div className="flex flex-col md:flex-row w-full md:h-77 
    Distance_Background11 bg-amber-500 justify-evenly items-center pb-6 -translate-y-40 pt-6 ">
      {SocialBoxes.map((item) => (
        <SocialBox title={item.title} Src={item.Src} link={item.link} key={item.title}  />
      ))}     
    </div>
    <div className="flex w-full flex-col justify-center justify-start md:items-end bg-amber-500 pb-10 md:px-48 px-10 -translate-y-40 ">
        <h1 className="text-xl text-center md:text-3xl text-white my-2 opacity-80" >
            رقم التواصل - 
                 
        </h1>
        <h1 className="text-xl text-center md:text-3xl text-white opacity-80" >
        +966 54 336 7208
        </h1>
        
    </div>
    </>
    )
}

export default SocialBoxessec