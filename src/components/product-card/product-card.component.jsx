import "./product-card.styles.scss";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`index-of-products-${id}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"inverted"}>Add To Cart</Button>
    </div>
  );
};

export default ProductCard;
