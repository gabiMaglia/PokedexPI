import { NavLink } from 'react-router-dom'
import styles from './navBar.module.css'

const NavBar  = () => {
 
  return (
    <nav>
    
        <NavLink to={'/home'} >Home</NavLink>
        <NavLink to={'/createnewpokemon'} >Create New Pokemon</NavLink>
        {/* <NavLink to={} ></NavLink>
        <NavLink to={} ></NavLink> */}
      
    </nav>
  )
}

export default NavBar