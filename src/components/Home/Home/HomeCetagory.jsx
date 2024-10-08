import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWindows } from "react-icons/fa";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCetagory = () => {
  return (
    <div className="py-20 bg-slate-200">
      <div className="text-center space-y-3">
        <h1 className="text-xl text-amber-500 font-momo"> {subTitle}</h1>
        <h1 className="text-4xl font-bold text-center">{title}</h1>
      </div>
      <div className="grid pt-10 lg:grid-cols-3 gap-6 px-2 md:grid-cols-2 grid-cols-1">
        {categoryList.map((item, i) => (
          <Link to={'/shop'} key={i}>
          <div>
            <div className="relative w-full max-w-md mx-auto bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl shadow-lg">
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={item.imgUrl}
                  alt={item.imgAlt}
                  className=" h-full w-full relative transition-transform duration-300 ease-in-out transform hover:scale-x-125 hover:scale-y-125"
                />
              </div>
              <div>
                <div className="flex justify-between px-7 p-2">
                  <i className="text-xl bg-orange-400 p-2 rounded-full">
                    {" "}
                    <FaWindows />{" "}
                  </i>
                  <h1 className="text-xl text-white">{item.title}</h1>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-14">
        <Link to={"/shop"}>
          <a className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-orange-500 border-2 border-orange-500 rounded-full hover:text-white group hover:bg-gray-50">
            <span className="absolute left-0 block w-full h-0 transition-all bg-orange-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="relative">{btnText}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomeCetagory;
