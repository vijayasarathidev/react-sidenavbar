import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import Sidebar from './Sidebar';

/*const [isOpen, setIsOpen] = useState(false);*/
/*const toggleSidebar = () => setIsOpen(!isOpen);*/



const Notifications = { padding:'10px',fontSize: '2rem'}


function MenuAppBar () {

  const [showSideNav, setShowSideNav] = useState(false);
function handleMenuClick() {
  setShowSideNav(!showSideNav)
}

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon onClick={handleMenuClick} ></MenuIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AnyVcharge
          </Typography>
          <NotificationsIcon style={Notifications}/>
          <AccountCircleIcon style={Notifications}  />
        </Toolbar>
      </AppBar>
    </Box>
    {showSideNav && (
    <Sidebar/>
    )}
    
    </div>
  );
}
export default MenuAppBar;
