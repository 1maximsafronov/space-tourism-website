import './app.scss';
import PageHeader from 'components/page-header/page-header';
import HomePageContent from 'components/home-page-content/home-page-content';

function App(): JSX.Element {
  return (
    <div className="page page--home">
      <PageHeader />
      <main className="page-content">
        <HomePageContent />
      </main>
    </div>
  );
}

export default App;
