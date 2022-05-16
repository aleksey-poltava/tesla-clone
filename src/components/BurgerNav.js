import '../styles/burger-nav.scss'
import Close from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import {useSelector} from 'react-redux';
import { scroller } from "react-scroll";

function BurgerNav({isBurgerOpen, openThisMenu}) {
  const cars = useSelector(selectCars);

  const scrollToSection = (id) => {
    openThisMenu();
    scroller.scrollTo(`nav-${id}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  let style = {};
  if (isBurgerOpen) {
    style =  {transform: 'translateX(0)'};
  } else {
    style =  {transform: 'translateX(100%)'};
  }

  return (
    <div className='burgerNav' style={style}>
      <div className='closePlaceholder'>
        <div className='closeIcon'><Close onClick={openThisMenu} /></div>
      </div>
      {cars && cars.map((car, index) =>          
          <li key={index}><a href='#' onClick={() => scrollToSection(index)}>{car}</a></li>
      )}
      <li><a href='#'>Existing Inventory</a></li>
      <li><a href='#'>Used Inventory</a></li>
      <li><a href='#'>Trade-In</a></li>
      <li><a href='#'>Cybertruck</a></li>
      <li><a href='#'>Roadster</a></li>
      <li><a href='#'>Utilities</a></li>
      <li><a href='#'>Test Drive</a></li>  
    </div>
  )
}

export default BurgerNav;