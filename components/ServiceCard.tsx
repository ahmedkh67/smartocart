"use client"

import React from 'react'



type ServiceCardTypes = {
    title : string , 
    bio : string , 
    src: string
}

function ServiceCard ({title , bio , src}: ServiceCardTypes ){
  return (
    <>
        <div className="flex w-[21rem] bg-amber-400 flex-col justify-center items-center rounded-2xl px-3 py-4 my-6 ">
            <div className={`flex mt-2 ${src} :*`}>

            </div>
            <h1 className="flex md:py-4 pt-4 text-2xl font-bold justify-center items-center text-center text-white font-sans">
                {title}
            </h1>
            <p className="flex text-lg py-2 text-center text-white opacity-80 font-sans ">
                {bio}
            </p>
        </div>

            {/* 
            <Link href={link} className='z-10' >
                <button className="flex mt-2 bg-black h-14 justify-center items-center px-20 rounded-md
                    transition-[0.3s] hover:bg-blue-500 border-0 border-white border-solid z-10">
                        <h1 className='text-white font-bold text-xl'>
                            معرفة المزيد                    
                        </h1>
                </button>           
            </Link>
                    */ }
       
    
    </>
  )
}

export default ServiceCard