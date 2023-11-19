import PostForm from '../../components/PostPokemonForm/PostForm'
import AnimatedBackground from '../../components/common/AnimatedBackground';
import styles from "./create.module.css";
const CreatePage = () => {
  
  return (
    <section className={styles.createContainer}>
      <AnimatedBackground />
      <PostForm />
    </section>
  )
}

export default CreatePage