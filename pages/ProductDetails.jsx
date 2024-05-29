import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../pages/ProductDetails.module.css";

export default function ProductDetails() {
	const location = useLocation();
    
	let product = null;
	const navigate = useNavigate();

	if (location.state) {
		product = location.state.product;
	}

	const [initialImg, setInitialImg] = useState("");

	useEffect(() => {
		if (product) {
			console.log("inside product");
			const mainProduct = product.attributes.picture.data[0];
			setInitialImg(
				process.env.REACT_APP_UPLOAD_URL + mainProduct.attributes.url
			);
		} else {
			navigate("/products"); // redirect to the products page if product is empty
		}
	}, [product, navigate]);

	const handleImgClick = (image) => {
		setInitialImg(process.env.REACT_APP_UPLOAD_URL + image.attributes.url);
	};

	if (product) {
		const productGallery = product.attributes.picture.data;
		return (
			<section className={styles["product-section"]}>
				<div className={styles["product-gallery-wrap"]}>
					<div className={styles["gallery-carousel"]}>
						{productGallery.map((image) => (
							<div
								className={styles["carousel-img"]}
								key={image.id}
								style={{
									backgroundImage: `url(${process.env.REACT_APP_UPLOAD_URL}${image.attributes.url})`,
								}}
								text-area={image.attributes.name}
								onClick={() => handleImgClick(image)}
							/>
						))}
					</div>
					<img
						className={styles["main-img"]}
						src={initialImg}
						alt="main"
					/>
				</div>

				<div className={styles["info-wrap"]}>
					<h2 className={styles["info-headline"]}>
						{product.attributes.name}
					</h2>
					<p className={styles["size"]}>{product.attributes.size}</p>
					<p className={styles["description"]}>
						{product.attributes.description}
					</p>
					<p className={styles["price"]}>
						{product.attributes.price}€
					</p>
				</div>
			</section>
		);
	}
}
