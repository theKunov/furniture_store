import useFetch from "../components/hooks/useFetch";
import styles from "./Catalog.module.css";
import Products from "../components/Products";
import ProductSkeleton from "../components/ProductSkeleton";

export default function Catalog() {
  const { loading, error, data } = useFetch("/products?populate=*");

  if (loading) return (
    <section className={`${styles["product-section"]} ${styles["loading-wrapper"]}`}>
      <h2>Основи за маси</h2>
      <div> 
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    </section>
  ) 
  if (error)
    return (
      <section className={styles["product-section"]}>
        <h2>Основи за маси</h2>
        <p className={styles["err-message"]}>
          Нещо се обърка... :( <br /> Моля презаредете страницата.
        </p>
      </section>
    );
  if (data)
    return (
      <section className={styles["product-section"]}>
        <h2>Основи за маси</h2>
        <Products data={data}/>
      </section>
    );
}
