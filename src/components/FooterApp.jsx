import React from 'react'

import logo from "../assets/Images/res-logo.png"

import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";

function FooterApp() {
  return (
    <div className=' w-full bg-[#FDE4E4]'>
      <Footer container className=' w-[85%] m-auto bg-transparent rounded-none shadow-none'>
        <div>
          <div className="grid items-center justify-center sm:grid-cols-1 md:grid-cols-2 gap-8 sm:mt-4 lg:grid-cols-4 sm:gap-6">
            <Footer.LinkGroup className='text-gray' col>
              <div className='flex flex-col items-start justify-center '>
                <div className='flex flex-col items-center justify-center'>
                  <img src={logo} className=" w-14 font-serif" alt=" Logo" />
                  <span className=" whitespace-nowrap text-xl text-black font-bold">Tasty Treat</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </Footer.LinkGroup>
            <div>
              <Footer.Title className=' text-black capitalize text-lg font-bold' title="Delivery Time" />
              <Footer.LinkGroup className='text-gray' col>
                <div>
                  <span className=' font-semibold'>Sunday - Thursday</span>
                  <p>10:00am - 11:00pm</p>
                </div>
                <div>
                  <span className=' font-semibold'>Friday - Saturday</span>
                  <p>Off day</p>
                </div>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className=' text-black capitalize text-lg font-bold' title="Contact" />
              <Footer.LinkGroup className='text-gray' col>
                <p className=' font-semibold'>Location: Qalyubia , Shubra El-Qanaer</p>
                <span className=' font-semibold'>Phone: 01234567898</span>
                <span className=' font-semibold'>Email: mohamed@gmail.com</span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className=' text-black capitalize text-lg font-bold' title="Newsletter" />
              <Footer.LinkGroup className='text-gray' col>
                <p>Subscribe our newsletter</p>
                <div className="w-[200px] flex relative ">
                  <input className=' placeholder:text-sm focus:border-red-600 focus:ring-0 placeholder:text-black rounded bg-transparent border-black ' type="email" placeholder="Enter your email" />
                  <span className='w-12 cursor-pointer h-7 rounded bg-red-600 absolute left-[200px] top-2 flex items-center justify-center '>
                    <RiSendPlaneLine className='text-white' />
                  </span>
                </div>
              </Footer.LinkGroup>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <p className=' text-sm text-red-600'>Copyright - 2022, website made by Muhibur Rahman. All Rights Reserved.</p>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon icon={BsFacebook} />
              <Footer.Icon icon={BsInstagram} />
              <Footer.Icon icon={BsTwitter} />
              <Footer.Icon icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default FooterApp
