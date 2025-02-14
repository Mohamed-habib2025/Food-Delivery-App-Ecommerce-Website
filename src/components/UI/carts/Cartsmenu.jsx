import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import Cartitem from './Cartitem';
import { Link } from 'react-router-dom';

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function Cartsmenu() {

  const produtcart = useSelector(state => state.cart)

  const totalPrice = produtcart.reduce((accumelator, product) => {
    accumelator += product.price * product.quantity;
    return accumelator;
  }, 0)

  const [open, setOpen] = useState(true)

  return (

    <Dialog open={open} onClose={setOpen} className="relative z-[60] ">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-neutral-900/75 right-5 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />
      <div className=" fixed inset-y-0 right-0 flex max-w-full">
        <motion.DialogPanel 
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
          }}
          className=" w-[300px] md:w-[350px]">

          <div className=" flex h-screen flex-col overflow-y-scroll bg-white shadow-xl rounded-lg">

            <div className="px-6 py-10 ">

              <div className=" pt-3 w-full fixed top-0 bg-white z-[50]">
                <button type="button" onClick={() => setOpen(false)} className=" p-2 text-gray-400 hover:text-gray-500">
                  <IoIosCloseCircle className=' text-3xl text-[#212245]' />
                </button>
              </div>


              <div className=" mb-14 mt-10 flow-root">
                <ul role="list" className=' space-y-2'>
                  {
                    produtcart.length == 0 ? <h4 className='text-center'>No product added to cart</h4> : (
                      produtcart.map((product) => (
                        <Cartitem key={product.id} product={product} />
                      ))
                    )
                  }
                </ul>
              </div>


              <div className='text-white bg-red-600 absolute left-0 bottom-0 w-full px-3 py-5  flex items-center justify-between'>
                <div>
                  <p className='text-xl'>Subtotal : <span className=' font-bold'>${totalPrice}</span></p>
                </div>
                <button className=' py-2 px-4 bg-white rounded-xl text-black font-semibold mr-4 hover:bg-red-200 duration-200'>
                  <Link to="/checkout" onClick={() => setOpen(false)}>Checkout</Link>
                </button>
              </div>

            </div>

          </div>
        </motion.DialogPanel>

      </div>

    </Dialog >
  )
}

export default Cartsmenu
