import React from 'react'
import { AiTwotoneHeart } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

function Main({ img, location, id, way, price }) {

    const navigate=useNavigate()

const detailHandler=()=>{
    navigate(`/detail/${id}`)
}


    return (
        <div className='conteiner'>


            <div key={id} className='w-auto h-86 flex flex-col items-start justify-start  relative'>
                <AiTwotoneHeart className='absolute top-3 right-2 w-5 h-5' />
                <img onClick={detailHandler} className='w-full h-48 rounded-xl' src={img} alt="" />
                <h1>{location}</h1>
                <a href="" className=' text-gray-400'>{way}</a>
                <a href="" className=' text-gray-400'>
                    <b className='text-black mr-1'>
                        {price}
                    </b>
                    night
                </a>


            </div>


        </div>
    )
}

export default Main
