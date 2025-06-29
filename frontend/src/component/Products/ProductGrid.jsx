import React from 'react'
import { Link } from 'react-router-dom'



const ProductGrid = ({ products, loading , error }) => {

    if (loading) {
        return <p>Loading....</p>;
    }

    if (error){
        return <p>Error: {error}</p>
    }


return (
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
 {products.map((products, index) => (
    <Link key={index} to={`/products/${products._id}`} className='block'>
<div className="bg-white p-4 rounded-lg">
    <div className="w-full h-96 mb-4">
        <img src={products.images[0].url}
         alt={products.images[0].altText || products.name} 
         className="w-full h-full object-cover rounded-lg" />
    </div>
    <h3 className="text-sm mb-2 ">
        {products.name}
    </h3>
    <p className="text-gray-500 font-medium text-sm tracking-tighter">
        ${products.price}
    </p>
</div>

    </Link>
 ))}
 
 
 </div>
  )
}

export default ProductGrid
