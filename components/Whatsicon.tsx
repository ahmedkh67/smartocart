import React from 'react'
import Image from 'next/image'
import whatsappIcon from '@/public/Whatsapp Icon.svg'
import Link from 'next/link'

const Whatsicon = () => {
  return (
    <>
    <Link href={'https://wa.me/+966530310044'}>
    <div className="flex z-40 w-24 h-24 rounded-full p-2 bg-green-500 justify-center items-center fixed bottom-8 left-8">
        <Image src={whatsappIcon} alt={'whatsapp icon'} width={100} height={60} />
    </div>
    </Link>
    </>
  )
}

export default Whatsicon