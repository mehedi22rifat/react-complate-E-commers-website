import React, { useEffect, useState } from 'react'

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


  return (
    <div
    className={`header ${headerFixed ? 'fixed' : ''}`}
    >
        
        Navbar


    </div>
  )
}

export default Navbar