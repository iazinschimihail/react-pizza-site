import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        border: '2px solid #0066cc',
        borderRadius: '8px',
        padding: '16px',
        width: '100%',
        maxWidth: isMobile ? '90%' : '800px',
        margin: '0 auto',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        flexWrap: 'wrap',
        gap: '16px',
        marginTop: 10
      }}
    >
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{ color: 'green', width: '100%', textAlign: isMobile ? 'center' : 'left' }}
      >
        Contact us
      </Typography>
      <TextField label="First Name" variant="outlined" fullWidth sx={{ flex: '1 1 45%' }} />
      <TextField label="Last Name" variant="outlined" fullWidth sx={{ flex: '1 1 45%' }} />
      <TextField label="Email" variant="outlined" fullWidth sx={{ flex: '1 1 100%' }} />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ flex: '1 1 100%' }}
      />
      <Button
        variant="contained"
        color="success"
        sx={{
          alignSelf: 'flex-end',
          flex: isMobile ? '1 1 auto' : '0 1 auto',
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
