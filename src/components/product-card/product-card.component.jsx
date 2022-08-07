import "./product-card.styles.scss";

import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;

  const { addItemToCart } = useContext(CartContext);

  const AddItemHandler = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`index-of-products-${id}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"inverted"} onClick={AddItemHandler}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
