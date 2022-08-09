import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItemCard = ({ cartItems }) => {
  const { id, name, imageUrl, quantity, price } = cartItems;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItems);
  const addItemHandler = () => addItemToCart(cartItems);
  const removeItemHandler = () => removeItemFromCart(cartItems);

  return (
    <div className="checkout-item-container" key={id}>
      <div className="image-container">
        <img src={imageUrl} alt={`img-of-${name}`} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <button className="arrow" onClick={addItemHandler}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={removeItemHandler}>
          &#10095;
        </button>
      </div>
      <div className="price">{price * quantity}</div>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItemCard;
