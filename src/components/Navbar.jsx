import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart, Bell, UserCircle, MagnifyingGlass, ShoppingBagOpen } from "phosphor-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <a className='bag' to="/"> <ShoppingBagOpen size={40} weight="bold"/> </a>
        <a className="heading">Meraki</a>
       <form className="d-flex my-2" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"> <MagnifyingGlass weight="bold"/> </button>
      </form>
        <div className="links">
            <Link to="/"> Shop </Link>
            <Link to="/cart"> <ShoppingCart size={32} weight="bold"/> </Link>
            <Link to="/"> <Bell size={32} weight="bold" /> </Link>
            <Link to="/"> <UserCircle size={32} weight="bold" /> </Link>

        </div>
    </div>
  )
}

export default Navbar
