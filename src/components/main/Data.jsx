import React from 'react'
import { AiTwotoneHeart } from "react-icons/ai";
import Main from './Main';
import { datas } from '../products/Products';

function Data() {




    return (
        <div className='flex'>

{datas.map((item, index) =>


 
            <Main key={item.id} {...item}/> 
            )}


        </div>
    )
}

export default Data
