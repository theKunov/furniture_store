import { Link } from "react-router-dom";
import styles from "./Products.module.css";

export default function Products({data}) {
  return (
    <div className={styles["product-wrapper"]}>
          {data.map((product) => (
            <div key={product.id} className={styles["product"]}>
              <Link to={`/product-details/${product.id}`} state={{ product }}>
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    product.attributes.picture.data[0].attributes.url
                  }
                  alt={product.attributes.picture.data[0].attributes.name}
                  className={styles["product-image"]}
                />
              </Link>

              <div className={styles["info-wrap"]}>
                <h4>{product.attributes.name}</h4>
                <p className={styles["size"]}>{product.attributes.size}</p>
              </div>

              <p className={styles["price"]}>{product.attributes.price}лв</p>
            </div>
          ))}
    </div>
  )
}
