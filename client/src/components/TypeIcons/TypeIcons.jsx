import React from "react";
import styles from "./typeIcons.module.css";
import { Icons } from "../../assets/icons/icons/iconLIst";

const TypeIcons = ({ type, bg = false }) => {
  return (
    <div
      className={`${styles.icon}  ${bg ? styles[type.toLowerCase()] : null}  `}
    >
      <img src={Icons[type.toLowerCase()]} alt={type} />
    </div>
  );
};

export default TypeIcons;
