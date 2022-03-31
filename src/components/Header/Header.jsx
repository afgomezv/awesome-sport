import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/Appcontext";
import { FaShoppingBasket } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import "./Header.css";

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">
          <GiTrophy />
          Awesome Sport
        </h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FaShoppingBasket />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
