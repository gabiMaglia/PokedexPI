import React from "react";
import styles from './typeIcons.module.css'
import { Icons } from "../../assets/icons/icons/iconLIst";

const TypeIcons = ({ type, isChecked }) => {

    const iconClassName = `icon ${type.toLowerCase()}`;
    
    return (
      <div className={`${styles.icon }  ${styles[type.toLowerCase()]}`}>
        <img src={Icons[type.toLowerCase()]} alt={type} />
      </div>
    );
};

export default TypeIcons;
