import React from 'react'
import MyNavbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './Hero'
import Categories from './Categories'
import ProductGrid from './ProductGrid'
import Legend from './Legend'
import About from './About'
import WidberiesShop from './WidberiesShop'
import Footer from '../Footer'


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
    </>
  )
}

export default App