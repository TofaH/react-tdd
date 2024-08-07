import { Snackbar, Alert } from '@mui/material';

function MovieCardSnackbar({ snackbarOpen, handleCloseSnackbar, snackbarMessage }) {
  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
}

export default MovieCardSnackbar;