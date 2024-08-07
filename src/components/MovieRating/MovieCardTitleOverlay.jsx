import { CardTitleOverlay } from './MovieCard.styles';
import { Typography } from '@mui/material';

function MovieCardTitleOverlay({ title }) {
  return (
    <CardTitleOverlay>
      <Typography variant="h5" component="div" sx={{ color: 'white' }}>
        {title}
      </Typography>
    </CardTitleOverlay>
  );
}

export default MovieCardTitleOverlay;