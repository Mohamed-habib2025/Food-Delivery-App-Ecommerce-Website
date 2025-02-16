import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { morequantity, lessquantity, removecart } from '../../../store/shopping-cart/CartSlice';




function Cartitem({ product }) {



  const { title, price, image01, quantity } = product

  const dispath = useDispatch()

  return (
    <div className=' relative flex items-center space-x-4 w-full pb-4'>
      <div>
        <img className='w-10 md:w-14' src={image01} alt="product image" />
      </div>
      <div className='space-y-3'>
        <h5>{title}</h5>
        <p> x{quantity} <span className='ml-20'>${price * quantity}</span></p>
        <div className=' md:w-[150px] bg-red-200 py-1 rounded-lg flex justify-around'>
          <button onClick={() => dispath(morequantity(product))} className='text-xl'>+</button>
          <span>{quantity}</span>
          <button onClick={() => dispath(lessquantity(product))} className='text-xl'>-</button>
        </div>
      </div>
      <IoMdClose onClick={() => dispath(removecart(product))} className=' absolute right-0 cursor-pointer' />
    </div>
  )
}

export default Cartitem
