import styles from "./Gallery.module.css";
import useFetch from '../components/hooks/useFetch';

export default function GalleryComponent() {
    
    const {loading, error, data} = useFetch('/galleries?populate=*');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error... :(</p>

    if (data) return (
        <section className={styles["gallery-entry-section"]}>
            <h2>Галерия</h2>
            
            <div className={styles["gallery-grid"]}>
                
                {data.map(image =>(
                    <img key={image.id} src={process.env.REACT_APP_UPLOAD_URL+image.attributes.Image.data.attributes.url} alt='' className={styles['gallery-image']} />
                ))}
            </div>
        </section>
    )
}
