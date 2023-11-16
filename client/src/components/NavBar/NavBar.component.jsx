import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navBar.module.css';
import SearchBar from '../SearchBar/SearchBar.component';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_logo}>Pokemon</div>
            <div className={`${styles.nav_items} ${isOpen ? styles.opened : ''}`}>
            <SearchBar/>
                <NavLink className={styles.nav_link} to={'/home'}>Home</NavLink>
                <NavLink  className={styles.nav_link} to={'/createnewpokemon'}>Create New Pokemon</NavLink>
            </div>
            <div
                className={`${styles.nav_toggle} ${isOpen ? styles.opened : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default NavBar;