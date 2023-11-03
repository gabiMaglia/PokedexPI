import CardBoard from '../../components/CardBoard/CardBoard.componenet'
import styles from './home.module.css'
const HomePage = (props) => {
  return (
    <section className={styles.homeContainer}>
      <CardBoard/>
    </section>
  )
}

export default HomePage