import React from 'react'
import { Routes , Route , Navigate} from 'react-router-dom'
import FoodDetails from '../pages/FoodDetails'
import Checkout from '../pages/Checkout'
import AllFoods from '../pages/AllFoods'
import Register from '../pages/Register'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Cart from '../pages/Cart'



function routers() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/Home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/foods' element={<AllFoods />} />
      <Route path='/foods/:id' element={<FoodDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default routers
