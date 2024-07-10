import React from 'react';
// images
import Logo from '../assets/logo.png';
import cvFile from '../assets/CV.pdf';

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img src={Logo} alt='' className='w-44' />
        </a>
        {/* button */}
        <a href={cvFile} className='btn btn-sm flex items-center' download='CV - Hafiz Haekal.pdf'>Download CV</a>
      </div>
    </div>
  </header>
  );
};

export default Header;
