import Logo from 'assets/shared/logo.svg';
import './page-header.scss';
import MainNav from 'components/main-nav/main-nav';

function PageHeader():JSX.Element {
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <p className="page-header__logo">
          <img className='page-header__logo-image' src={Logo} alt="Space tourism logo" />
        </p>

        <MainNav className='page-header__nav'/>
      </div>
    </header>
  );
}

export default PageHeader;
