import React from 'react'
import doctor from '../assets/doctor 2.png'
import '../App.css'
function Hero() {
  return (
    <>
    <div className='center shadow '>
    <div className=' flex items-center  '>
        <div className='flex flex-col gap-4 '>
            <h2 className='font-bold text-cyan-700 text-7xl '>#KnowYourHealthCard</h2>
            <p className='font-semibold text-[#484646]'>We help you access government health benefits, know your hospital options, and secure your family’s health.</p>
        </div>
        <div className='ml-auto'>
            <img src={doctor} alt="" width={"500px"} className='h-auto' />
        </div>
        
    </div>
    
    </div>
    </>
  )
}

export default Hero