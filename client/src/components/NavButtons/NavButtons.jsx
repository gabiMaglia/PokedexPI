import styles from './navButtons.module.css'
import GoBtn from '../common/GoBtn'
const NavButtons = ({handlePrevPage, handleNextPage, currentPage}) => {


  return (
  <div className={styles.pageSelectorContainer}>
    <button onClick={handlePrevPage}></button>
    <span className="currentPage">{currentPage + 1}</span>
    <button onClick={handleNextPage}></button>
  </div>
  )
}

export default NavButtons