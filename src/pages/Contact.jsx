import React from 'react'
import phone from "../assets/Images/phone.png"
import email from "../assets/Images/email.png"
import { motion } from 'framer-motion'


function Contact() {
  return (
    <div className='container mx-auto mb-9 '>
      <div className='relative flex xl:flex-row flex-col pt-24 items-center justify-center gap-4'>
        <div className=" space-y-6 mx-5 w-[90%]">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 50,
              delay: 0.2,
            }}
            className="text-4xl font-bold text-red-600">Contact Information</motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 50,
              delay: 0.2,
            }}
          >Fill the form below or write to us. We will help you as soon as possible.</motion.p>

          <div className='flex md:flex-row flex-col justify-center items-center  gap-5'>
            {/* Phone Section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
                delay: 0.2,
              }}
              className="bg-red-100 p-4 rounded lg:w-96  w-full  flex flex-col items-center justify-center gap-2">
              <img src={phone} alt="" />
              <h3 className="text-xl font-semibold ">
                <span>Phone</span>
              </h3>
              <p className="text-gray-700">+ (323) 9847 3847 383</p>
              <p className="text-gray-700">+ (434) 5466 5467 443</p>
            </motion.div>

            {/* Email Section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
                delay: 0.4,
              }}
              className="bg-blue-100 p-4 rounded lg:w-96  w-full  flex flex-col items-center justify-center gap-2">
              <img src={email} alt="" />
              <h3 className="text-xl font-semibold ">
                <span>Email</span>
              </h3>
              <p className="text-gray-700">mohamedhabib@gmail.com</p>
              <p className="text-gray-700">mohamedelsayed@gmail.com</p>
            </motion.div>
          </div>

          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 50,
              delay: 0.2,
            }}
            className="bg-green-100 p-4 rounded ">
            <h3 className="text-xl font-semibold flex items-center space-x-2">
              <span role="img" aria-label="Address">📍</span>
              <span>Address</span>
            </h3>
            <p className="text-gray-700">4517 Washington Ave. Manchester, Road 2342, Kentucky 39495</p>
            <div className="mt-4">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24145.316622205215!2d-74.00204365857938!3d40.71272805255657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b3e355%3A0x9e0349b3d8d3f4d4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1631111111111!5m2!1sen!2sus"
                width="100%"
                height="200"
                className="rounded-lg border-0"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

        </div>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 50,
            delay: 0.2,
          }}
          className="w-[90%] bg-[#FDE4E4] px-8 py-4 rounded shadow-md mt-6 md:mt-0">
          <h2 className="text-2xl">Get In Touch</h2>
          <form className="space-y-4 mt-4">
            <div className=' border-b-[1px] border-gray-400'>
              <label className="">First Name*</label>
              <input required type="text" className=" text-gray-500  w-full p-2 border-none bg-transparent focus:ring-0 rounded h-12 px-4 mt-2" placeholder="Demo Name" />
            </div>
            <div className=' border-b-[1px] border-gray-400'>
              <label>Email Address*</label>
              <input required type="email" className=" text-gray-500  w-full p-2 border-none bg-transparent focus:ring-0 rounded h-12 px-4 mt-2" placeholder="info@quomodosoft.com" />
            </div>
            <div className=' border-b-[1px] border-gray-400'>
              <label>Subject*</label>
              <input required type="text" className=" text-gray-500  w-full p-2 border-none bg-transparent focus:ring-0 rounded h-12 px-4 mt-2" placeholder="Your Subject here" />
            </div>
            <div className=' border-b-[1px] border-gray-400'>
              <label>Message*</label>
              <textarea required className=" text-gray-500 w-full p-2 border-none bg-transparent focus:ring-0 rounded mt-2" rows="4" placeholder="Type your message here"></textarea>
            </div>
            <button type="submit" className=" text-white  w-full h-14 bg-red-600 py-2 rounded font-semibold hover:bg-red-800 duration-200">Send Now</button>
          </form>
        </motion.div>
      </div>

    </div>
  )
}

export default Contact
