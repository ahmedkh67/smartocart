import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Logo.jpg'


const Whosec = () => {
  return (
    <div className=" bg-white flex flex-col md:flex-row-reverse w-full justify-end items-center px-[5%] ">
        <Image src={Logo} alt={'logo img '} width={250} className='ml-10' />

        <div className="flex-col justify-end">
            <h1 className='text-4xl font-bold text-end' >
                من نحن ؟
            </h1>
            <h1 className='text-3xl text-end ' >
نحن متخصصون في تأجير لوازم الحفلات والمناسبات بجودة عالية وبأسعار تنافسية. سواء كنت تخطط لحفل زفاف، أو عيد ميلاد، أو مناسبة خاصة، فإننا نقدم لك كل ما تحتاجه لجعل يومك مميزاً ومختلفاً

            </h1>
        </div>
    </div>
  )
}

export default Whosec