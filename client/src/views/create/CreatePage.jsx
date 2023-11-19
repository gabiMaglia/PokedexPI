import PostForm from '../../components/PostPokemonForm/PostForm'
import styles from "./create.module.css";
const CreatePage = () => {
  return (
    <section className={styles.createContainer}>
      <PostForm />
    </section>
  )
}

export default CreatePage