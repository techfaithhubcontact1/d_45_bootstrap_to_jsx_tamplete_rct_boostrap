import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Layout from './pages/Layout'
import Shop from './pages/Shop'
import ShopDetail from './components/ShopDetail'
import Testimonial from './pages/testimonial'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/contact'

export default function App() {
     return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                         <Route index element={<Home />}></Route>
                         <Route path="/login" element={<Login />}></Route>
                         <Route path="/register" element={<Register />}></Route>
                         <Route path="/shop" element={<Shop />}></Route>
                         <Route path="/shopdetail" element={<ShopDetail />}></Route>
                         <Route path="/testimonial" element={<Testimonial />}></Route>
                         <Route path="/cart" element={<Cart />}></Route>
                         <Route path="/checkout" element={<Checkout />}></Route>
                         <Route path="/contact" element={<Contact />}></Route>
                         <Route path="*" element={<NotFound />}></Route>
                  </Route>
              </Routes>
          </BrowserRouter>
     )
}
