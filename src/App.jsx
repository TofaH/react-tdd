// This example is in src/App.jsx
import { Routes, Route } from 'react-router-dom';
import BuilderPage from './builder-page';
import Registration from './views/Registration/Registration';
import MovieRating from './components/MovieRating/MovieRating';

function App() {
  
  return (
    <>
      <Routes>
        // Add route here
        <Route path="/rate-movies/" element={<MovieRating />} />
        <Route path="/builder-demo" element={<BuilderPage />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  )
}

export default App