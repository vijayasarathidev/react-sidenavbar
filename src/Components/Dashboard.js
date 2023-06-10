import React from 'react';
import './Navbar.css';
import { Avatar } from '@mui/material'; // Create a CSS file named Navbar.css for styling
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Dashboard</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." typeof='search' />
      </div>
      <div className="navbar-icons">
        <NotificationsIcon className='navbar-icon'/>
        <Avatar className='navbar-avatar'/>
      </div>
    </nav>
  );
};

export default Navbar;