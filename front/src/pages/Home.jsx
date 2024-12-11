import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipeSlice';
import RecipeList from '../components/RecipeList';
import NavBar from '../components/NavBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import BarSide from '../components/SideBar';
import bigLogo from "../Group 90.png"
import { Box } from '@mui/material';
import backIMG from "../mes.png"
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const { recipes, loading } = useSelector((state) => state.recipes);
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{
        backgroundColor: 'white'

    }}>
      <NavBar/>
      {!isMobile && (
        <Box
        style={{
          height: '100vh',
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex"
        }}
        sx={{
          backgroundImage:`url(${backIMG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "385px",
          }}>
      
        <Box
              component="img"
              sx={{
              height: 154,
              }}
              alt="LOGO"
              src={bigLogo}
          /> 
        </Box>
      )}
      {isMobile && (
        <Box sx={{width: "100%", height: "60vh", alignItems: "center", justifyContent: "center", display:"flex"}}>
        <Box
            component="img"
            sx={{
            height: 120,
            }}
            alt="LOGO"
            src={bigLogo}
        />
        </Box>
      )}
      {loading ? <p>Loading...</p> : <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;
