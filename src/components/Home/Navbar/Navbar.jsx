import React, { useEffect, useState } from 'react'
import logo from '../../../assets/images/logo/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [headerFixed,setHeaderFixed] = useState(false);

//  header fixed logic
  const handleHeaderFixed = () =>{
    if(window.scrollY > 200){
        setHeaderFixed(true)
    }else{
        setHeaderFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderFixed);
    return () => {
      window.removeEventListener('scroll', handleHeaderFixed);
    };
  }, []);

//   links here
  const NavLinks = <> 
      <Link className='nav-link' to={'/'}> <li><a>Home</a></li></Link>
      <Link to={'shop'}> <li><a>Shop</a></li></Link>
      <Link to={'/blog'}> <li><a>Blog</a></li></Link>
      <Link to={'/about'}> <li><a>About</a></li></Link>
      <Link to={'/contact'}> <li><a>Contact</a></li></Link>
  </>


  return (
    <div className={`navbar fixed container mx-auto font-bold md:text-white ${headerFixed ? 'bg-purple-700 animate-none duration-0' : ''} z-30 section-container shadow-xl w-full`}>
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {NavLinks}
        </ul>
      </div>
      <img className='hover:scale-105 transition-all duration-300 shadow-sm' src={logo} alt="" />
    </div>
  
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {NavLinks}
      </ul>
    </div>
  
    <div className="navbar-end">
      <a className="btn">SignUp</a>
    </div>
  </div>
  

 
  )
}

export default Navbar

