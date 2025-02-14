import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { Navbar } from "flowbite-react";
import logo from "../assets/Images/res-logo.png"
import { toggle } from '../store/shopping-cart/CartUISlice';
import { motion } from 'framer-motion';
import { IoMdClose } from "react-icons/io";

import "./header.css"
import { useSelector, useDispatch } from 'react-redux';

function Header() {

  const dispath = useDispatch()

  const headerRef = useRef(null)
  const [open, setopen] = useState(false)

  const cart = useSelector(state => state.cart)

  function navscroll() {

    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }

  useEffect(() => {
    navscroll()
  }, []);


  // start Active link 
  let { pathname } = useLocation()
  let subpage = pathname.split("/")?.[1]

  function Linkness(type = null) {

    if (subpage === '') {
      subpage = 'home'
    }

    let classes = ' '

    if (type === subpage) {
      classes += ' text-red-600 '
    } else {
      classes += ' text-black '
    }
    return classes
  }
  // end Active link 

  const navigate = useNavigate()


  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3,
      }}
      ref={headerRef} >
      <Navbar className='w-[85%] mx-auto '>
        <div className='flex flex-col items-center'>
          <img src={logo} className=" w-10 font-serif" alt=" Logo" />
          <span className=" text-[15px] font-bold">Tasty Treat</span>
        </div>
        <div className=' w-[45%] hidden md:flex items-center justify-around'>
          <Link to="/home" className={` md:mx-0 mx-auto my-2 md:mt-0 hover:text-red-600 duration-300 text-lg ` + Linkness('home')}>
            Home
          </Link>
          <Link to="/foods" className={` md:mx-0 mx-auto my-2 md:mt-0 hover:text-red-600 duration-300 text-lg ` + Linkness('foods')} >Foods</Link>
          <Link to="/cart" className={` md:mx-0 mx-auto my-2 md:mt-0 hover:text-red-600 duration-300 text-lg ` + Linkness('cart')} >Cart</Link>
          <Link to="/Contact" className={` md:mx-0 mx-auto my-2 md:mt-0 hover:text-red-600 duration-300 text-lg ` + Linkness('Contact')} >Contact</Link>
        </div>

        <div className="flex">
          <div className=' w-24 flex items-center justify-around'>
            <div className=' relative'>
              <TiShoppingCart onClick={() => dispath(toggle())} className=' cursor-pointer text-[22px]' />
              {
                cart.length == 0 ? null : <span className=' absolute w-4 h-4 rounded-full bottom-[10px] left-[16px] bg-red-600 text-[11px] text-white flex justify-center '>{cart.length}</span>
              }
            </div>
            <AiOutlineUser onClick={() => navigate("/login")} className=' cursor-pointer text-[22px]' />
            {/* toggle */}
            <div onClick={() => setopen(!open)} className=' block md:hidden cursor-pointer'>
              <IoMenu className='text-2xl ' />
            </div>
          </div>
        </div>
      </Navbar>

      {
        open && (
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
            }}
            className=' w-[200px] bg-gray-50 shadow-lg duration-200 border-l-[1px] rounded-3xl absolute top-0 right-0 md:hidden flex flex-col items-center justify-center space-y-4 h-screen z-[900]' >
            <IoMdClose onClick={() => setopen(!open)} className=' absolute top-10 text-2xl cursor-pointer' />
            <Link to="/home" onClick={() => setopen(!open)} className={` md:mx-0 mx-auto my-2 md:mt-0 hover:text-red-600 duration-300 text-lg ` + Linkness('home')}>
              Home
            </Link>
            <Link to="/foods" onClick={() => setopen(!open)} className={` md:mx-0 mx-auto my-2 md:mt-0 hover:text-red-600 duration-300 text-lg ` + Linkness('foods')} >Foods</Link>
            <Link to="/cart" onClick={() => setopen(!open)} className={` md:mx-0 mx-auto my-2 md:mt-0 hover:text-red-600 duration-300 text-lg ` + Linkness('cart')} >Cart</Link>
            <Link to="/Contact" onClick={() => setopen(!open)} className={` md:mx-0 mx-auto my-2 md:mt-0 hover:text-red-600 duration-300 text-lg ` + Linkness('Contact')} >Contact</Link>
          </motion.div>
        )
      }
    </motion.div>
  )
}

export default Header
