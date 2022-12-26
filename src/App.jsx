import StartingPage from './pages/StartingPage/StartingPage';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StartingPage />} />
      <Route path='/personal-info' element={<PersonalInfo />} />
    </Routes>
  );
};

export default App;
