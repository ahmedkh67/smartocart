import React from 'react'
import Link from 'next/link'

const Orderbutton = () => {
  return (
    <Link href={'https://wa.me/+966543367208'}>
    <button className="flex bg-red-400 h-16 justify-center items-center px-12 mt-12 rounded-md
        transition-[0.3s] hover:bg-red-500 ">
            <h1 className='text-white font-bold text-3xl'>
            طلب الخدمة الأن           
            </h1>
    </button>
    </Link>
  )
}

export default Orderbutton ;
