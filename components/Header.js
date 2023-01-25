import React from 'react'
import {AiOutlineBars}  from "react-icons/ai"

const Header = () => {
  return (
    <div className='text-white div-center-80'>
        <div className='flex gap-[10px]' style={{alignItems:"center"}}>
      <AiOutlineBars className='mt-[20px]'/>
      <p className='label mt-[20px]'>Modeltune</p>
        </div>
    </div>
  )
}

export default Header
