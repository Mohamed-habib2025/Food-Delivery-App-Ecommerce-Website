import React from 'react'

import logo from "../assets/Images/res-logo.png"

import { Footer } from "flowbite-react";
import { FaFacebookF , FaInstagram , FaGithub  , FaXTwitter  } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";

function FooterApp() {
  return (
    <div className=' w-full bg-[#FDE4E4]'>
      <Footer container className=' md:w-[85%] mx-auto bg-transparent rounded-none shadow-none'>
        <div>
          <div className="grid items-center justify-center sm:grid-cols-1 md:grid-cols-2 gap-8 sm:mt-4 lg:grid-cols-4 sm:gap-6">
            <Footer.LinkGroup className='text-gray' col>
              <div className='flex flex-col items-start justify-center '>
                <div className='flex flex-col items-center justify-center'>
                  <img src={logo} className=" w-14 font-serif" alt=" Logo" />
                  <span className=" whitespace-nowrap text-xl text-black font-bold">Tasty Treat</span>
                </div>
              </div>
              <p className='font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </Footer.LinkGroup>
            <div>
              <Footer.Title className=' text-black capitalize text-lg font-bold' title="Delivery Time" />
              <Footer.LinkGroup className='text-gray' col>
                <div>
                  <span className=' font-normal '>Sunday - Thursday</span>
                  <p className='font-normal'>10:00am - 11:00pm</p>
                </div>
                <div>
                  <span className=' font-normal '>Friday - Saturday</span>
                  <p className='font-normal'>Off day</p>
                </div>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className=' text-black capitalize text-lg font-bold' title="Contact" />
              <Footer.LinkGroup className='text-gray' col>
                <p className='font-normal'>Location: Qalyubia , Shubra El-Qanaer</p>
                <span className='font-normal'>Phone: 01234567898</span>
                <span className='font-normal'>Email: mohamed@gmail.com</span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className=' text-black capitalize text-lg font-bold' title="Newsletter" />
              <Footer.LinkGroup className='text-gray' col>
                <p className='font-normal'>Subscribe our newsletter</p>
                <div className="w-[200px] flex relative ">
                  <input className=' font-normal placeholder:text-sm focus:border-red-600 focus:ring-0 placeholder:text-black rounded bg-transparent border-black ' type="email" placeholder="Enter your email" />
                  <span className='w-12 cursor-pointer h-7 rounded bg-red-600 absolute left-[185px] top-2 flex items-center justify-center '>
                    <RiSendPlaneLine className='text-white' />
                  </span>
                </div>
              </Footer.LinkGroup>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <p className=' text-sm text-red-600'>Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.</p>
            <div className="mt-4 flex space-x-4 sm:mt-0 sm:justify-center">
              <FaFacebookF className=' text-xl hover:text-red-600 cursor-pointer duration-200' />
              <FaInstagram className=' text-xl hover:text-red-600 cursor-pointer duration-200'/>
              <FaXTwitter className=' text-xl hover:text-red-600 cursor-pointer duration-200'/>
              <FaGithub className=' text-xl hover:text-red-600 cursor-pointer duration-200'/>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default FooterApp
