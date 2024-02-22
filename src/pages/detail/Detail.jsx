import React from 'react'
import { useParams } from 'react-router-dom'
import { datas } from '../../components/products/Products'

function Detail() {
const {id}=useParams()

const dataa=datas.find(item=>item.id===id)
console.log(dataa)


    return (
        <div>
            <h1>{dataa.location}</h1>
            <img src={dataa.img} alt="" />
            <h1 className='text-2xl'>detail{id}</h1>
        </div>
    )
}

export default Detail
