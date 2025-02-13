import React from 'react'
import Helmet from '../components/Helmet'
import Commensection from '../components/UI/Commensection/Commensection'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <Helmet title="Register">
      <Commensection title="Register" />
      <div className='w-[85%] mx-auto my-10'>
        <form className='bg-[#FDE4E4] rounded p-3 lg:w-[30%] mx-auto my-8'>
          <div className=' mb-4 border-b-[1px] border-gray-300'>
            <input required type="text" placeholder='Full name' className='py-2 border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
          </div>
          <div className=' mb-4 border-b-[1px] border-gray-300'>
            <input required type="text" placeholder='Email' className='py-2 border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
          </div>
          <div className=' mb-4 border-b-[1px] border-gray-300'>
            <input required type="password" placeholder='Password' className='py-2 border-none bg-transparent font-normal focus:ring-0 focus:outline-none' />
          </div>
          <div className='text-center'>
            <button className=' my-3 py-1 px-3 bg-red-600 rounded-md text-white font-normal hover:bg-red-400 duration-200' type='submit'> Sign Up </button>
          </div>
        </form>
        <div className='text-center font-normal'>Already have an account ? <Link to="/login" className='text-blue-700'>Login</Link></div>
      </div>
    </Helmet>
  )
}

export default Register
