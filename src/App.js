
import { Route, Routes } from 'react-router-dom';
import { Main } from './Components/Main/Main';
import { Country } from './Components/Country/Country';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/country/:countryName" element={<Country />} />
    </Routes>
  )
}

export default App;
