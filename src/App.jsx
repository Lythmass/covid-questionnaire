import { StartingPage, PersonalInfo, CovidState } from '@/pages';
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
