import React from "react";

const Slider = ({img,title}) => {
  return (
    <div>
      <section className="bg-slate-100 dark:bg-gray-900">
        <div className="flex flex-col md:flex-row justify-between gap-10 px-10 py-12 items-center">
         <div className="h-96 rounded-lg">
         <img
            className=" w-full sm:w-full md:max-w-lg h-44 rounded-lg flex-1"
            src={img}
            alt
          />
         </div>

          <div className="mt-8 flex-1 ">
            <p className="text-5xl font-semibold text-blue-500 ">“</p>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl ">
             {title}
            </h1>
            <p className=" mt-6 text-gray-500 dark:text-gray-400 ">
              “ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Tempore quibusdam ducimus libero ad tempora doloribus expedita
              laborum saepe voluptas perferendis delectus assumenda rerum, culpa
              aperiam dolorum, obcaecati corrupti aspernatur a. ”
            </p>
            <h3 className="mt-6 text-lg font-medium text-blue-500">
              Mia Brown
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Marketing Manager at Stech
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
