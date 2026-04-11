import React from 'react'
import MyNavbar from '../Common/Navbar'
import Hero from '../Home/Hero'
import Categories from '../Home/Categories'
import ProductGrid from '../Home/ProductGrid'
import Legend from '../Home/Legend'
import About from '../Home/About'
import WidberiesShop from '../Home/WidberiesShop'
import Footer from '../Common/Footer'
import Advertisement from '../Home/Advertisement'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <MyNavbar />
      <div className="">
        
        <Hero/>
        <Categories/>
        <ProductGrid/>
        <Legend/>
        <About/>
        <WidberiesShop/>
        <Footer/>
        
      </div>
      <Advertisement/>
    </>
  )
}

export default App