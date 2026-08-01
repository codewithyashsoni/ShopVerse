import { useState } from 'react'
import NavBar from "./components/NavBar.jsx"
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import Checkout from "./pages/Checkout.jsx"

import { Routes, Route } from "react-router-dom"

function App() {
  return(
    <>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
    </>
  )
}

export default App
