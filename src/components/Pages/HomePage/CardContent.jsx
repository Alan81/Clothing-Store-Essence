// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  // 👇 Теперь состояние живет здесь, а не в Navbar
  const [wishlistCount, setWishlistCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistItems, setWishlistItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  const addToWishlist = (product) => {
    if (!wishlistItems.find(item => item.id === product.id)) {
      setWishlistItems([...wishlistItems, product])
      setWishlistCount(prev => prev + 1)
    }
  }

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
    setCartCount(prev => prev + 1)
  }

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId))
    setWishlistCount(prev => prev - 1)
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
    setCartCount(prev => prev - 1)
  }

  return (
    <CartContext.Provider value={{
      wishlistCount,
      cartCount,
      wishlistItems,
      cartItems,
      addToWishlist,
      addToCart,
      removeFromWishlist,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}