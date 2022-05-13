import '../styles/burger-nav.scss'
import Close from '@mui/icons-material/Close';

function BurgerNav() {
  return (
    <div className='burgerNav'>
        <div className='closeIcon'><Close /></div>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
    </div>
  )
}

export default BurgerNav;