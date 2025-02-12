import React from 'react'
import Slider from "react-slick";

import ava01 from "../../assets/Images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";



function TestimonailSlider() {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className='pt-8 w-[95%]'>
      <Slider {...settings}>
        <div className='space-y-5'>
          <p className=" text-gray-400">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            atque, quam minus totam maiores laborum! Impedit consectetur illum
            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
            quis dolorem quas!"
          </p>
          <div className=" flex items-center gap-3 ">
            <img src={ava01} alt="avatar" className=" w-16 rounded" />
            <h6>Jhon Doe</h6>
          </div>
        </div>
        <div className='space-y-5'>
          <p className=" text-gray-400">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            atque, quam minus totam maiores laborum! Impedit consectetur illum
            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
            quis dolorem quas!"
          </p>
          <div className="flex items-center gap-3 ">
            <img src={ava02} alt="avatar" className=" w-16 rounded" />
            <h6>Mitchell Marsh</h6>
          </div>
        </div>
        <div className='space-y-5'>
          <p className=" text-gray-400">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            atque, quam minus totam maiores laborum! Impedit consectetur illum
            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
            quis dolorem quas!"
          </p>
          <div className="flex items-center gap-3 ">
            <img src={ava03} alt="avatar" className=" w-16 rounded" />
            <h6>Steven Crock</h6>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default TestimonailSlider
