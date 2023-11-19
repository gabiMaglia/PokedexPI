import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.component";

import logo from "../../assets/pokeback-assets/pokemon-logo.png";
import styles from "./navBar.module.css";
import NavBtn from "../common/navBtn ";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCloseNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_logo}>
        <img src={logo} alt="Pokedex" />
      </div>
      <div className={`${styles.nav_items} ${isOpen ? styles.opened : ""}`}>
        <SearchBar handleOpenCloseNav={handleOpenCloseNav} />

        <div onClick={handleOpenCloseNav}>
          <NavLink className={styles.nav_link} to={"/home"}>
            <NavBtn content={"Home"} />
          </NavLink>
          <NavLink className={styles.nav_link} to={"/createnewpokemon"}>
            <NavBtn content={"Create New Pokemon"} />
          </NavLink>
        </div>
          
      </div>
      <div
        className={`${styles.nav_toggle} ${isOpen ? styles.opened : ""}`}
        onClick={handleOpenCloseNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
