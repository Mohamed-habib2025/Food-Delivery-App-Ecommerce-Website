import React from 'react'

import categoryimg1 from "../../assets/Images/category-01.png"
import categoryimg2 from "../../assets/Images/category-02.png"
import categoryimg3 from "../../assets/Images/category-03.png"
import categoryimg4 from "../../assets/Images/category-04.png"


const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryimg1,
  },
  {
    display: "Pizza",
    imgUrl: categoryimg2,
  },

  {
    display: "Asian Food",
    imgUrl: categoryimg3,
  },

  {
    display: "Row Meat",
    imgUrl: categoryimg4,
  },
];

function Category() {
  return (
    <div className=' py-10'>
      <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {
          categoryData.map((category) => (
            <div key={category.display} className=' px-5 py-8 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 rounded-lg bg-red-200 cursor-pointer hover:-translate-y-3 duration-300'>
              <img src={category.imgUrl} alt=" category image" className='' />
              <span>{category.display}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category
