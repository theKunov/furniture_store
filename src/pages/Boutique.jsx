import useFetch from "../components/hooks/useFetch";
import styles from "./Catalog.module.css";
import Products from "../components/Products";
import ProductSkeleton from "../components/ProductSkeleton";
import Headline from "../components/Headline";

export default function Botique() {
  // const {loading, error, data} = useFetch('/boutiques?populate=*'); Change call when products are added.
  const { loading, error, data } = useFetch("/products?populate=*");

  return (
    <>
      <Headline text="Boutique furniture" />
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

  // if (loading) return (
  //   <section className={`${styles["product-section"]} ${styles["loading-wrapper"]}`}>
  //     <h2>Boutique furniture</h2>
  //     <div>
  //       <ProductSkeleton />
  //       <ProductSkeleton />
  //       <ProductSkeleton />
  //       <ProductSkeleton />
  //     </div>
  //   </section>
  // )
  // if (error) return(
  //   <section className={`${styles["product-section"]} ${styles["loading-wrapper"]}`}>
  //     {/* <h2>Boutique furniture</h2> */}
  //     <Headline text="Boutique furniture" />

  //      <p className={styles['err-message']}>Something went wrong... :( <br /> Please reload the page.</p>;
  //      <div>
  //       <ProductSkeleton />
  //       <ProductSkeleton />
  //       <ProductSkeleton />
  //       <ProductSkeleton />
  //     </div>
  //   </section>
  // )

  // if (data) return (
  //   <section className={styles['product-section']}>
  //     <h2>Boutique furniture</h2>
  //     <Products data={data}/>
  //   </section>
  // )
}
