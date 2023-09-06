import { elastic as Menu } from "react-burger-menu";
import styles from "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Menu>
      <span><NavLink to="/boutique/" className={styles['head-btn']} activeclassname={styles['active']} >Бутикови мебели</NavLink></span>
      <span><NavLink to="/products/" className={styles['head-btn']} activeclassname={styles['active']}>Основи за маси</NavLink></span>
      <span><NavLink to="/gallery/" className={styles['head-btn']} activeclassname={styles['active']}>Галерия</NavLink></span>
      <span><NavLink to="/contacts/" className={styles['head-btn']} activeclassname={styles['active']}>Контакти</NavLink></span>
    </Menu>
  );
};

export default Sidebar;