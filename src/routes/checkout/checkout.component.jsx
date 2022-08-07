import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-title">
        <ul>
          <li>Product</li>
          <li>Description</li>
          <li>Quantity</li>
          <li>Price</li>
          <li>Remove</li>
        </ul>
      </div>
      <div className="checkout-items-container">
        {cartItems.map((item) => {
          return (
            <div className="checkout-items" key={item.id}>
              <img src={item.imageUrl} alt={`img-of-${item.name}`} />
              <div>{item.name}</div>
              <div>{item.quantity}</div>
              <div>{item.price * item.quantity}</div>
              <div>remove</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
