import React, { useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const RecipeList = ({ recipes }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{backgroundColor: "#00236D", height: !isMobile ? 464 : 230, alignItems: "center", display:"flex", flexDirection: "column", justifyContent: "center"}}>
        <Typography variant="h3" sx={{color: "white", paddingBottom: "40px"}}>Top rated recipes</Typography>
        <div>
            {isMobile ? (
        <Swiper modules={[Navigation, Pagination]}  navigation={true} className="mySwiper" slidesPerView={1} pagination={{ clickable: true }}           spaceBetween={16} 
>

          {recipes.map((recipe) => (
            <SwiperSlide key={recipe._id}>
              <RecipeCard {...recipe} />
              
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </div>
      )}
      </div>
    </Box>
    
  );
};

export default RecipeList;
