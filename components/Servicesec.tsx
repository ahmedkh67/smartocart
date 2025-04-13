"use client"

import React from 'react'
import ServiceCard from './ServiceCard'
import { ServicesCards } from '@/Constants'
import { motion } from 'motion/react'

const Servicesec = () => {
  return (
  <>
  <h1 className='-translate-y-40 text-4xl font-bold font-sans text-center text-white bg-fuchsia-700 pt-20 pb-3'>
      خدماتنا و منتجاتتنا
    </h1>
    <div className="flex md:flex-row flex-col w-full justify-evenly md:items-start items-center overflow-hidden bg-fuchsia-700 flex-wrap -translate-y-40 pb-30">
    
    {ServicesCards.map((item) => (
          <motion.div initial={{opacity: 0, scale: 0}} whileInView={{opacity:1 , scale: 1}} key={item.title}>

      <ServiceCard title={item.title} bio={item.bio} link={item.link} key={item.title} src={item.src} />
      </motion.div>
    ))}
      
    </div>
    
    </>
    )
}

export default Servicesec