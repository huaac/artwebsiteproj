import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Menu} from "lucide-react";
import {Palette, MapPin, Brush, PartyPopper, CreditCard, PenTool} from "lucide-react";
import { useMediaQuery } from '@mui/material';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState({});
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsButtonVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleDropdown = (tab) => {
    setIsDropdownOpen((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };

  const DrawerList = (
    <Box className='box' sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
      <List>
        <ListItem className="navbar-item dropdown" sx={{ display: 'block' }}>
          <ListItemButton onClick={() => toggleDropdown("classes")} sx={{ justifyContent: 'flex-start' }}> 
            <Palette className="icon" />
            Art Classes
          </ListItemButton>
          {isDropdownOpen.classes && (
            <List className='items' sx={{ pl: 2 }}>
              <ListItem>
                <ListItemText primary="Regular Classes" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Adult Classes" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Charter Schools" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Girl & Boy Scout Classes" />
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem className="navbar-item dropdown" sx={{ display: 'block' }}>
          <ListItemButton onClick={() => toggleDropdown("locations")} sx={{ justifyContent: 'flex-start' }}>
            <MapPin className="icon" />
            Locations
          </ListItemButton>
          {isDropdownOpen.locations && (
            <List className='items' sx={{ pl: 2 }}>
              <ListItem>
                <ListItemText primary="La Mesa" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Santee" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bonita" />
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem className="navbar-item dropdown" sx={{ display: 'block' }}>
          <ListItemButton onClick={() => toggleDropdown("camps")} sx={{ justifyContent: 'flex-start' }}>
            <Brush className="icon" />
            Art Camps
          </ListItemButton>
          {isDropdownOpen.camps && (
            <List className='items' sx={{ pl: 2 }}>
              <ListItem>
                <ListItemText primary="Summer Camps" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Spring Camps" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Holiday Camps" />
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem className="navbar-item dropdown" sx={{ display: 'block' }}>
          <ListItemButton onClick={() => toggleDropdown("parties")} sx={{ justifyContent: 'flex-start' }}>
            <PartyPopper className="icon" />
            Art Parties
          </ListItemButton>
          {isDropdownOpen.parties && (
            <List className='items' sx={{ pl: 2 }}>
              <ListItem>
                <ListItemText primary="Birthday Parties" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Paint Parties" />
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem className="navbar-item dropdown" sx={{ display: 'block' }}>
          <ListItemButton onClick={() => toggleDropdown("tuition")} sx={{ justifyContent: 'flex-start' }}>
            <CreditCard className="icon" />
            Tuition
          </ListItemButton>
          {isDropdownOpen.tuition && (
            <List className='items' sx={{ pl: 2 }}>
              <ListItem>
                <ListItemText primary="Tuition Policies" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pay Tuition" />
              </ListItem>
              <ListItem>
                <ListItemText primary="FAQs" />
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem className="navbar-item dropdown" sx={{ display: 'block' }}>
          <ListItemButton onClick={() => toggleDropdown("about")} sx={{ justifyContent: 'flex-start' }}>
            <PenTool className="icon" />
            About
          </ListItemButton>
          {isDropdownOpen.about && (
            <List className='items' sx={{ pl: 2 }}>
              <ListItem>
                <ListItemText primary="Mission Statement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Instructors" />
              </ListItem>
              <ListItem>
                <ListItemText primary="FAQs" />
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
    </Box>
  );

  const isMobileOrTablet = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      {isMobileOrTablet && isButtonVisible && (
        <Button 
          onClick={toggleDrawer(true)} 
          style={{ position: 'fixed', top: 25, right: 16, color: 'black' }}
        >
          <Menu />
        </Button>
      )}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
