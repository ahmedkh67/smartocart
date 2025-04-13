"use client"

import React from 'react'
import Morebox from './MoreBox';
import { Moreboxes } from '@/Constants';
import { motion } from 'motion/react';




const Moresec = () => {
  return (
    <>
      <h1 className='text-4xl text-center -translate-y-40 mb-10 font-bold font-sans text-white'>
        أهدافنا الاستراتيجية
      </h1>
    <div id='moresec' className="flex w-full flex-col md:flex-row flex-wrap bg-green-300 md:justify-around items-start justify-around md:py-3 py-3 px-6 -translate-y-40">
      
      {Moreboxes.map((item) => (
        <motion.div initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: 0.7}}}
        key={item.MoreBoxtitle}>
        
          <Morebox title={item.MoreBoxtitle} 
          bio={item.MoreBoxbio} srcs={item.MoreBoxsrc} key={item.MoreBoxtitle} />
       </motion.div>
      ))}
    
    </div>  
    </>
    )
}

export default Moresec ;