import styles from './Headline.module.css';

export default function Headline({text}) {
  return <h2 className={styles['headline']}>{text}</h2>;
}
