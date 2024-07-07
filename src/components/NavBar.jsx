import React from 'react';
import logo from '../assets/Amazon-Logo.png';
import { CiLocationOn } from 'react-icons/ci';
import { CiMenuBurger } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';

function NavBar() {
  return (
    <>
      <div className="navbar bg-accent">
        <div className="flex-1 ms-2 gap-7">
          <Link className="hover:opacity-70" to={'../'}>
            <img className="w-20 " src={logo} alt="" />
          </Link>
          <div className="flex flex-col justify-center items-start">
            <div className="text-white">Deliver to</div>
            <div className="text-white flex justify-center items-center">
              <CiLocationOn /> <span className="font-bold"> Saudi Arabia</span>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col justify-center items-start">
            <Link to={'../cart'}>
              <div className="text-white flex justify-center items-center mx-4 cursor-pointer hover:opacity-50">
                <CiShoppingCart size={30} />
                Cart
              </div>
            </Link>
          </div>
          <Link to={'../signup'}>
            <div className="text-white flex justify-center items-center mx-4 cursor-pointer hover:opacity-50">
              SignUp
            </div>
          </Link>
          <Link to={'../login'}>
            <div className="text-white flex justify-center items-center mx-4 cursor-pointer hover:opacity-50">
              Login
            </div>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              {/* <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                /> */}
              <CiMenuBurger className="text-white" size={30} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Cart</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar bg-[#232F3E] h-[0.5rem]">
        <ul className="text-white flex items-center gap-4">
          <li className="flex justify-center items-center gap-2 hover:border p-2 cursor-pointer">
            <CiMenuBurger />
            All
          </li>
          <li className="hover:border p-2 cursor-pointer">Today's Deals</li>
          <li className="hover:border p-2 cursor-pointer">Customer Service</li>
          <li className="hover:border p-2 cursor-pointer">Registry</li>
          <li className="hover:border p-2 cursor-pointer">Gift Cards</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
