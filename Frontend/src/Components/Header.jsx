import React from 'react'
import '../App.css'
import logo from '../assets/logo2.png'
function Header() {
  return (
        <div className='shadow'>
        <nav className='center py-3'>
            <div>
                <img src={logo} alt="" className="w-auto h-13" />
            </div>
        </nav>
        </div>
    
  )
}

export default Header