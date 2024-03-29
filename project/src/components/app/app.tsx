import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import HomePage from 'pages/home/home';
import DestinationsPage from 'pages/destinations/destinations';
import CrewPage from 'pages/crew/crew';
import TechnologyPage from 'pages/technology/technology';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/destination" element={<DestinationsPage />}/>
        <Route path="/crew" element={<CrewPage />}/>
        <Route path="/technology" element={<TechnologyPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
