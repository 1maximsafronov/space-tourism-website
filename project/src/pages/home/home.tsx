import { Link } from 'react-router-dom';
import './home-page.scss';
import PageHeader from 'components/page-header/page-header';

function HomePage():JSX.Element {
  return (
    <div className="page home-page">
      <PageHeader />
      <main className="page-content home-page__content">
        <div className="home-page__wrapper">
          <h1 className="home-page__title">
            So, you want to travel to
            <span className="home-page__big-title">Space</span>
          </h1>
          <p className="home-page__desc">
            Let’s face it; if you want to go to space, you might
            as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world
            experience!
          </p>
        </div>
        <Link to="/destination" className="home-page__explore-btn">
            Explore
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
