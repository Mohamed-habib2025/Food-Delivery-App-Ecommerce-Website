import Commensection from '../components/UI/Commensection/Commensection'
import Productcart from '../components/UI/Productcart'
import products from '../assets/data/products'
import { IoIosSearch } from "react-icons/io";
import ReactPaginate from 'react-paginate'
import Helmet from '../components/Helmet'
import React, { useState } from 'react'
import "./pagination.css"

function AllFoods() {

  const [search, setsearch] = useState("")
  const [Pagenumber, setPagenumber] = useState(0);
  const [sortOption, setSortOption] = useState("default");

  const productperpage = 8
  const visitedPage = Pagenumber * productperpage

  let filteredProducts = products.filter(product =>
    search === "" || product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sortOption === "high-price") {
    filteredProducts = filteredProducts.filter(product => product.price > 100);
  } else if (sortOption === "low-price") {
    filteredProducts = filteredProducts.filter(product => product.price <= 100);
  }

  const displayPage = filteredProducts.slice(visitedPage, visitedPage + productperpage)
  const pageCount = Math.ceil(filteredProducts.length / productperpage)

  const changePage = ({ selected }) => {
    setPagenumber(selected)
  }

  return (
    <Helmet title="All-Foods">
      <Commensection title="All Foods" />
      <div className='w-[85%] mx-auto py-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className=' relative w-full md:w-[40%]'>
            <input
              onChange={(e) => setsearch(e.target.value)}
              type="text"
              placeholder='I am looking for... '
              className=' w-full cursor-text focus:ring-0 text-sm font-light rounded-lg  border-gray-300 outline-gray-700'
            />
            <IoIosSearch className=' absolute top-3 right-2' />
          </div>

          <select
            onChange={(e) => setSortOption(e.target.value)}
            className=' w-full md:w-[30%] focus:ring-0 text-sm font-light rounded-lg cursor-pointer border-gray-300 outline-gray-700'>
            <option value="default"> Default </option>
            <option value="high-price">High Price</option>
            <option value="low-price">Low Price</option>
          </select>
        </div>
        <section className='py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {
            displayPage.filter((product) => {
              if (search == "") return product;
              if (product.title.toLowerCase().includes(search.toLowerCase()))
                return product
            })
              .map(product =>
                <div key={product.id} className=' px-2 md:px-7 py-5 border border-red-200 flex flex-col items-center justify-center gap-4'>
                  <Productcart product={product} />
                </div>)
          }
        </section>

        <div className="w-full mx-auto flex items-center">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel="Prev"
            nextLabel="Next"
            containerClassName=' paginationBttns '
          />
        </div>
      </div>
    </Helmet>
  )
}

export default AllFoods
