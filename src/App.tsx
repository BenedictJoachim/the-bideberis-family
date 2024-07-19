import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Photography from './pages/Photography';
import Fitness from './pages/Fitness';
import Arts from './pages/Arts';
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
