import React from 'react';
import bgimg from '../../../assets/images/bg-img/07.jpg';

const Register = () => {
  return (
    <div className="relative h-full py-28 bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
      {/* Simple black overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className=" relative z-10 container mx-auto flex justify-between items-center flex-col gap-7 md:flex-row h-full px-5 md:px-10">

        {/* Left Side - Text Section */}
        <div className="text-white w-full md:w-1/2 space-y-6 animate-fadeInLeft">
           <p className="font-bold text-lg text-amber-500 space-x-4">SAVE THE DAY</p>
          <h1 className="text-4xl md:text-5xl font-bold transition-transform duration-1000 ease-out transform hover:scale-110">
            Join Our Community
          </h1>
          <p className="text-lg md:text-xl transition-opacity duration-1000 ease-in-out">
            Sign up today and get access to exclusive deals, offers, and much more!
            Enjoy a seamless shopping experience with us.
          </p>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg animate-fadeInRight">
          <h2 className="text-2xl font-bold text-center mb-6 transition-transform duration-1000 ease-out transform hover:scale-110">
            Create an Account
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 transition duration-300 ease-in-out"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 transition duration-300 ease-in-out"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-600 transition duration-300 ease-in-out"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
              Register
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;
