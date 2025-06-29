import React from 'react'
import ProductDetails from '../component/Products/ProductDetails'
import Hero from '../component/Layout/Hero'
import GenderCollectionSection from '../component/Products/GenderCollectionSection'
import NewArrivals from '../component/Products/NewArrivals'
import ProductGrid from '../component/Products/ProductGrid'
import FeaturedCollection from '../component/Products/FeaturedCollection'
import FeaturdSection from '../component/Products/FeaturdSection'
import { useDispatch, useSelector} from 'react-redux'
import  { useState, useEffect } from 'react';
import { fetchProductsByFilters } from '../redux/slices/productsSlice'; 


import axios from 'axios';
export const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect (() => {
    // Fetch products for a specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );
    // Fetch best seller product
    const fetchBestSeller = async () => {
      try {
const response = await axios.get(
  `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
);
setBestSellerProduct(response.data);
      }catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      <h2 className="text-3xl text-center font-bold mb-4">
        Best Seller
      </h2>
     {bestSellerProduct ? (<ProductDetails productId={bestSellerProduct._id} />) : (
      <p className='text-center'>Loading best seller product ...</p>
     )}





     <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold mb-4">
        Top Wears for Women
      </h2>
      <ProductGrid products={products} loading={loading} error = {error} />
     </div>
     <FeaturedCollection />
     <FeaturdSection />
    </div>
  )
}

export default Home
