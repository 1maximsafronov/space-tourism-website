import './destination-page-content.scss';
import Moon from 'assets/destination/image-moon.png';
import PageHeader from 'components/page-header/page-header';

function DestinationPage():JSX.Element {
  return (
    <div className="page page--destination">
      <PageHeader />
      <main className="page-content destination-content">
        <h1 className="destination-content__title">
          <span className="destination-content__title-number">01</span>
        Pick your destination
        </h1>
        <p className="destination-content__picture">
          <img className='destination-content__img' src={Moon} alt="Moon" width="170" height="170"/>
        </p>
        <div className="destination-content__info">
          <div className="destination-content__tabs">
            <button className="destination-content__tab destination-content__tab--active" type="button">
              Moon
            </button>
            <button className="destination-content__tab" type="button">
              Mars
            </button>
            <button className="destination-content__tab" type="button">
              Europa
            </button>
            <button className="destination-content__tab" type="button">
              Titan
            </button>
          </div>
          <h2 className="destination-content__name">Moon</h2>
          <p className="destination-content__desc">
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help
  regain perspective and come back refreshed. While you’re there, take in some history
  by visiting the Luna 2 and Apollo 11 landing sites.
          </p>
          <div className="destination-content__stats">
            <div className="destination-content__stats-item">
              <p className="destination-content__stats-key">Avg. distance</p>
              <p className="destination-content__stats-value">384,400 km</p>
            </div>
            <div className="destination-content__stats-item">
              <p className="destination-content__stats-key">Est. travel time</p>
              <p className="destination-content__stats-value">3 days</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DestinationPage;
