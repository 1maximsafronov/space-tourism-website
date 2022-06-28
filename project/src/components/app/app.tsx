import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import PageHeader from 'components/page-header/page-header';
import HomePageContent from 'components/home-page-content/home-page-content';
import DestinationPageContent from 'components/destination-page-content/destination-page-content';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="page page--home">
        <PageHeader />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePageContent />}/>
            <Route path="/destination" element={<DestinationPageContent />}/>
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
