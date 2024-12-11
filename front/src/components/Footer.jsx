import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import backIMG from "../footer.png"

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundImage:`url(${backIMG})`,
        height: isMobile ? '120px' : '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '16px',
        padding: isMobile ? '16px' : '0',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        marginTop: 10
      }}
    >
      <IconButton color="inherit" href="https://instagram.com">
        <InstagramIcon fontSize={isMobile ? 'medium' : 'large'} />
      </IconButton>
      <IconButton color="inherit" href="https://facebook.com">
        <FacebookIcon fontSize={isMobile ? 'medium' : 'large'} />
      </IconButton>
      <IconButton color="inherit" href="https://youtube.com">
        <YouTubeIcon fontSize={isMobile ? 'medium' : 'large'} />
      </IconButton>
      <IconButton color="inherit" href="https://twitch.tv">
        <TwitterIcon fontSize={isMobile ? 'medium' : 'large'} />
      </IconButton>
    </Box>
  );
};

export default Footer;
