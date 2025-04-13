import React from 'react'
import Image from 'next/image'
import Star from '@/public/Star Icon.svg'

type CommentsecTypes = {
    name: string , rate: number , comment: string , src: string ,
}
function CommentBox ({name,rate, comment, src } : CommentsecTypes ){
  return (
    <div className="flex flex-col justify-between items-center py-10 px-5 bg-white w-full h-80 border-black border-0 rounded-2xl border-solid">
        
        <Image src={src} alt={'profile img'} width={56} height={56} className='rounded-full w-14 h-14' />
        <div className="flex flex-col px-4">
            <p className='text-center text-sm font-sans' >
                {name}
            </p>
            <div className="flex mb-3 justify-center">

            {Array.from({length : rate}).map(() => (
                <Image src={Star} alt={'star rates icons'} width={20} key={name} />
            ))}
                       
            </div>
            
            <h1 className='md:text-xl text-2xl h-3/4 text-center my-1 font-sans'>
                {comment}
            </h1>
        </div>
    </div>
  )
}

export default CommentBox ;