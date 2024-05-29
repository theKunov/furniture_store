import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from'./Header.module.css';
import {ReactComponent as Logo} from '../img/logo.svg';
import Sidebar from './Sidebar';


export default function Header() {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
      setIsMobileDevice(newScreenWidth <= 640);
    };

    // Initial call to set the screen width
    handleResize();

    window.addEventListener('resize', handleResize); 

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  if (!isMobileDevice) {
    return (
      <header className={` ${isScrolled ? styles['isScrolled'] : ''}`}>
        <span><NavLink to="/boutique/" className={styles['head-btn']} activeclassname={styles['active']} >Boutique furniture</NavLink></span>
        <span><NavLink to="/products/" className={styles['head-btn']} activeclassname={styles['active']}>Table legs</NavLink></span>
        <span><NavLink to="/" className={styles['logo']}><Logo className={styles['logo-path']}/></NavLink></span>
        <span><NavLink to="/gallery/" className={styles['head-btn']} activeclassname={styles['active']}>Gallery</NavLink></span>
        <span><NavLink to="/contacts/" className={styles['head-btn']} activeclassname={styles['active']}>Contact us</NavLink></span>
      </header>
    )
  }else {
    return (
      <>
        <Sidebar pageWrapID={"page-wrap"} outerContainerId={"outer-container"} />
        <span><NavLink to="/" className={styles['logo-mobile']}><Logo className={styles['logo-path']}/></NavLink></span>
      </>
    )
  } 
  
}
