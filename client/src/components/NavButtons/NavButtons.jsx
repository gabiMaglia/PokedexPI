import NavBtn from "../common/navBtn ";
import styles from "./navButtons.module.css";
import { useSelector } from "react-redux";

const NavButtons = ({ handlePrevPage, handleNextPage }) => {
  const currentPage = useSelector((e) => e.currentPage);
  const totalPages = useSelector((e) => e.totalPages);

  return (
    <>
      <div className={styles.pageSelectorContainer}>
        <span onClick={handlePrevPage}>
          <NavBtn
            content={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
              </svg>
            }
          />
        </span>

        <ul className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => {
            const isInRange =
              index >= currentPage - 2 && index <= currentPage + 2;

            return (
              isInRange && (
                <li key={index}>
                  <p
                    className={index === currentPage ? styles.currentPage : ""}
                  >
                    {index + 1}
                  </p>
                </li>
              )
            );
          })}
        </ul>
        <span onClick={handleNextPage}>
          <NavBtn
            content={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z" />
              </svg>
            }
          />
        </span>
      </div>
    </>
  );
};

export default NavButtons;
