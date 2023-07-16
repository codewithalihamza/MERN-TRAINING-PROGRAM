import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ListDB from '../data/ProductsData';


const ProductDetailPage = () => {
    let {id} = useParams();
    let navigate = useNavigate()

    let fData = ListDB.find(x => x.id == id)


  return (
    <div>

        <a className='btn btn-warning my-4'
        onClick={()=>navigate('/products')}>Back to Home</a>

      <h1>Product Detail Page</h1>
      <h1>Id : {id}</h1>
      <h1>Name : {fData.pName}</h1>
      <h1>price : {fData.price}</h1>
    </div>
  )
}

export default ProductDetailPage
