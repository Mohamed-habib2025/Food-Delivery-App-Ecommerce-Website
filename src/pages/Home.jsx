import React, { useEffect, useState } from 'react'

import "../index.css"

import Helmet from "../components/Helmet"
import heroimg from "../assets/Images/hero.png"
import Category from '../components/UI/Category'
import { Link } from 'react-router-dom'
import { FaCarAlt } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";

import featureImg1 from "../assets/Images/service-01.png"
import featureImg2 from "../assets/Images/service-02.png"
import featureImg3 from "../assets/Images/service-03.png"

import products from "../assets/data/products"
import foodcategoryimg1 from "../assets/Images/hamburger.png"
import foodcategoryimg2 from "../assets/Images/pizza.png"
import foodcategoryimg3 from "../assets/Images/bread.png"

import Productcart from "../components/UI/Productcart"

import whyimg from "../assets/Images/location.png"
import { CiCircleCheck } from "react-icons/ci";

import networkimg from "../assets/Images/network.png"
import TestimonailSlider from '../components/UI/TestimonailSlider'

import { motion } from 'framer-motion'

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    delay: 0.4,
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    delay: 0.6,
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    delay: 0.8,
  },
];

function Home() {

  // start active button category nav
  const [activebtn, setActivebtn] = useState("All");
  function getButtonClasses(active) {
    return activebtn === active ? " bg-white rounded py-1 px-2 text-red-600 " : "";
  }
  // end active button category nav

  const [category, setcategory] = useState("All")
  const [allproduct, setallproduct] = useState(products)

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {

    if (category === "All") {
      setallproduct(products)
    }

    if (category === "Burger") {
      const filterproducts = products.filter(product => product.category === "Burger")
      setallproduct(filterproducts)
    }
    if (category === "Pizza") {
      const filterproducts = products.filter(product => product.category === "Pizza")
      setallproduct(filterproducts)
    }
    if (category === "Bread") {
      const filterproducts = products.filter(product => product.category === "Bread")
      setallproduct(filterproducts)
    }

  }, [category])

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  return (
    <Helmet title="Home">
      <div className=' w-[75%] md:w-[85%] mx-auto overflow-hidden'>
        {/* section1 */}
        <div className=' w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-between '>
          {/* contant home page (left page)*/}
          <div className='mt-20 space-y-5 lg:mt-0'>
            <motion.h5
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.8,
              }}
              className="mb-3 font-serif text-2xl ">Easy way to make an order</motion.h5>
            <motion.h1
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 10,
                delay: 0.5,
              }}
              className="mb-4 text-2xl md:text-5xl">
              <span className=' text-red-600 font-bold'>HUNGRY?</span> Just wait <br /> food at
              <span className=' text-red-600 font-bold'> your door</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 10,
                delay: 0.5,
              }}
              className='w-[90%] text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              magni delectus tenetur autem, sint veritatis!
            </motion.p>

            <div className=' w-[300px] flex items-center space-x-4'>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                className=" h-9 w-28 rounded-lg bg-red-600 text-white hover:text-black duration-200 text-sm">
                Order now
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3,
                }}
                className=" h-9 w-28 rounded-lg hover:bg-red-600 hover:text-white duration-200 text-sm border-[1px] border-red-600 ">
                <Link to="/foods">See all foods</Link>
              </motion.button>
            </div>
            <div className=' flex items-center space-x-6'>
              <div className='mt-5 flex items-center space-x-3'>
                <FaCarAlt className=' text-red-600 text-xl' />
                <span className=' text-sm font-semibold'>No shipping charge</span>
              </div>
              <div className='mt-5 flex items-center space-x-3'>
                <RiShieldCheckLine className=' text-red-600 text-xl' />
                <span className=' text-sm font-semibold'>100% secure checkout</span>
              </div>
            </div>
          </div>
          {/* image home page (right page)*/}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 50,
              delay: 0.2,
            }}
          >
            <img src={heroimg} alt=" photo to home page" className='' />
          </motion.div>

        </div>
        {/* section2 */}
        <Category />
        {/* section3 */}
        <div className=' py-10'>
          <div className=' flex flex-col items-center'>
            <motion.h5
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.8,
              }}
              className=" mb-3 text-red-600 font-semibold text-xl">What we serve</motion.h5>
            <motion.h2
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.8,
              }}
              className=" text-2xl md:text-4xl">Just sit back at home</motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.8,
              }}
              className="text-2xl md:text-4xl">
              we will <span className='text-red-600'>take care</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                delay: 0.8,
              }}
            >
              <p className="mb-1 mt-4  text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className=" text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.
              </p>
            </motion.div>
          </div>
        </div>
        {/* section4 */}
        <div className='py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
              featureData.map((feature) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 10,
                    delay: feature.delay,
                  }}
                  key={feature.title} className='flex flex-col items-center text-center gap-3'>
                  <img src={feature.imgUrl} alt=" feature image" className='w-20' />
                  <h5 className='font-semibold text-xl'>{feature.title}</h5>
                  <p className='text-sm text-gray-500 md:w-[250px]'>{feature.desc}</p>
                </motion.div>
              ))
            }
          </div>
        </div>
        {/* section5 */}
        <div className='pt-10 text-center'>
          <h2 className='my-4'>Popular Foods</h2>
          <div className='py-5 px-2 md:px-0 bg-red-600 rounded-lg w-full'>
            <div className="sm:w-[70%] lg:w-[45%] mx-auto flex items-center justify-around text-white ">
              <button onClick={() => { setActivebtn("All"); setcategory("All") }} className={getButtonClasses("All")}>All</button>

              <button onClick={() => { setActivebtn("Burger"); setcategory("Burger") }} className={`flex items-center space-x-2` + getButtonClasses("Burger")}>
                <img className=" w-4 md:w-6" src={foodcategoryimg1} alt="" />
                <span>Burger</span>
              </button>

              <button onClick={() => { setActivebtn("Pizza"); setcategory("Pizza") }} className={`flex items-center space-x-2` + getButtonClasses("Pizza")}>
                <img className=" w-4 md:w-6" src={foodcategoryimg2} alt="" />
                <span>Pizza</span>
              </button>

              <button onClick={() => { setActivebtn("Bread"); setcategory("Bread") }} className={`flex items-center space-x-2` + getButtonClasses("Bread")}>
                <img className=" w-4 md:w-6" src={foodcategoryimg3} alt="" />
                <span>Bread</span>
              </button>

            </div>
          </div>
          <div className=' py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
              allproduct.map((product) => (
                <div key={product.id} className='px-2 md:px-7 py-5 border border-red-200 flex flex-col items-center justify-center gap-4'>
                  <Productcart product={product} />
                </div>
              ))
            }
          </div>
        </div>
        {/* section6 */}
        <div className='pb-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
                delay: 0.2,
              }}
            >
              <img className=' md:w-[500px] lg:w-[1200px]' src={whyimg} alt="" />
            </motion.div>
            <motion.applydiv
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
                delay: 0.2,
              }}
              className='space-y-5'>
              <h5 className='text-[#212245] font-semibold text-3xl'>Why <span className='text-red-600'>Tasty Treat?</span></h5>
              <p className=' text-[13px] lg:text-[15px] text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, minus. Tempora reprehenderit a corporis velit,
                laboriosam vitae ullam, repellat illo sequi odio esse iste
                fugiat dolor, optio incidunt eligendi deleniti!
              </p>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2 '>
                  <CiCircleCheck className='text-lg md:text-xl text-red-600 ' />
                  <span className='text-[#212245] text-sm lg:text-lg'>Fresh and tasty foods</span>
                </div>
                <p className='text-[13px] text-gray-400 font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
              </div>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2 '>
                  <CiCircleCheck className='text-lg md:text-xl text-red-600 ' />
                  <span className='text-[#212245] text-sm lg:text-lg'>Quality support</span>
                </div>
                <p className='text-[13px] text-gray-400 font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
              </div>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2 '>
                  <CiCircleCheck className='text-lg md:text-xl text-red-600 ' />
                  <span className='text-[#212245] text-sm lg:text-lg'>Order from any location</span>
                </div>
                <p className='text-[13px] text-gray-400 font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
              </div>
            </motion.applydiv>
          </div>
        </div>
        {/* section7 */}
        <div className=' py-7 text-center'>
          <h2 className='my-4'>Hot Pizza</h2>
          <div className=' py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
              hotPizza.map((product) => (
                <div key={product.id} className='px-2 md:px-7 py-5 border border-red-200 flex flex-col items-center justify-center gap-4'>
                  <Productcart product={product} />
                </div>
              ))
            }
          </div>
        </div>
        {/* section8 */}
        <div className='py-7 w-[90%]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
                delay: 0.2,
              }}
              className='space-y-4'>
              <h5 className='text-red-600 text-xl'>Testimonial</h5>
              <h2 className='text-[#212245] font-semibold text-2xl md:text-4xl'>What our <span className='text-red-600'>customers</span> are saying</h2>
              <p className=' text-gray-400'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quasi qui minus quos sit perspiciatis inventore quis provident placeat fugiat!
              </p>
              <TestimonailSlider />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
                delay: 0.2,
              }}
            >
              <img className=' md:w-[500px] lg:w-[1200px]' src={networkimg} alt="" />
            </motion.div>
          </div>
        </div>
      </div>

    </Helmet>
  )
}

export default Home
