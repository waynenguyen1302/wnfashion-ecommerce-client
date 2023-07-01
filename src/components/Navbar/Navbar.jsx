import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = ({scrollDirection}) => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  const [openNavbar, setOpenNavbar] = useState(false);


  const handleClick = () => {
    setOpenNavbar(!openNavbar);
  };

  const handleOverlayClick = () => {
    setOpenNavbar(false);
  };

  
  
  return (
    <div className={`navbar ${ scrollDirection === "down" ? "hide" : "show"}`} >
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/eng.png" alt="" height="auto" width="30px"/>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>CAD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className ="link" to="/categories/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/categories/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/categories/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">WayneStore</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        <button className="mobile-nav-btn" onClick={handleClick}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
        </button>
        {
          openNavbar ? 
          <>
            <div className={`mobile-nav-overlay ${openNavbar ? 'active' : ''}`} onClick={handleOverlayClick}></div>
            <div className={`mobile-nav-container ${openNavbar ? 'active' : ''}`}>
              <div className={`mobile-nav-close-btn ${openNavbar ? 'active' : ''}`} onClick={handleClick} >
                <HighlightOffOutlinedIcon />
              </div>          
              <div className="mobile-nav-content" onClick={handleClick}>
                <span className="mobile-nav-item">
                  <Link className="link" to="/products">Store</Link>
                </span>
                <span className="mobile-nav-item">
                  <Link className="link" to="/">About</Link>
                </span>
                <span className="mobile-nav-item">
                  <Link className="link" to="/">Contact</Link>
                </span>
              </div>          
            </div>
          </> :
          <></>
        }
        
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;