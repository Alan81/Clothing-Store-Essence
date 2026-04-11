// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext) // создали хук, чтобы брать данные из CartContext

export const CartProvider = ({ children }) => {

  const [wishlistItems, setWishlistItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const wishlistCount = wishlistItems.length
  const cartCount = cartItems.length

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      if (prevItems.find(item => item.id === product.id)) {
      return prevItems
    }
    return [...prevItems,product] // spreat-опереатор, расширение
    })
    
  }

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId))
    wishlistCount(prev => prev - 1)
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
    cartCount(prev => prev - 1)
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