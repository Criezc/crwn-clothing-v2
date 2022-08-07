import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="cart-icon-container" onClick={handleToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
