import { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import styles from "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <Menu isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}>
      <span><NavLink to="/boutique/"  onClick={() => setIsOpen(false)} className={styles['head-btn']} activeclassname={styles['active']} >Boutique furniture</NavLink></span>
      <span><NavLink to="/products/"  onClick={() => setIsOpen(false)} className={styles['head-btn']} activeclassname={styles['active']}>Table legs</NavLink></span>
      <span><NavLink to="/gallery/"  onClick={() => setIsOpen(false)} className={styles['head-btn']} activeclassname={styles['active']}>Gallery</NavLink></span>
      <span><NavLink to="/contacts/"  onClick={() => setIsOpen(false)} className={styles['head-btn']} activeclassname={styles['active']}>Contact us</NavLink></span>
    </Menu>
  );
};

export default Sidebar;