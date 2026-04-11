import { useState } from 'react'
import HomePage from './components/Pages/Pages/HomePage'
import { CartProvider } from './components/Pages/Home/CardContent'
// import ScrollToTop from './components/Pages/ScrollToTop'
import ScrollToTopButton from './components/Pages/Common/ScrollToTopButton'

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
