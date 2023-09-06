import { Link } from 'react-router-dom';
import styles from "./CustomButton.module.css";

export default function CustomButton(props) {
  return (
    <Link to={props.link} className={styles['custom-btn']}>
      Избери 
      <div className={styles['arrow']}>&nbsp;</div>
    </Link>
  )
}
