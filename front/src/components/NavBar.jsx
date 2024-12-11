import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipeSlice';
import { toggleDrawer } from '../redux/slices/uiSlice';
import { AppBar, Toolbar, Button, IconButton, useMediaQuery, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import logo from "../Group 89.png"
import { Link } from 'react-router-dom';
const menuItems = [
  { text: 'Home', link: '/' },
  { text: 'Recipes', link: '/recipes' },
  { text: 'Add Recipe', link: '/add-recipe' },
];

const NavBar = () => {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.ui.isDrawerOpen);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ backgroundColor: 'white'}}>
      {!isMobile && (
        <AppBar
          position="fixed"
          sx={{
            background: '#002366',
            borderRadius: '0 0 15px 15px',
            boxShadow: '-2px 6px 14px 0px rgba(0,0,0,0.75)',
            height: 80,
            justifyContent: 'center',
          }}
        >
          <Toolbar>
            <div style={{flexGrow: 1.5}}>
                <img src={logo} alt="chefIT" style={{ height: 63}} />
            </div>
            <Box sx={{ flexGrow: 10, display: 'flex', justifyContent: 'flex-start' }}>
              <Button color="inherit">Recipes</Button>
              <Button color="inherit">Add Recipe</Button>
            </Box>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Register</Button>
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {isMobile && (
        <div style={{backgroundColor: "rgba(255, 255, 255, 0.4)"}}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ position: 'absolute', top: 10, left: 10 }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
            <List>
              {menuItems.map((item, index) => (
                <ListItem button key={index}>
                    <Link href={item.link} color="inherit">{item.text}</Link>
                </ListItem>
              ))}
            </List>
            <Link>Profile</Link>
            <Link>Logout</Link>
          </Drawer>
        </div>
      )}
    </Box>
  );
};

export default NavBar;
