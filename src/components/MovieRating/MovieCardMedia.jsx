import { Box, CardMedia, CircularProgress } from '@mui/material';

function MovieCardMedia({ imageUrl, loading, setLoading }) {
  return (
    <>
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      )}
      <CardMedia
        component="img"
        height="350"
        image={imageUrl}
        alt="Movie poster"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}

export default MovieCardMedia;