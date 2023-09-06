import styles from "./CategoryCards.module.css";
import CustomButton from "./CustomButton";

export default function CategoryCards() {
  return (
    <section className={styles["card-wrap"]}>
      <div className={`${styles["card"]} ${styles["left"]}`}>
        <h2>Бутикови мебели</h2>
        <CustomButton  link={"/boutique/"}/>
      </div>
      
      <div className={`${styles["card"]} ${styles["right"]}`}>
        <h2>Основи за маси</h2>
        <CustomButton  link={"/products/"}/>
      </div>
    </section>
  );
}
