import { styled } from '@mui/system';
import { Box, Card, IconButton, Typography } from '@mui/material';

export const StyledCard = styled(Card)({
  borderRadius: '8px',
  backgroundColor: 'var(--material-theme-white, #FFF)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  width: '100%',
  maxWidth: '1002px',
  marginTop: '70px',
  margin: '0 auto', // Center the card
});

export const CardTitleOverlay = styled(Box)({
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'left',
});

export const RatingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  backgroundColor: '#F5F5F5', // Very light grey background
  padding: '10px', // Add some padding for better spacing
  borderRadius: '8px', // Optional: Add border radius for rounded corners
});

export const NavigationContainer = styled(Box)({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const StyledIconButton = styled(IconButton)({
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export const NavText = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.8)', // Slightly whiter font color
});