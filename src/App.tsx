import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:title" element={<CategoryPage />} />
    </Routes>
  );
};
export default App;
