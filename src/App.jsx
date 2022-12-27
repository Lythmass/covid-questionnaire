import StartingPage from './pages/StartingPage/StartingPage';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import CovidState from './pages/CovidState/CovidState';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StartingPage />} />
      <Route path='/personal-info' element={<PersonalInfo />} />
      <Route path='/covid-state' element={<CovidState />} />
    </Routes>
  );
};

export default App;
