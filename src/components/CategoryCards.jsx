import styles from "./CategoryCards.module.css";
import CustomButton from "./CustomButton";

export default function CategoryCards() {
  return (
    <section className={styles["card-wrap"]}>
      <div className={`${styles["card"]} ${styles["left"]}`}>
        <h2>Boutique furniture</h2>
        <CustomButton  link={"/boutique/"}/>
      </div>
      
      <div className={`${styles["card"]} ${styles["right"]}`}>
        <h2>Table legs</h2>
        <CustomButton  link={"/products/"}/>
      </div>
    </section>
  );
}
