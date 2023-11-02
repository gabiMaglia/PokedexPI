import GoBtn from '../../components/common/GoBtn'
import styles from './landing.module.css'
import pokeimg from '../../assets/pokebackico.png'
import { NavLink } from 'react-router-dom'
const LandingPage = () => {
  return (
    <section className={styles.landingContainer}>
            <div>
                <img src={pokeimg} alt="ingresar" className='pokeballImg' />
               
                  <GoBtn content='Ingresar' />
               
            </div>
    </section>
  )
}

export default LandingPage