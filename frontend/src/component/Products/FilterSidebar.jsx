import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {
    const[searchParams, setSearchParams] = useSearchParams();
    const navigate =  useNavigate();
     const [filter, setFilter] = useState({
category: "",
gender: "",
color:"",
size:[],
material:[],
brand:[],
minPrice: 0,
maxPrice:100,


});
const [priceRange, setPriceRange] = useState([0,100]);
const categories = ["Top Wear", "Bottom Wear"];

const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
];
const sizes = ["XS", "S", "M", "L", "XL", "XXl"];
const materials=["Cotton","Wool","Denim","Polyester","Silk","Linen","Viscose","Fleece"];
const brands =["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista","ChickStyle"];
const genders =["Men", "Women"];

useEffect (()=> {
    const params = Object.fromEntries([...searchParams]);

setFilter({
        category: params.category || "",
        gender: params.gender || "",
        color: params.color || "",
        size: params.size ? params.size.split(",") : [],
        material: params.material ? params.material.split(",") : [],
        brand: params.brand ? params.brand.split(",") : [],
        minPrice: params.minPrice || 0,
        maxPrice: params.maxPrice || 100,

    });
    setPriceRange([0, params.maxPrice || 100]);
}, [searchParams]);

const handleFilterChange = (e) => {
    const{name, value, checked, type} = e.target;
 let newFilters = { ...filter };

 if(type === "checkbox"){
    if(checked){
        newFilters[name] = [...(newFilters[name] || []), value];

    }else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
    }
 }else {
    newFilters[name]= value;
 }
 setFilter(newFilters)
updateURLParams(newFilters);
};
const updateURLParams =(newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
        if(Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
            params.append(key, newFilters[key].join(","));
        }
        else if (newFilters[key]){
            params.append(key, newFilters[key]);
        }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
};
const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice])
    const newFilters = {...filter, minPrice: 0, maxPrice: newPrice};
    setFilter(filter);
    updateURLParams(newFilters);
}


  return (
    <div className="p-4 ">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
{/* Category Filter */}
<div className="mb-6">
    <label className='block text-gray-600 font-medium mb-2'>Category</label>
    {categories.map((category) => (
     <div key={category}  className='flex items-center mb-1'>
        <input type='radio' name='category' value={category}    onChange={handleFilterChange} 
        checked={filter.category === category }
        className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
        <span className="text-gray-700">{category}</span>
     </div>
    ))}
</div>
{/* Gender Filters */}
<div className="mb-6">
    <label className='block text-gray-600 font-medium mb-2'>Gender</label>
    {genders.map((gender) => (
     <div key={gender} className='flex items-center mb-1'>
        <input type='radio' name='gender'
        value={gender} 
       onChange={handleFilterChange}
          checked={filter.gender === gender }
         className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
        <span className="text-gray-700">{gender}</span>
     </div>
    ))}
</div>
{/* Color Section */}
<div className="mb-6">
    <label className='block text-gray-600 font-medium mb-2'>
        Color
    </label>
    <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
<button key={color}
value={color}
onClick={handleFilterChange}
  
name='color'
className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${filter.color === color ? "ring-2 ring-blue-500" : ""}`}
  style={{ backgroundColor: color.toLowerCase()}}>
 
</button>
        ))}
    </div>
</div>
{/* Size Filter */}
<div className="mb-6">
    <label className='block text-gray-600 font-medium mb-2'>Size</label>
    {sizes.map((size) => (
        <div key={size} className='flex items-center mb-1'>
            <input type="checkbox" name='size'
            value={size} 
       onChange={handleFilterChange}
       checked={filter.size.includes(size)}
            className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
<span className='text-gray-700'>{size}</span>
        </div>
    ))}
</div>
{/* material Filter */}
<div className="mb-6">
    <label className='block text-gray-600 font-medium mb-2'>Material</label>
    {materials.map((material) => (
        <div key={material} className='flex items-center mb-1'>
            <input type="checkbox" name='material' 
            value={material} 
       onChange={handleFilterChange}
        checked={filter.material.includes(material)}
            className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
<span className='text-gray-700'>{material}</span>
        </div>
    ))}
</div>
{/* brand Filter */}
<div className="mb-6">
    <label className='block text-gray-600 font-medium mb-2'>Brand</label>
    {brands.map((brand) => (
        <div key={brand} className='flex items-center mb-1'>
            <input type="checkbox" name='brand' 
            value={brand} 
       onChange={handleFilterChange}
        checked={filter.brand.includes(brand)}
            className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
<span className='text-gray-700'>{brand}</span>
        </div>
    ))}
</div>
{/* 
Price Range */}
<div className="mb-8">
    <label className='block text-gray-600 font-medium mb-2'>Price Range</label>
<input type="range" name='priceRange' min={0} max={100} 
value={priceRange[1]}
onChange={handlePriceChange}
className='w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer '/>
<div className="flex justify-between text-gray-600 mt-2">
    <span>$0</span>
    <span>${priceRange[1]}</span>
</div>

</div>


    </div>
  )
}

export default FilterSidebar
