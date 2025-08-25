import React from 'react'
import { FaRegHospital } from "react-icons/fa";
import ServiceCard from './ServicesCard';
import { FaCalculator } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";


import { BsFillPersonVcardFill } from "react-icons/bs";
function Services() {
  return (
    <>
    <div className='center flex flex-col h-[20vh] gap-10  pt-10  '>
        <div>
        <h2 className='font-bold text-2xl'>Our Services</h2>
        </div>
        <div className='flex justify-between'>
       <ServiceCard icon={FaRegHospital} title="Find Hospital"/>
       <ServiceCard icon={BsFillPersonVcardFill} title="Health Card Balance"/>
       <ServiceCard icon={FaCalculator} title="Smart Cost Estimator"/>
       <ServiceCard icon={FaUserDoctor} title="Specialist Finder"/>
       </div>
    </div>
 </> 
  )
}

export default Services