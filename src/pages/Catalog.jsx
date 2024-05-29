import useFetch from "../components/hooks/useFetch";
import styles from "./Catalog.module.css";
import Products from "../components/Products";
import ProductSkeleton from "../components/ProductSkeleton";
import Headline from "../components/Headline";

export default function Catalog() {
  const { loading, error, data } = useFetch("/products?populate=*");


  return (
    <>
      <Headline text="Table legs" />
      {loading && (
        <section
          className={`${styles["product-section"]} ${styles["loading-wrapper"]}`}
        >
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </section>
      )}
      {error && (
        <section
          className={`${styles["product-section"]} ${styles["loading-wrapper"]}`}
        >
          <p className={styles["err-message"]}>
            Something went wrong... :( <br /> Please reload the page.
          </p>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </section>
      )}
      {data && (
        <section className={styles["product-section"]}>
          <Products data={data} />
        </section>
      )}
    </>
  );
}