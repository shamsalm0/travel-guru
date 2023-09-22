import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Background/Background.css'
import { BackgroundContext } from '../Context/BackGroundProvider/BackGroundProvider';

const Header = () => {
  const { user, logOut } = useContext(BackgroundContext);
  console.log(user, 'i am user');
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  }

  return (
    <div className="navbar">
      <div className="flex-none"></div>
      <div className="lg:flex-1 lg:ml-24">
        <input type="text" placeholder="Search" className="input input-bordered text-sm w-16 h-8 lg:w-30 lg:h-12 lg:text-lg md:w-auto" />
      </div>
      <div className="menu-container dropdown">
        <button className='lg:hidden' onClick={handleDisplay}>menu</button>
        {display && (
          <div className='menu-links'>
            <ul>
              <li><Link className='mr-2 lg:mr-3  lg:block font-extrabold text-xs lg:text-xl' to='/'>Home</Link></li>
              <li><Link className='mr-2 lg:mr-3  lg:block font-extrabold text-xs lg:text-xl' to='/destination'>Destination</Link></li>
              <li><Link className='mr-2 lg:mr-3  lg:block font-extrabold text-xs lg:text-xl' to='/blog'>Blog</Link></li>
              <li><Link className='mr-2 lg:mr-3  lg:block font-extrabold text-xs lg:text-xl' to='/contact'>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex-none">
        <div className='flex items-center'>
          <Link className='mr-2 lg:mr-3 hidden lg:block font-extrabold text-xs lg:text-xl' to='/'>Home</Link>
          <Link className='mr-2 lg:mr-3 hidden lg:block font-extrabold text-xs lg:text-xl' to='/destination'>Destination</Link>
          <Link className='mr-2 lg:mr-3 hidden lg:block font-extrabold text-xs lg:text-xl' to='/blog'>Blog</Link>
          <Link className='mr-2 lg:mr-3 hidden lg:block font-extrabold text-xs lg:text-xl' to='/contact'>Contact</Link>
          {user?.uid ?
            <>
              <img className='lg:h-8 lg:w-8 h-4 w-4 rounded-md' src={user.photoURL} alt="" />
              <button onClick={logOut} className='lg:mr-3 mr-2 font-extrabold text-xs lg:text-xl'>LogOut</button>
            </>
            :
            <>
              <Link className='mr-3  font-extrabold text-xl' to='/signin'>LogIn</Link>
              <Link className='lg:mr-3 mr-2 font-extrabold text-xs lg:text-xl' to='/signup'>SignUp</Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
