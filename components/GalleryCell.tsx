import React from 'react'

type GallerycellTypes = {
  src: string
}

function GalleryCell({src}: GallerycellTypes){
  return (
    <div className={`flex w-[18rem] h-[300px] ${src} m-3 :*` }>

    </div>
  )
}

export default GalleryCell