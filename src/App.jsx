// This example is in src/App.jsx
import { Routes, Route } from 'react-router-dom';
import BuilderPage from './builder-page';
import Registration from './views/Registration/Registration';
import MovieRating from './views/MovieRating/MovieRating';
import MovieProvider from './contexts/MovieProvider';

function App() {
  
  return (
    <>
      <Routes>
        // Add route here
        <Route path="/rate-movies/" element={<MovieProvider><MovieRating /></MovieProvider>} />
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  )
}

export default App