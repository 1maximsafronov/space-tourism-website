import './home-page-content.scss';

function HomePageContent():JSX.Element {
  return (
    <div className="home-page-content">
      <div className="home-page-content__wrapper">
        <h1 className="home-page-content__title">
            So, you want to travel to
          <span className="home-page-content__big-title">Space</span>
        </h1>
        <p className="home-page-content__desc">
        Let’s face it; if you want to go to space, you might
        as well genuinely go to outer space and not hover
        kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world
        experience!
        </p>
      </div>
      <a href="/destination" className="home-page-content__explore">
            Explore
      </a>
    </div>
  );
}

export default HomePageContent;
