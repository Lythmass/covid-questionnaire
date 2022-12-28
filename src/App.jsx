import {
  StartingPage,
  PersonalInfo,
  CovidState,
  Vaccinated,
  CovidPolicy,
} from '@/pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StartingPage />} />
      <Route path='/personal-info' element={<PersonalInfo />} />
      <Route path='/covid-state' element={<CovidState />} />
      <Route path='/vaccinated' element={<Vaccinated />} />
      <Route path='/covid-policy' element={<CovidPolicy />} />
    </Routes>
  );
};

export default App;
