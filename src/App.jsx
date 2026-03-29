import { useState } from 'react'
import HomePage from './components/Pages/HomePage/HomePage'
import { CartProvider } from './components/Pages/HomePage/CardContent'
import ScrollToTop from './components/Pages/ScrollToTop'
import ScrollToTopButton from './components/Pages/ScrollToTopButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
      {/* <ScrollToTop/> */}
      <HomePage/>
      <ScrollToTopButton/>
    </CartProvider>
      
    </>
  )
}

export default App
