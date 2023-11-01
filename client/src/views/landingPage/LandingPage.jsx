import styles from './landing.module.css'
import pokeimg from '../../assets/Pokeball-png.png'
const LandingPage = () => {
  return (
    <section>
        <div  >
            <div className={styles.backgroundImage}>
                <img src={pokeimg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default LandingPage