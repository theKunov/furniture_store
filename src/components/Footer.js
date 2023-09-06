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
                <li><Link to="/">Начало</Link></li>
                <li><Link to="/boutique/">Бутикови мебели</Link></li>
                <li><Link to="/products/">Основи за маси</Link></li>
                <li><Link to="/gallery/">Галерия</Link></li>
            </ul>
        </div>
        <div className={styles["contacts"]}>
            <ul>
                <li><Link to="/contacts/">Контакти</Link></li>
                <li className={styles["social-media"]}>
                    <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' className={styles["facebook"]}>&nbsp;</a>
                    <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className={styles["instagram"]}>&nbsp;</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
