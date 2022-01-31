import React from 'react';

import styles from "./subHeader.module.scss";

const SelectComponent = ({data, disabled, onChangeFun, title}) => {
  return (
    <select
      disabled={disabled}
      onChange={e => onChangeFun(e.target.value)}
      className={`${styles.subHeader_selectBg} ${disabled ? styles.subHeader_disabledClass : ''}`}
    >
      <option hidden>Select {title}</option>
      {data.map(item => <option value={item} key={item}>{item}</option>)}
    </select>
  );
};

export default SelectComponent;
