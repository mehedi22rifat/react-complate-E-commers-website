
import React, { useState } from "react";
import productData from '../../../../public/products.json'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import SelectedCetagory from "./SelectedCetagory";

const Banner = () => {
  const title = (
    <h1>
      Search Your One Form <span className="text-yellow-500">Thousend </span>of
      Products
    </h1>
  );
  const doc = "we have the largest collection product";

  const bannerList = [
    {
      iconName: "icofont-users-alt-4",
      text: "1.5 Million Customers",
    },
    {
      iconName: "icofont-notification",
      text: "More then 2000 Marchent",
    },
    {
      iconName: "icofont-globe",
      text: "Buy Anything Online",
    },
  ];

  //  
  const [searchInput,setSearchInput] = useState("")
  const [filtredProduct,setFiltredProduct] = useState(productData)
  console.log(productData)

  const handleSearch = (e) =>{
     const serachThem = e.target.value;
    //  console.log(serachThem)
       setSearchInput(serachThem)

      //  filter
      const filterSearch = productData.filter((product) => product.name.toLocaleLowerCase().includes(serachThem).
      toLocaleLowerCase());

      setFiltredProduct(filterSearch)
  }


//  responsve limit
const useResponsiveLimit = () => {
  const [limit, setLimit] = useState(20); // Default to large screen (20)

  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setLimit(20); // Large screen
      } else if (width >= 768) {
        setLimit(10); // Medium screen
      } else {
        setLimit(5); // Small screen
      }
    };

    updateLimit(); // Set the initial limit
    window.addEventListener('resize', updateLimit); // Update limit on resize

    return () => window.removeEventListener('resize', updateLimit); // Cleanup on unmount
  }, []);

  return limit;
};

const limit = useResponsiveLimit();

  return (

    <div>
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1684487747385-442d674962f2"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <img
          src
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute space-y-10 inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white font-bold md:px-44 text-center">
            {" "}
            {title}
          </h1>
          {/* search fuild */}
          <div className="flex relative rounded-md w-full px-4 max-w-3xl">
            <SelectedCetagory select={'all'} className="text-red-400"/>
            <input
              type="text"
              name="q"
              id="query"
              value={searchInput}
              onChange={handleSearch}
              placeholder="Search here"
              className="w-full p-3  border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none "
            />
            <button className="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-full">
              <span>search</span>
              <span className="hidden md:block">
                <svg
                  className="text-gray-200 h-5 w-5 p-0 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </span>
            </button>
          </div>

          {/*  */}
          <p className="text-2xl text-slate-300 mt-4 text-center">{doc}</p>
       
          {/* ul list search product title */}
          <ul className="flex flex-wrap justify-center gap-4 mt-4">
            {searchInput &&
              filtredProduct
                .slice(0, limit) // Use the limit based on screen size
                .map((product, i) => (
                  <li
                    key={i}
                    className="bg-white text-black p-1 md:p-4 rounded-lg shadow-lg animate-fadeIn hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
                  >
                    <Link to={`/shop/${product.id}`} className="block text-center">
                      {product.name}
                    </Link>
                  </li>
                ))}
          </ul>
       
        </div>
      </div>
    </div>
  );
};

export default Banner;
