import React from 'react'
import chat from "../utils/img/chat.png"
import statbility from "../utils/img/stability.png"
import mind from "../utils/img/mind.png"
import Image from 'next/image'
const Models = () => {
  return (
    <div className='modelMain'>
    <div className='mt-[140px] bg-[#F6F5FF] div-center-90 p-[10px] mb-[30px]' style={{borderRadius:"10px"}}>
      <h3 className='mt-[30px] model-heading md:text-1xl heading'>What Base Models have <br/> been Fine-tuned?</h3>
       <div className='grid-18 div-center-80 mt-[40px] mb-[20px]'>
           <div className='single-box'>
               <Image src={chat} className="div-center mb-[20px]"/>
               <h5>GPT-3</h5>
               <p  className='label'>The popular language model made by OpenAI</p>
           </div>
           <div className='single-box'>
               <Image src={statbility} className="div-center mb-[20px]"/>
               <h5>Stable Diffusion</h5>
               <p className='label'>The open-source text-to-image model</p>
           </div>
           <div className='single-box'>
               <Image src={mind} className="div-center mb-[20px]"/>
               <h5>More...</h5>
               <p className='label'>lots of other models as well</p>
           </div>
       </div>
    </div>
    </div>
  )
}

export default Models
