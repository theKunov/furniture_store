import styles from'./Footer.module.css';
import {ReactComponent as Logo} from '../img/logo.svg';
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer>
        <div className={styles["logo-wrap"]}>
            <Logo className={styles['logo-path']}/>
        </div>
        <div className={styles["internal-links"]}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/boutique/">Boutique furniture</Link></li>
                <li><Link to="/products/">Table legs</Link></li>
                <li><Link to="/gallery/">Gallery</Link></li>
            </ul>
        </div>
        <div className={styles["contacts"]}>
            <ul>
                <li><Link to="/contacts/">Contact Us</Link></li>
                <li className={styles["social-media"]}>
                    <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' className={styles["facebook"]}>&nbsp;</a>
                    <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className={styles["instagram"]}>&nbsp;</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
