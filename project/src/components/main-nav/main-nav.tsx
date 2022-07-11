import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useState } from 'react';
import './main-nav.scss';

function MainNav(props:MainNavProps):JSX.Element {
  const {className} = props;
  const [isClosed, setClosed] = useState(true);

  const onMenuTogglerClick = () => {
    setClosed((prev) => !prev);
  };

  return (
    <nav className={cn(className, 'main-nav', {'main-nav--closed': isClosed} )}>
      <button className="main-nav__toggler" type="button" onClick={onMenuTogglerClick}>
        <span className="visually-hidden">Open/Close menu</span>
      </button>
      <ul className="main-nav__list main-nav__list--closed">
        <li className="main-nav__item main-nav__item--active">
          <Link to="/" className="main-nav__link">
            <span className="main-nav__number">00</span>Home
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/destination" className="main-nav__link">
            <span className="main-nav__number">01</span>Destination
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/crew" className="main-nav__link">
            <span className="main-nav__number">02</span>Crew
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/technology" className="main-nav__link">
            <span className="main-nav__number">03</span>Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}

type MainNavProps = {
  className?: string;
}

export default MainNav;
