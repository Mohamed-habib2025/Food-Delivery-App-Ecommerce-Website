import React from 'react'
import Helmet from '../components/Helmet'
import Commensection from '../components/UI/Commensection/Commensection'
import { useSelector } from 'react-redux'


function Checkout() {

  const cart = useSelector(state => state.cart)

  const shoppingcost = 30
  const totalPrice = cart.reduce((accumelator, product) => {
    accumelator += product.price * product.quantity;
    return accumelator;
  }, 0)

  const total =  totalPrice + Number(shoppingcost)

  return (
    <Helmet title="Chekout">
      <Commensection title="Chekout" />
      <div className='w-[90%] lg:w-[85%] mx-auto my-10'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='lg:w-[65%]'>
            <h3>Shipping Address</h3>
            <form>
              <div className='py-3 border-b-[1px] border-gray-300'>
                <input required type="text" placeholder='Enter your name' className=' w-full border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
              </div>
              <div className='py-3 border-b-[1px] border-gray-300'>
                <input required type="email" placeholder='Enter your email' className=' w-full border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
              </div>
              <div className='py-3 border-b-[1px] border-gray-300'>
                <input required type="number" placeholder='Phone number' className=' w-full border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
              </div>
              <div className='py-3 border-b-[1px] border-gray-300'>
                <input required type="text" placeholder='Country' className=' w-full border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
              </div>
              <div className='py-3 border-b-[1px] border-gray-300'>
                <input required type="text" placeholder='City' className=' w-full border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
              </div>
              <div className='py-3 border-b-[1px] border-gray-300'>
                <input required type="number" placeholder='Postal code' className=' w-full border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
              </div>
              <button className=' my-6 py-1 px-3 bg-red-600 rounded-md text-white font-normal hover:bg-red-400 duration-200' type='submit'> Payment</button>
            </form>
          </div>

          <div className=' w-[70%] lg:w-[40%] h-fit bg-[#FDE4E4] p-7 font-normal text-lg'>
            <div className='border-b-[1px] border-gray-500 pb-3'>
              <p className='flex justify-between'>Subtotal: <span>${totalPrice}</span></p>
              <p className='flex justify-between'>Shopping: <span>${shoppingcost}</span></p>
            </div>
            <h3 className='pt-6 flex justify-between'>Total: <span>${total}</span></h3>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Checkout
