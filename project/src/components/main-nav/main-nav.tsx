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
          <a href="/" className="main-nav__link">
            <span className="main-nav__number">00</span>Home
          </a>
        </li>
        <li className="main-nav__item">
          <a href="/destination" className="main-nav__link">
            <span className="main-nav__number">01</span>Destination
          </a>
        </li>
        <li className="main-nav__item">
          <a href="/crew" className="main-nav__link">
            <span className="main-nav__number">02</span>Crew
          </a>
        </li>
        <li className="main-nav__item">
          <a href="/technology" className="main-nav__link">
            <span className="main-nav__number">03</span>Technology
          </a>
        </li>
      </ul>
    </nav>
  );
}

type MainNavProps = {
  className?: string;
}

export default MainNav;
