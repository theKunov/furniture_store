import Headline from "../components/Headline";
import useFetch from "../components/hooks/useFetch";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const { loading, error, data } = useFetch("/galleries?populate=*");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... :(</p>;

  if (data)
    return (
      <section>
        <Headline text="Gallery" />

        <div className={styles["gallery-grid"]}>
          {data.map((image) => (
            <img
              key={image.id}
              src={
                process.env.REACT_APP_UPLOAD_URL +
                image.attributes.Image.data.attributes.url
              }
              alt=""
              className={styles["gallery-image"]}
            />
          ))}
        </div>
      </section>
    );
}
