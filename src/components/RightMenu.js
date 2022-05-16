import { useState } from 'react';
import '../styles/right-menu.scss';
import Menu from '@mui/icons-material/Menu';
import BurgerNav from './BurgerNav';

function RightMenu() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function openBurgerMenu() {
    setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen);
  }
  
  return (
    <>
        <div className='rightMenu'>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
            <Menu onClick={openBurgerMenu} />
        </div>
        <BurgerNav isBurgerOpen = {isBurgerOpen} openThisMenu = {openBurgerMenu} />        
    </>
    
  )
}

export default RightMenu;