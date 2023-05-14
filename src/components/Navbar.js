import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            EN
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
         
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-[#396C03] font-mono">FoodTime</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
    <li><a>Home</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us</a></li>       
      <li tabIndex={0}>
        <a>
        EN
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>

      </li>
    </ul>
  </div>
  <div className="navbar-end text-white">
    <a className="btn rounded-full btn-sm bg-[#396C03]">Login</a>
    <p className="mx-3 p-3 relative text-white rounded-full bg-[#396C03]">      
 <p className='text-white'><AiOutlineShoppingCart /></p>  
         </p>
          <p className='mx-2 absolute text-sm -mt-8 text-white rounded-full bg-[#FF8B00] h-5 w-6 '><span className='mx-2'>2</span> </p>
  </div>
</div>
<hr />
        </div>
    );
};

export default Navbar;