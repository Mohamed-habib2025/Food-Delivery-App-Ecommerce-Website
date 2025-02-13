import React from 'react'

import { FaTrash } from "react-icons/fa";
import Commensection from '../components/UI/Commensection/Commensection'
import Helmet from '../components/Helmet'
import { useDispatch, useSelector } from 'react-redux'
import { removecart } from '../store/shopping-cart/CartSlice';
import { Link } from 'react-router-dom';




function Cart() {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const totalPrice = cart.reduce((accumelator, product) => {
    accumelator += product.price * product.quantity;
    return accumelator;
  }, 0)

  return (
    <Helmet title=" Page-Cart">
      <Commensection title="Your Cart" />
      <section className='w-full mx-auto my-8'>
        {
          cart.length == 0 ? <h2 className='text-center text-2xl'>Your Cart Is Empty</h2> :
            (<div className="overflow-x-auto p-4 ">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-400">
                    <th className="p-3 font-semibold text-center">Image</th>
                    <th className="p-3 font-semibold text-center">Product Title</th>
                    <th className="p-3 font-semibold text-center">Price</th>
                    <th className="p-3 font-semibold text-center">Quantity</th>
                    <th className="p-3 font-semibold text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="p-3">
                        <img src={product.image01} alt={product.title} className="w-12 mx-auto h-12 rounded-full" />
                      </td>
                      <td className="p-3 text-center">{product.title}</td>
                      <td className="p-3 text-center">${product.price}</td>
                      <td className="p-3 text-center">{product.quantity}</td>
                      <td className="p-3 text-red-500 cursor-pointer hover:text-red-700">
                        <FaTrash className='mx-auto' onClick={() => dispatch(removecart(product))} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>)
        }
      </section>
      <section className='w-[85%] mx-auto my-8'>
        <div className='mt-5 space-y-2'>
          <p className='text-2xl'>Subtotal: <span className='text-red-600'>${totalPrice}</span></p>
          <p className='text-lg font-normal'>Taxes and shipping will calculate at checkout</p>
          <div className='flex items-center space-x-4'>
            <button className='bg-red-600 rounded py-1 px-3 text-white font-normal text-sm hover:bg-red-800 duration-200'><Link to="/foods">Continue Shopping</Link></button>
            <button className='bg-red-600 rounded py-1 px-3 text-white font-normal text-sm hover:bg-red-800 duration-200'><Link to="/checkout">Proceed to checkout</Link></button>
          </div>
        </div>
      </section>
    </Helmet>
  )
}

export default Cart
