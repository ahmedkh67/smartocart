"use client"

import React from 'react'
import { useState } from 'react'

const Mapsec = () => {

  const [Address , setAddress] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.259503985478!2d39.60037932820259!3d24.47646387901318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbee2739f87f3%3A0xe41454bdfd991dda!2z2KfZhNmF2LPYp9is2K8g2KfZhNiz2KjYudipINin2YTYqtin2LHZitiu2YrYqQ!5e0!3m2!1sar!2ssa!4v1744518029305!5m2!1sar!2ssa") ;

  return (
    <>
    <div className="flex w-full justify-center flex-col items-center pb-12 bg-amber-400 -translate-y-40 ">
      
      <h1 className='md:text-4xl text-4xl text-center font-bold mt-12 bg-amber-400 font-sans text-white'>
        تشرفنا زيارتكم
      </h1>
      
    </div>
    
    <div className="flex-col w-full h-64 bg-amber-400 justify-center items-end ">
      

    <iframe src={Address}
        width="100%" height="100%" className='-translate-y-40 '>
        
    </iframe>
    </div>   
    </>
  )
}

 

export default Mapsec ;