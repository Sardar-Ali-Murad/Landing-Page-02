import React from 'react'
import {AiOutlineMail}  from "react-icons/ai"
import Circle from "../utils/img/Circle.png"
import Img from "../utils/img/Header_img.png"
import Image from 'next/image'
const Grid = () => {
  return (
    <div className='grid-even-2 div-center-80 p-[10px] gridMain'>
        <Image src={Circle} className="circle"/>
      <div>
        <h3 className='label mb-[20px]'>Access to Fine-tuned AI Models via API</h3>
        <p className='label text-1xl mb-[50px]'>Enter your email to get Early Access and to be the first to get Notified on the day of the Launch</p>
        <div className='input-box-main'>
           <input className='input-box' placeholder='Enter Your Email'/>
           <AiOutlineMail className='email'/>
           <button className='button label'>SignUp</button>
        </div>

      </div>

      <div>
        <Image src={Img}/>
      </div>
    </div>
  )
}

export default Grid
