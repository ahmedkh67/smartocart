import React from 'react'
import Link from 'next/link'
import { footerLinks } from '@/Constants'

const Footer = () => {
  return (
    <footer className='flex flex-col 
    text-black  border-gray-100 bg-fuchsia-500 '>
        
        <div className='flex justify-between items-center flex-wrap mt-10 border-gray-100 sm:px-16 px-6 py-10 text-white '>
            <p className=' '>@2025 Dina. All rights reserved</p>

            <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                <Link href="/" className="text-white">
                    Privacy & Policy
                </Link>
                <Link href="/" className="text-white">
                    Terms & Condition
                </Link>
            </div>
        </div>

    </footer>
  )
}

export default Footer ;