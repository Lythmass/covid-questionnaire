import StartingPage from './pages/StartingPage/StartingPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StartingPage />} />
    </Routes>
  );
};

export default App;
