import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
           <div className="item">
            <img src="img/eng.png" alt="" height="20px" width="auto"/>
            {/* <img src="img/french.png" alt="" /> */}
            <KeyboardArrowDownIcon />
           </div>
           <div className="item">
            <span>CAD</span>
            <KeyboardArrowDownIcon />
           </div>
           <div className="item">
            <Link className="link" to="/products/1">Women</Link>
           </div>
           <div className="item">
            <Link className="link" to="/products/2">Men</Link>
           </div>
           <div className="item">
            <Link className="link" to="/products/3">Children</Link>
           </div>
        </div>

        <div className="center">
          <Link className='link' to="/">WAYNESTORE</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/products/1">Home Page</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Stores</Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      
      {open && <Cart />}
    </div>
  )
}

export default Navbar