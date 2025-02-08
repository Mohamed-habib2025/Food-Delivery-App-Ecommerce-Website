import React from 'react'

import {addItem} from '../../store/shopping-cart/CartSlice'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Productcart(props) {

  const { id, title, image01, price , quantity} = props.product


  const dispatch = useDispatch()

  const AddToCart = () => {
    dispatch(addItem({
      id,
      title,
      image01,
      price,
      quantity
    }))
  }


  return (
    <>
      <div>
        <img className='w-32 hover:scale-125 duration-500 cursor-pointer' src={image01} alt="product" />
      </div>

      <h5 className=' pb-3 font-serif text-lg lg:text-xl '><Link>{title}</Link></h5>

      <div className='w-full flex items-center justify-around md:justify-between'>
        <span className='text-red-600 font-semibold'>${price}</span>
        <button onClick={AddToCart} className=' bg-red-600 py-2 px-2 rounded-lg text-white text-sm hover:text-black duration-300'>Add to Cart</button>
      </div>

    </>
  )
}

export default Productcart
