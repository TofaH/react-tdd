import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Rating, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const StyledCard = styled(Card)({
  borderRadius: '8px',
  backgroundColor: 'var(--material-theme-white, #FFF)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  width: '100%',
  maxWidth: '1002px',
  marginTop: '70px',
  margin: '0 auto', // Center the card
});

const CardTitle = styled(Typography)({
  fontSize: '22px',
  color: 'var(--M3-sys-light-on-surface, #1B1C18)',
  textAlign: 'left',
  lineHeight: 1,
});

const CardText = styled(Typography)({
  fontSize: '14px',
  color: 'var(--M3-sys-light-on-background, #1B1C18)',
  letterSpacing: '0.25px',
  lineHeight: '20px',
  textAlign: 'left',
});

const RatingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '33px',
});

const ElevateEarnings = styled(Box)({
  borderRadius: '0px 0px 4px 4px',
  backgroundColor: 'rgba(240, 240, 240, 1)',
  color: 'var(--Text-Color-3, #FFF)',
  textAlign: 'center',
  margin: '53px 0 -19px',
  padding: '35px 70px 14px',
  fontFamily: 'Averta, sans-serif',
  fontWeight: 300,
  fontSize: '24px',
  '@media (max-width: 991px)': {
    margin: '40px 0 10px',
    padding: '0 20px',
  },
});

const NavigationContainer = styled(Box)({
  position: 'absolute',
  top: '10px',
  left: '0',
  right: '0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
});

function MovieCard() {
  return (
    <StyledCard>
      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" height="140" image="https://cdn.builder.io/api/v1/image/assets/TEMP/a2e04ee335fceec5fef82bb98e7628a7a0512e87cfc80aa7377b29384c2c9905?apiKey=42132d5119ec452a91b400671c3a91a2&&apiKey=42132d5119ec452a91b400671c3a91a2" alt="Movie poster" />
        <NavigationContainer>
          <IconButton>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="body1" sx={{ color: 'white' }}>
            Movie 1 of 18
          </Typography>
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </NavigationContainer>
      </Box>
      <CardContent>
        <CardTitle gutterBottom variant="h5" component="div">
          Computer Science
        </CardTitle>
        <CardText variant="body2" color="text.secondary">
          <Box fontWeight="fontWeightMedium" display="inline">
            What You Will Do:
          </Box>
          <br />
          Innovate and optimize digital solutions, employing technical expertise to drive technological advancements.
        </CardText>
        <CardText variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <Box fontWeight="fontWeightMedium" display="inline">
            Lifestyle Possible:
          </Box>
          <br />
          Enjoy a comfortable life with some indulgences and financial security.
        </CardText>
      </CardContent>
      <RatingContainer>
        <Typography variant="body2" color="text.primary" gutterBottom>
          Rate this movie based on your interest
        </Typography>
        <Rating name="movie-rating" defaultValue={2.5} precision={0.5} />
      </RatingContainer>
      <ElevateEarnings>Elevate Your Earnings</ElevateEarnings>
    </StyledCard>
  );
}

export default MovieCard;