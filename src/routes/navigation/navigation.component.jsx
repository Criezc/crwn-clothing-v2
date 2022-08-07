import { Fragment, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import logo from "../../assets/images/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { isOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <img src={logo} alt="logo-images" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
