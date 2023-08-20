import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Background/Background.css'
import { BackgroundContext } from '../Context/BackGroundProvider/BackGroundProvider';
const Header = () => {
  const {user,logOut}=useContext(BackgroundContext)
  console.log(user,'i am user')
    return (
     
        
        <div className=" navbar ">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
  <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
  </div>
  <div className="flex-none">
  <div className='flex items-center'>
    <Link className='mr-3 font-extrabold text-xl' to='/'>Home</Link>
    <Link className='mr-3 font-extrabold text-xl ' to='/destination'>Destination</Link>
    <Link className='mr-3 font-extrabold text-xl' to='/blog'>Blog</Link>
    <Link className='mr-3 font-extrabold text-xl' to='/contact'>Contact</Link>
   {
   user?.uid?<><img className='h-8 w-8 rounded-md' src={user.photoURL} alt="" /><button onClick={logOut} className='mr-3  font-extrabold text-xl'>LogOut</button></>:<> <Link className='mr-3  font-extrabold text-xl' to='/signin'>LogIn</Link>
   <Link className='mr-3  font-extrabold text-xl' to='/signup'>SignUp</Link></>
   }
  </div>
</div>
     </div>   
    );
};

export default Header;