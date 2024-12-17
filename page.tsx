
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Footer from './components/Footer'
import Top from './components/Top'
import Products from './products/page'
import TopItems from './products/TopItems'

const page = () => {
  return (
    <div>
      <Hero/>
      <Brands/>
      <Products />
      <TopItems/>
    </div>
  )
}

export default page
