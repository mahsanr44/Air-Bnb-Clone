import React from 'react'
import AirBnbImg from "./../Images/airbnb.png"
const Navbar = () => {
  return (
    <div className='py-5 px-12 md:px-24 shadow-md flex justify-between'>
      <img src={AirBnbImg} alt="AirBnb" />
      <p className='font-bold text-gray-500'>Sign Up</p>
    </div>
  )
}

export default Navbar
