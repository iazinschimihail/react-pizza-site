import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import backIMG from "../mes.png"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Rating = ({ value }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(value)) {
      stars.push(<StarIcon key={i} sx={{ color: '#FFC500' }} />);
    } else if (i < value) {
      stars.push(<StarHalfIcon key={i} sx={{ color: '#FFC500' }} />);
    } else {
      stars.push(<StarOutlineIcon key={i} sx={{ color: '#FFC500' }} />);
    }
  }

  return <Box sx={{ display: 'flex', alignItems: 'center' }}>{stars}</Box>;
};

const RecipeCard = ({ title, author, rating, image }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (

    <Card sx={{ width: !isMobile ? '490px' : "258px", margin: '0 auto', backgroundColor: '#f8f8f8', display: "flex" }}>
      <CardMedia component="img"  sx={{
          width: isMobile ? '130px' : '250px',
          height: isMobile ? '130px' : '250px'
        }} image={backIMG} alt={title} />
      <Box>
      <CardContent sx={{alignItems: "center ", display:'flex', flexDirection: "column", justifyContent:"center", textAlign:"center"}}>
        <Typography variant="h5" gutterBottom sx={{fontSize: "20px !important"}}>
          {title}
        </Typography>
        <Rating value={rating} />
        <Typography color="textSecondary" >
            Nr. ratinguri
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Author: {author}
        </Typography>
      </CardContent>
      </Box>
    </Card>
  );
};

export default RecipeCard;
