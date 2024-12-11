import React from 'react';
import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";
import { Container } from '@mui/material';

function BarSide() {
  return (
    <Container>
      <Sidebar width={"270px"}>
      <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      <Menu subHeading="HOME">
        <MenuItem link="/" badge="true">
          Home
        </MenuItem>
        <MenuItem>Recipes</MenuItem>
        <MenuItem>Add recipe</MenuItem>
        
      </Menu>
   
    </Sidebar>
      {/* Other components */}
    </Container>
  );
}

export default BarSide;