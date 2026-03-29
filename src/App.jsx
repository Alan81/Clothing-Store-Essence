import { useState } from 'react'
import HomePage from './components/Pages/HomePage/HomePage'
import { CartProvider } from './components/Pages/HomePage/CardContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
      <HomePage/>
    </CartProvider>
      
    </>
  )
}

export default App
