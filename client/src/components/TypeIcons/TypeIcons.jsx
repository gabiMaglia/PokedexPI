import React from "react";
import { Icons } from "../../assets/icons/icons/iconLIst";

const TypeIcons = ({ type }) => {

    const iconClassName = `icon ${type.toLowerCase()}`;
    
    return (
      <div className={iconClassName}>
        <img src={Icons[type.toLowerCase()]} alt={type} />
      </div>
    );
};

export default TypeIcons;
