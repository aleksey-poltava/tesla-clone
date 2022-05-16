import Menu from './Menu';
import '../styles/header.scss';
import RightMenu from './RightMenu';
import {scroller} from 'react-scroll';

function Header({refs, data}) {
  const scrollToSection = () => {
    scroller.scrollTo('start', {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className='container start'>
      <a onClick={scrollToSection} href='#'>
        <img src='/images/logo.svg' alt='logo'  />
      </a>
      <Menu data={data} />
      <RightMenu />
    </div>
  )
}

export default Header;