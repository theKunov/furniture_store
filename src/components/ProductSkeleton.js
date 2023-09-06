import React from "react"
import ContentLoader from "react-content-loader"

const ProductSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={303}
    height={250}
    viewBox="0 0 306 250"
    backgroundColor="#383838"
    foregroundColor="#454545"
  >
  <rect x="1" y="181" rx="3" ry="3" width="228" height="32" /> 
    <rect x="1" y="12" rx="3" ry="3" width="303" height="161" /> 
    <rect x="237" y="181" rx="3" ry="3" width="67" height="32" />
  </ContentLoader>
)

export default ProductSkeleton