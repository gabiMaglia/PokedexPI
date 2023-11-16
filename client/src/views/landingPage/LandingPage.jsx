import GoBtn from "../../components/common/GoBtn";
import styles from "./landing.module.css";
import pokeimg from "../../assets/pokebackico.png";
import pokeLogo from "../../assets/pokeback-assets/pokemon-logo.png";
import { NavLink } from "react-router-dom";
const LandingPage = () => {
  return (
    <section className={styles.landingContainer}>
  
        <div className={styles.logo}>
          <img src={pokeLogo} alt="Pokemon" className={styles.pokeLogo}/>
          <img src={pokeimg} alt="pokeball" className={styles.pokeballImg} />
        </div>
      
        <div className={styles.getInto}>
        <NavLink to='/home'>
          <GoBtn  content="Ingresar" />
        </NavLink>
        </div>
      
    </section>
  );
};

export default LandingPage;
