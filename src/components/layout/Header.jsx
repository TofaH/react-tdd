import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'var(--material-theme-white, #FFF)',
  boxShadow: 'none',
  borderBottom: '1px solid #C4C8BA', // Added borderBottom
});

const LoginButton = styled(Button)({
  color: 'var(--Interactive-Color-2, #175E5D)',
  fontFamily: 'Averta, sans-serif',
  fontWeight: 300,
  fontSize: '18px', // Smaller font size
});

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: '#000',
            fontFamily: 'Averta, sans-serif',
            fontWeight: 300,
            fontSize: '18px', // Smaller font size
          }}
        >
          Movie Rating
        </Typography>
        <LoginButton>Login</LoginButton>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;