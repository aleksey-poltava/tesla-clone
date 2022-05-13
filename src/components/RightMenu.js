import '../styles/right-menu.scss';
import Menu from '@mui/icons-material/Menu';
import BurgerNav from './BurgerNav';

function RightMenu() {
  return (
    <>
        <div className='rightMenu'>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
            <Menu />
        </div>
        <BurgerNav />
        
    </>
    
  )
}

export default RightMenu;