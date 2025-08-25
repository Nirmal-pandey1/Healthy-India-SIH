import React from 'react'
import '../App.css'
import logo from '../assets/logo2.png'
function Header() {
  return (
          <div className='shadow fixed top-0 w-full bg-white'>
          <nav className='center py-3 flex items-center'>
              <div>
                  <img src={logo} alt="" className="w-auto  h-13" />
              </div>
    <div class="flex justify-end items-center px-6 py-3 space-x-6 font-semibold text-[1.1rem] ml-auto">
      
      
      <a href="#" className="hover:text-[#0f80a5]">Home</a>
      <a href="#" className="hover:text-[#0f80a5]">About Us</a>

    
        <div className="flex items-center rounded-full max-w-4xl p-3 shadow ">
      
    
      <div className="flex items-center space-x-2 px-3 ">
        <select className="bg-transparent focus:outline-none text-gray-700">
          <option>Delhi NCR</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Chennai</option>
        </select>
      </div>

    
      <div className="border-l h-6 mx-3"></div>

      <div className="flex items-center w-full">
      
        <svg xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-500 mx-2" 
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
        </svg>
      
        <input 
          type="text" 
          placeholder="Search Condition, Treatment, Doctor or Hospital"
          className="w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400"
        />
      </div>

    </div>



      <a href="#" className="px-4  flex items-center py-2 border rounded-full bg-[#0f80a5] text-white ">Login</a>
      <a href="#" className="px-4 py-2  flex items-center border rounded-full bg-[#0f80a5] text-white">Sign Up</a>
    </div>
          </nav>
          </div>
    
  )
}

export default Header