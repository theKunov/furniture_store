import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles["banner-wrap"]}>
      <div className={styles["text-wrap"]}>
        <h1>Black Steel</h1>
        <p>Преосмисляме индустриалния живот</p>
      </div>
    </section>
  );
}
