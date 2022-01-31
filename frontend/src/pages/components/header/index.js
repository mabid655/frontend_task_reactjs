import React, {useContext} from 'react';
import ThemeChanger from "../theme-changer";
import styles from "./header.module.scss";
import { ThemeContext } from "../../../themeProvider";

import logoBlack from'../../../assets/logo-black.png';
import logoWhite from'../../../assets/logo-white.png';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.header} col-12`}>
      <div className={styles.header_inner}>
        <img src={theme === "light" ? logoBlack : logoWhite} alt="logo" />
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Header;
