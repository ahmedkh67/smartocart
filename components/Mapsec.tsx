"use client"

import React from 'react'
import { useState } from 'react'

const Mapsec = () => {

  const [Address , setAddress] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.663785866609!2d46.70025692518167!3d24.600796855599707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05626d420177%3A0xfb6caaab1eac1310!2z2KfZhNmC2LXYsSDZhdmI2YQ!5e0!3m2!1sar!2ssa!4v1744529218364!5m2!1sar!2ssa") ;
  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => { setAddress(e.target.value) }

  return (
    <>
    <div className="flex w-full justify-center flex-col items-center pb-12 bg-amber-400 -translate-y-40 ">
      
      <h1 className='md:text-4xl text-4xl text-center font-bold mt-12 bg-amber-400 font-sans text-white'>
        تشرفنا زيارتكم
      </h1>
      
    </div>

    <div className="flex w-full justify-between md:justify-start flex-row-reverse items-center py-6 md:px-0 px-3 font-sans bg-amber-400 text-white -translate-y-40">
      <h1 className='md:text-3xl text-2xl text-end font-bold md:mr-[10%] md:ml-8'>
        متواجدين في
      </h1>
      <select value={Address} onChange={handleChange} name='Nameeinput' id='Nameeinput' className='flex bg-red-500 text-white pointer transition-[0.3s] hover:scale-[104%]  h-10 border-0 border-black border-solid px-3 rounded-lg' > 
            <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.663785866609!2d46.70025692518167!3d24.600796855599707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05626d420177%3A0xfb6caaab1eac1310!2z2KfZhNmC2LXYsSDZhdmI2YQ!5e0!3m2!1sar!2ssa!4v1744529218364!5m2!1sar!2ssa"}
             >  الرياض </option>
            <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.691190208601!2d39.59818042518501!3d24.496154459739444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbeecafc81d35%3A0x34cbfdba1ea0415e!2sCenomi%20Al%20Noor%20Mall!5e0!3m2!1sar!2ssa!4v1744529034034!5m2!1sar!2ssa"}
             > المدينة </option>
            <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.2395148105243!2d39.19831348214042!3d21.5765719189529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1edb45066d1%3A0xd6aab89999935238!2z2KfZhNi52LHYqNipINin2YTYsNmD2YrYqQ!5e0!3m2!1sar!2ssa!4v1744529960833!5m2!1sar!2ssa"}
             >  جدة </option>
            <option value={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233190.75142742155!2d38.29200720339167!3d24.044973212906932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15b9060be2a84147%3A0xc294f09f5a959010!2z2YrZhtio2Lk!5e0!3m2!1sar!2ssa!4v1744529296487!5m2!1sar!2ssa"}
             >  ينبع </option>
            
             
             
                
      </select>
    </div>


    
    <div className="flex-col w-full h-64 bg-amber-400 justify-center items-end ">
      

    <iframe src={Address}
        width="100%" height="100%" className='-translate-y-40 '>
        
    </iframe>
    </div>   
    </>
  )
}

 

export default Mapsec ;