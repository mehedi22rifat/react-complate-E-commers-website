import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa';
import Aos from 'aos';
import { Link } from 'react-router-dom';


const title = "Our Products";

const ProductData = [
{
imgUrl: 'src/assets/images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '185.00',
id: 1,
},
{
imgUrl: 'src/assets/images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '152.00',
id: 2,
},
{
imgUrl: 'src/assets/images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '192.00',
id: 3,
},
{
imgUrl: 'src/assets/images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '120.00',
id: 4,
},
{
imgUrl: 'src/assets/images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '189.00',
id: 5,
},
{
imgUrl: 'src/assets/images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '194.00',
id: 6,
},
{
imgUrl: 'src/assets/images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '100.00',
id: 7,
},
{
imgUrl: 'src/assets/images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '52.00',
id: 8,
},
]

const CetagoryShowCase = () => {
    const [jsonData, setJsonData] = useState(ProductData);
    // console.log(jsonData)
    const [filteredItems, setFilteredItems] = useState(ProductData);
    console.log(filteredItems)
    const [selectedCategory, setSelectedCategory] = useState("all"); // Default: All
    const [sortOption, setSortOption] = useState("default"); // Default sorting option
  
    useEffect(()=>{
      Aos.init() 
    },[])
    
    // useEffect(() => {
    //   // Fetch data from the backend
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch("products.json");
    //       const data = await response.json();
    //       setJsonData(data);
    //       setFilteredItems(data); // Initially, display all items
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };
  
    //   fetchData();
    // }, []); // Empty dependency array ensures this effect runs once when the component mounts
  
    const filterItems = (category) => {
      const filtered =
        category === "all"
          ? jsonData
          : jsonData.filter((item) => item.cate === category);
  
      setFilteredItems(filtered);
      setSelectedCategory(category);
    };
  
    const showAll = () => {
      setFilteredItems(jsonData);
      setSelectedCategory("all");
    };
  
    const handleSortChange = (option) => {
      setSortOption(option);
  
      
  // Logic for sorting based on the selected option
  let sortedItems = [...filteredItems];

  switch (option) {
    case "A-Z":
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "Z-A":
      sortedItems.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "low-to-high":
      sortedItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price)); // Convert to number
      break;
    case "high-to-low":
      sortedItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price)); // Convert to number
      break;
      case "default":
        sortedItems = [...ProductData]; // Reset to the original order
        break;
      default:
        // Do nothing for other cases
        break;
  }
  
      setFilteredItems(sortedItems);
    };
  


  return (
    <div
     data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
    className="max-w-screen-2xl bg-gradient-to-r from-cyan-100 to-red-100 container mx-auto px-4 pb-16">
      <h2 className="text-4xl font-bold capitalize text-center py-20">
        {title}
      </h2>

      {/* products card */}
      <div>

        <div className="flex flex-col px-10 md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
        <div className="flex font-bold flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap">
          <button
            onClick={showAll}
            className={selectedCategory === "all" ? "active" : "hover:text-orange-500"}
          >
            All Products
          </button>
          <button
            onClick={() => filterItems("Shoes")}
            className={selectedCategory === "Shoes" ? "active" : "hover:text-orange-500"}
          >
            Shoes
          </button>
          <button
            onClick={() => filterItems("Bags")}
            className={selectedCategory === "Bags" ? "active" : "hover:text-orange-500"}
          >
            Bags
          </button>
          <button
            onClick={() => filterItems("Phones")}
            className={selectedCategory === "Phones" ? "active" : " hover:text-orange-500"}
          >
            Phones
          </button>
          <button
           onClick={() => filterItems('Beauty')}
          className={selectedCategory === "Beauty" ? "active" : "hover:text-orange-500"}
          >
            Beauty
          </button>
        </div>

        <div className="flex justify-end mb-4 rounded-sm">
        <div className="bg-black p-2 ">
        <FaFilter className="text-white h-4 w-4"/>
        </div>
          <select
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className="bg-black text-white px-2 py-1 rounded-sm" 
          >
            <option value="default"> Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
        </div>

        {/* product card */}
        <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center shadow-sm">
      {filteredItems.map((item) => (
        <div className='card p-4 bg-base-100 shadow-xl' key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.imgUrl}
              alt={item.title}
              className="mx-auto w-full rounded-md hover:scale-105 transition-all duration-300"
            />
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>

            <div className="flex justify-between">
              <p className="text-black/50">{item.cate}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  
  )
}

export default CetagoryShowCase