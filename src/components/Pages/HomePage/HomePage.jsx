import React from 'react'
import MyNavbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './Hero'
import Categories from './Categories'
import ProductGrid from './ProductGrid'
import Legend from './Legend'
import About from './About'


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
        
        
        <section id="NewArrivals" className="mt-5 pt-5">
          <h2>Next Section</h2>
          <p>Some content here...</p>
        </section>
        
        <section id="Sales" className="mt-5 pt-5">
          <h2>Next Section</h2>
          <p>Some content here...</p>
        </section>
        
        <section id="Journal" className="mt-5 pt-5 mb-5">
          <h2>Next Section</h2>
          <p>Some content here...</p>
        </section>
      </div>
    </>
  )
}

export default App