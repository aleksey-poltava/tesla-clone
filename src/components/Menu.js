import '../styles/menu.scss';
import { selectCars } from '../features/car/carSlice';
import {useSelector} from 'react-redux';
import { scroller } from "react-scroll";

function Menu({data}) {
  const cars = useSelector(selectCars);

  const scrollToSection = (id) => {
    scroller.scrollTo(`nav-${id}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className='menu'>
        {data && data.map((item) =>
          <a key={item.id} href='#' onClick={() => scrollToSection(item.id)}>{item.title}</a>
        )}
    </div>
  )
}

export default Menu;