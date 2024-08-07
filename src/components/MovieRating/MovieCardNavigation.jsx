import { NavigationContainer, StyledIconButton, NavText } from './MovieCard.styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function MovieCardNavigation({ handlePrev, handleNext, currentIndex, listLength }) {
  return (
    <NavigationContainer>
      <StyledIconButton onClick={handlePrev}>
        <ArrowBackIosNewIcon />
      </StyledIconButton>
      <NavText variant="body1">
        {`Movie ${currentIndex + 1} of ${listLength}`}
      </NavText>
      <StyledIconButton onClick={handleNext}>
        <ArrowForwardIosIcon />
      </StyledIconButton>
    </NavigationContainer>
  );
}

export default MovieCardNavigation;