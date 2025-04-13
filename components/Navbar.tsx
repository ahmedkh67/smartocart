"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Navlist } from '@/Constants'
import MenuIcon from '@/public/Menu 2 Icon.svg'
import Image from 'next/image'
import Logo from '@/public/Logo.jpg'
import CloseIcon from '@/public/Closeicon.svg'

const Navbar = () => {
  const [open , setopen] = useState(false) ;

  return (
    <>
    <div className="flex flex-row-reverse bg-fuchsia-500 w-full h-[100px]  pl-8 fixed justify-between items-center transition-[0.4s] z-40 md:h-[80px] md:px-8 ">
    
     <div className="LogoContainer w-[160px] h-[98%] overflow-hidden flex justify-center items-center z-40">
     <Link href={'././'} className='w-full h-full' />
     </div>
    

     <ul className='NavlistContainer w-1/2 hidden flex-row-reverse justify-between items-center text-white md:flex'>
      {Navlist.map((item) => (
        <Link href={item.link} key={item.title} className='text-white '>
          <h1 className='Navlist-li font-bold transition-[0.3] text-lg text-white font-sans ' >
            {item.title}
          </h1>        
        </Link>
      ))}
     </ul>

     <button className=" md:flex hidden bg-red-400 h-14 justify-center items-center px-12 rounded-md
     transition-[0.3s] hover:bg-red-500 ">
        <h1 className='text-white font-bold text-xl'>
        طلب خدمة الأن
        </h1>
     </button>
      
      <Image src={MenuIcon} alt='Menu list icon ' width={50} height={50} className='md:hidden flex'
      onClick={() => {setopen(!open)}}
        />
      

    </div>
    
    <div className={`flex w-full bg-fuchsia-500 h-full top-0 right-0 fixed z-50 
      px-6 flex-col justify-start  pt-6 ${open? 'Menuinactive' : 'Menuactive'} *:`}>
        <div className="flex w-full justify-between items-center ">
          <Image src={CloseIcon} alt={"logo img"} width={140} height={50} />
          <Image src={CloseIcon} alt={"close icon"} width={25} height={25} onClick={() => {setopen(!open)}}  />
        </div>
        <div className="flex flex-col justify-start items-end">
          <Link href={'././'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex w-full py-4 justify-end ">
              <h1 className='text-4xl text-end font-bold my-4 text-white font-sans' >
              الرئيسية
              </h1>
            </div>
          </Link>
          <Link href={'/Projectspage'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex w-full py-4 justify-end ">
              <h1 className='text-4xl text-end font-bold my-4 text-white font-sans' >
              أبرز أعمالنا
              </h1>
            </div>
          </Link>
          <Link href={'/Contacts'} className='w-full' onClick={() => {setopen(!open)}} >
            <div className="flex justify-end w-full py-4">
              <h1 className='text-4xl text-end font-bold my-4 text-white font-sans' >
              تواصل معنا
              </h1>
            </div>
          </Link>
          
          
        </div>
    </div> 

    </>
  )
}

export default Navbar