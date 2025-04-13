"use client"

import React from 'react'
import Image from 'next/image'

type NumBoxesTypes = {
    Num: number | string , 
    Dis : string , 
    Src : string
}

function NumBox({Num , Dis , Src}: NumBoxesTypes){
  return (
    <div className="flex flex-col md:flex-row w-60 h-56 p-4 my-4 rounded-2xl bg-green-400 justify-center items-center border-0 border-black border-solid">
      <div className="flex w-full h-full border-2 border-white bg-green-400 border-solid rounded-xl justify-center items-center flex-col">
        
        <div className="flex w-20 h-20 rounded-full  m-2 
         border-solid justify-center items-center ">
          <Image src={Src} alt={'idonr'} width={65} height={35} />
        </div>
        
        <h1 className='text-5xl font-bold text-white'>
        {Num}
        </h1>
        <h1 className='text-3xl text-end font-bold text-white pb-2 font-sans '>
        {Dis}
        </h1>
      </div>
    </div>
  )
}

export default NumBox