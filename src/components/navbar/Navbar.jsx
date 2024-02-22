import React from 'react'
import rr from '../../assets/react.svg'
import { GiIsland, GiSurfBoard } from "react-icons/gi";
import { FaRegSnowflake } from "react-icons/fa";
import { PiSwimmingPoolDuotone } from "react-icons/pi";
import { SiAlienware } from "react-icons/si";
import { FaShop } from "react-icons/fa6";
import { RiGridFill } from "react-icons/ri";
import { TbCamper } from "react-icons/tb";
import { GiWaveSurfer } from "react-icons/gi";
import { FaPersonThroughWindow } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { GiSettingsKnobs } from "react-icons/gi";
import { FiToggleRight } from "react-icons/fi";

function Navbar() {
  return (
    <nav className=' relative w-full      h-16 flex items-center   px-4 py-2     '>
      <div className=" flex items-center     justify-between    overflow-x-auto    ">

        {/* ------------------------------------------------------------------island */}
        <div className='w-24 h-auto flex flex-col items-center justify-center  '>
          <GiIsland className='w-6 h-6' />
          <a href="" className='  text-xs text-gray-400' >Islands</a>
        </div>

        {/* ----------------------------------------------------------snow */}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <FaRegSnowflake className='w-6 h-6' />
          <a href="" className='  text-xs text-gray-400' >Arctic</a>
        </div>

        {/* ----------------------------------------------------------------------pools */}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <PiSwimmingPoolDuotone />
          <a href="" className='  text-xs text-gray-400' > pools</a>
        </div>

        {/* ----------------------------------------------OMG */}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <SiAlienware />
          <a href="" className='  text-xs text-gray-400' >OMG!</a>

        </div>


        {/* -----------------------------------------------------------------tropic */}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <GiIsland />
          <a href="" className='  text-xs text-gray-400' >Tropical</a>
        </div>

        {/* -----------------------------------------------------------------bus */}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <FaShop />
          <a href="" className='  text-xs text-gray-400' >Shop Fruits</a>
        </div>

        {/* -------------------------------------------------------------casss */}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <RiGridFill />
          <a href="" className='  text-xs text-gray-400' >Casss restangles</a>
        </div>
        {/* -------------------------------------------------------------camper */}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <TbCamper />
          <a href="" className='  text-xs text-gray-400' >Campers</a>
        </div>
        {/* -------------------------------------------------------------surfer*/}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <GiWaveSurfer />
          <a href="" className='  text-xs text-gray-400' >Surfing</a>
        </div>
        {/* -------------------------------------------------------------View*/}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <FaPersonThroughWindow />
          <a href="" className='  text-xs text-gray-400' >Amazing views</a>
        </div>
        {/* -------------------------------------------------------------Design*/}
        <div className='w-24 h-auto flex flex-col items-center justify-center '>

          <HiHomeModern />
          <a href="" className='  text-xs text-gray-400' >Design</a>
        </div>



      </div>


      {/* ----------------------------------------------------------right */}
      <div className='   w-[30%] h-16 flex items-center  sticky bg-white top-0 right-0 justify-between  p-4   '>
        <div className='flex items-center justify-center gap-2 border rounded-2xl py-2 px-4'>

          <button className=' rotate-90 font-extrabold'>
            <GiSettingsKnobs className='w-5  h-5'/>
          </button>
          <h1 className='text-lg'>Frame </h1>
        </div>



        <div className='flex items-center justify-center gap-2'>
          <h1 className=' text-lg'>display total before taskes</h1>
            
          <FiToggleRight className='w-7 h-7'/>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
