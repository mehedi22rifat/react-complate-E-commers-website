import React from 'react'
import img1 from '../../../assets/images/app/01.jpg'
import img2 from '../../../assets/images/app/02.jpg'

const DawnloadApp = () => {
  return (
    <div className='bg-slate-100'>
      <div className="relative overflow-hidden border-b w-full dark:border-gray-700 dark:bg-gray-900">
  <div className="px-6 py-8 sm:px-6 sm:py-20">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-base text-yellow-400 dark:text-pink-300 tracking-wide uppercase">Unlock Your Potential
        Today</h2>
        <button className='btn text-xl bg-white font-bold border-orange-400 mt-4 mb-8 w-96 border-2'>Sing up for free</button>
      <p className="mt-1 text-5xl font-extrabold dark:text-gray-100 sm:tracking-tight">
        Discover <br/>
        <span className="px-2 py-1 relative inline-block"><svg className="stroke-current bottom-0 absolute text-yellow-300 -translate-x-2" viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" strokeWidth={12} fill="none" fillRule="evenodd" strokeLinecap="round" /></svg><span className="relative">Your True Potential</span></span>
      </p>
      <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Take the leap and unleash your
        capabilities. Experience
        one week of unlimited access on us and witness the transformation.</p>
        <div className='flex flex-col md:flex-row gap-6 px-4 justify-center items-center py-10'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>
    </div>
  </div>
  <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] lg:z-10 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
    <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7">
    </circle>
    <defs>
      <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
        <stop stopColor="#3b82f6" />
        <stop offset={1} stopColor="#1d4ed8" />
      </radialGradient>
    </defs>
  </svg>
</div>

    </div>
  )
}

export default DawnloadApp