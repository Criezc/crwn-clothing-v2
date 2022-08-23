import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import {CartIconContainer,Itemcount,ShoppingIcon} from './cart-icon.styles.js'

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <CartIconContainer onClick={handleToggle}>
      <ShoppingIcon />
      <Itemcount>{cartCount}</Itemcount>
    </CartIconContainer>
  );
};

export default CartIcon;
