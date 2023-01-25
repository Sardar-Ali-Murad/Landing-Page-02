import React from 'react'
import Header from '../components/Header'
import Grid from '../components/Grid'
import Models from '../components/Models'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'

const index = () => {
  return (
    <div>

    <div className='bg-[#2272FF] overflow-x-hidden'>
      <Header/>
      <Grid/>
    </div>
      <Models/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}

export default index
