import React, { useEffect, useState } from 'react'

import products from '../assets/data/products'
import Helmet from '../components/Helmet'
import Commensection from '../components/UI/Commensection/Commensection'
import { useParams } from 'react-router-dom'
import Productcart from '../components/UI/Productcart'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/shopping-cart/CartSlice'


function FoodDetails() {

  const dispatch = useDispatch()

  const [tap, settap] = useState("desc")
  const { id } = useParams()

  const product = products.find(product => product.id == id)
  const [preveiwimg, setpreveiwimg] = useState(product.image01)

  const relatedProduct = products.filter(item => product.category === item.category)

  useEffect(() => {
    setpreveiwimg(product.image01)
  },[product])

  const AddToCart = () => {
    dispatch(addItem({
      id:product.id,
      title:product.title,
      image01:product.image01,
      price:product.price,
      quantity:product.quantity
    }))
  }

  return (
    <Helmet title='Product-Details'>
      <Commensection title={product.title} />
      <div className='w-[85%]  mx-auto pt-10'>
        <div className=' w-full flex flex-col md:flex-row items-center gap-2 '>
          
          <div className=' flex flex-row md:flex-col items-center '>
            <div onClick={() => setpreveiwimg(product.image01)}>
              <img className='w-24 cursor-pointer' src={product.image01} alt=" image product" />
            </div>
            <div onClick={() => setpreveiwimg(product.image02)}>
              <img className='w-24 cursor-pointer' src={product.image02} alt=" image product" />
            </div>
            <div onClick={() => setpreveiwimg(product.image03)}>
              <img className='w-24 cursor-pointer' src={product.image03} alt=" image product" />
            </div>
          </div>

          <div>
            <img className=' w-[450px] md:w-[400px] lg:w-[500px] cursor-pointer p-10' src={preveiwimg} alt="" />
          </div>

          <div className='flex flex-col gap-5 mb-5'>
            <h2>{product.title}</h2>
            <p className=' text-red-600 text-2xl'> Price: ${product.price}</p>
            <p className='text-lg'>Category: <span className=' bg-[#FDE4E4] p-2 rounded'>{product.category}</span></p>
            <button onClick={AddToCart} className=' bg-red-600 mt-4 py-2 px-2 rounded-lg text-white text-sm font-thin hover:text-black duration-300'>Add to Cart</button>
          </div>
        </div>

        <div className='flex space-x-8 border-b-[1px] pb-4 mb-4'>
          <h6 className={`cursor-pointer ${tap === "desc" ? "text-red-600" : "text-black"}`} onClick={() => settap("desc")}>Description</h6>
          <h6 className={`cursor-pointer ${tap === "review" ? "text-red-600" : "text-black"}`} onClick={() => settap("review")} >Review</h6>
        </div>

        {
          tap == "desc" ? <div><p className='text-gray-600 font-light'>{product.desc}</p></div> :
            <div className='mt-8'>
              <div>

                <div className='my-8'>
                  <h3>mohamed habib</h3>
                  <span className='text-sm font-normal'>mohamed@gmail.com</span>
                  <p className='mt-2 text-lg font-normal'>great product</p>
                </div>

                <div>
                  <h3>mohamed habib</h3>
                  <span className='text-sm font-normal'>mohamed@gmail.com</span>
                  <p className='mt-2 text-lg font-normal'>great product</p>
                </div>
              </div>

              <form className='bg-[#FDE4E4] rounded p-3 md:w-[65%] mx-auto my-8'>
                <div className='border-b-[1px] border-gray-300'>
                  <input type="text" placeholder='Enter your name' className='border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
                </div>
                <div className='border-b-[1px] border-gray-300'>
                  <input type="text" placeholder='Enter your email' className='border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
                </div>
                <div className='border-b-[1px] mb-4 border-gray-300'>
                  <textarea type="text" placeholder='Enter your review' className='border-none w-full pt-5 pb-16 bg-transparent font-normal focus:ring-0 focus:outline-none' />
                </div>
                <button className=' my-3 py-1 px-3 bg-red-600 rounded-md text-white font-normal hover:bg-red-400 duration-200' type='submit'> submit</button>
              </form>
            </div>
        }

        <div className='mt-10'>
          <h2 className='text-3xl'>You might also like</h2>
          <div className='py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
              relatedProduct.map((product) => (
                <div key={product.id} className='px-2 md:px-7 py-5 border border-red-200 flex flex-col items-center justify-center gap-4'>
                  <Productcart product={product} />
                </div>
              ))
            }
          </div>
        </div>


      </div>
    </Helmet>
  )
}

export default FoodDetails



