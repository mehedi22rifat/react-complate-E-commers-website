import React from "react";
import CountUp from 'react-countup';

const AboutUs = () => {
    const countList = [
        {
        iconName: 'icofont-users-alt-4',
        count: '12600',
        text: 'Marchant Enrolled',
        },
        {
        iconName: 'icofont-graduate-alt',
        count: '30',
        text: 'Certified Courses',
        },
        {
        iconName: 'icofont-notification',
        count: '100',
        text: 'Rewards and GitCards',
        },
        ]
        
  return (

   <div className=" bg-gradient-to-r from-cyan-100 to-red-100 px-4">

<section className=" dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <div className="">
      <div className="">
      <h1 className="text-lg text-slate-500">Why choose us</h1>
      <h1 className="font-bold text-3xl lg:text-5xl">Beacame a Marchent</h1>
        <p className=" mt-4 text-gray-500 dark:text-gray-300">
        Take course on your nay Monotonectally restore corporate relationships vis-a-vis wireless systems. Monotonectally provide access to world-class materials for standardized initiatives. Uniquely evisculate pandemic core competencies with revolutionary process. dolor sit amet, consectetur adipisicing
        </p>
      </div>
      <div className="grid lg:py-12 gap-8 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-8 ">
        <div>
          <img className="object-cover rounded-xl aspect-square h-[500px]" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt />
          
        </div>

{/* skills */}
        <div>
        <div className="w-full mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 justify-items-center">
      <div className="flex flex-col w-full gap-2 p-4 text-center bg-white border-2 border-gray-600 rounded-lg shadow-lg dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mx-auto text-violet-500 dark:text-violet-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
        <p className="text-3xl font-medium text-gray-900 dark:text-gray-300">
         <span><CountUp end={12600} /></span>+
        </p>
        <p className="leading-relaxed dark:text-gray-400">Marchant Enrolled</p>
      </div>
      <div className="flex flex-col w-full gap-2 p-4 text-center bg-white border-2 border-gray-600 rounded-lg shadow-lg dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mx-auto text-violet-500 dark:text-violet-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
        <p className="text-3xl font-medium text-gray-900 dark:text-gray-300">
        <span><CountUp end={40} /></span>+
        </p>
        <p className="leading-relaxed dark:text-gray-400">Certified Courses</p>
      </div>
      <div className="flex lg:mt-14 flex-col w-full gap-2 p-4 text-center bg-white border-2 border-gray-600 rounded-lg shadow-lg dark:bg-gray-800">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 mx-auto text-violet-500 dark:text-violet-200" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx={9} cy={7} r={4} />
          <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
        </svg>
        <p className="text-3xl font-medium text-gray-900 dark:text-gray-300">
        <span><CountUp end={30} /></span>+
        </p>
        <p className="leading-relaxed dark:text-gray-400">Users</p>
      </div>
      <div className="flex lg:mt-14 flex-col w-full gap-2 p-4 text-center bg-white border-2 border-gray-600 rounded-lg shadow-lg dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mx-auto text-violet-500 dark:text-violet-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <p className="text-3xl font-medium text-gray-900 dark:text-gray-300">
        <span><CountUp end={100} /></span>+
        </p>
        <p className="leading-relaxed dark:text-gray-400">Rewards and GitCards</p>
      </div>
    </div>
  </div>

  <button href="#_" className="box-border relative z-30 inline-flex items-center lg:mt-14 mt-5 justify-center w-full px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0" />
  <span className="relative z-20 flex items-center text-sm">
    <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    Apply 
  </span>
</button>

        </div>
       
      </div>
    </div>
  </div>
</section>





    {/* <div className="">
        <h1 className="text-lg text-slate-500 py-12">Why choose us</h1>
         <h1 className="font-bold text-5xl">Beacame a Marchent</h1>
          <p>Take course on your nay Monotonectally restore corporate relationships vis-a-vis wireless systems. Monotonectally provide access to world-class materials for standardized initiatives. Uniquely evisculate pandemic core competencies with revolutionary process. dolor sit amet, consectetur adipisicing</p>
         <a href="#_" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
  <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
  </span>
  <span className="relative">Apply</span>
</a>

    </div> */}



 
</div>


  );
};

export default AboutUs;
