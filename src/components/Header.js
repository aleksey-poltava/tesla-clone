import Menu from './Menu';
import '../styles/header.scss';
import RightMenu from './RightMenu';

function Header() {
  return (
    <div className='container'>
      <a>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu />
      <RightMenu />
    </div>
  )
}

export default Header;