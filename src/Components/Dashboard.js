import React from 'react';
import './Dashbord.css';
import { Avatar } from '@mui/material'; 
import NotificationsIcon from '@mui/icons-material/Notifications';
const Dashboard = () => {
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

export default Dashboard;