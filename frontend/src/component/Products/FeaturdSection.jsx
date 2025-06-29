import React from 'react'
import { HiArrowPathRoundedSquare, HiOutlineCreditCard, HiShoppingBag } from 'react-icons/hi2'

const FeaturdSection = () => {
  return (
    <section className="py-16 px-4 px-4 bg-white">
        <div className="container mx-auto grid gri-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiShoppingBag className='text-xl' />
                </div>
                <h4 className="tracking-tighter mb-2">FREE INTERNASHIONAL SHIPPING</h4>
                <p className="text-gray-600 text-sm tracking-tighter">
                    Onall orders over $100.00
                </p>
            </div>
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiArrowPathRoundedSquare className='text-xl' />
                </div>
                <h4 className="tracking-tighter mb-2">45 DAYS RETURN</h4>
                <p className="text-gray-600 text-sm tracking-tighter">
           Money back guarantee
                </p>
            </div>
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full mb-4">
                    <HiOutlineCreditCard className='text-xl' />
                </div>
                <h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
                <p className="text-gray-600 text-sm tracking-tighter">
                    100% secured checkout process
                </p>
            </div>
        </div>
    </section>
  )
}

export default FeaturdSection
