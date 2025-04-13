"use client"

import { NumBoxes } from '@/Constants'
import React from 'react'
import NumBox from './NumBox'
import { motion } from 'motion/react'

const NumBoxessec = () => {
  return (
    <>
    {/* <div className="flex w-full justify-center items-center bg-black pt-10 -translate-y-40 ">
        <h1 className="text-[50px] text-white " >
            حققنا أكثر من
        </h1>
      </div> */ }
    <div className="flex flex-col md:flex-row w-full md:h-77 
    Distance_Background11 bg-green-300 justify-evenly items-center pb-12 -translate-y-40 pt-10">
      
      {NumBoxes.map((item) => (
        <motion.div initial={{scale: 0 , rotate: 90}} whileInView={{scale: 1, rotate: 0}} key={item.Dis} >
          <NumBox Num={item.Num} Dis={item.Dis} Src={item.Src} key={item.Dis}  />
        </motion.div>
      ))}     
      
    </div>
    </>
    )
}

export default NumBoxessec