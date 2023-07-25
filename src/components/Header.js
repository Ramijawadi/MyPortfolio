import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll'

const Header = () => {

  let style = {

    height :'12vh',
    width:'10vw'
  }
  return(
  <header className='py-8'>

    <div className='container mx-auto'>


      <div className='flex  justify-between items-center'>
        {/* logo */}
        <a href='#'>

          <img style={style}  src={Logo} alt='logo' />
        </a>
        <Link to='contact' className='btn w-[160px]  h-[40px] flex items-center text-sm tracking-wide font-light justify-center font-serif'>Work With Me</Link>
      </div>

    </div>

  </header>
  )
};

export default Header;
