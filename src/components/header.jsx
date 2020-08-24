import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = ({ getAmount, amount }) => {
  return (
    <div className="header">
      <div>Logo</div>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/">Manager</NavLink>
          </li>
          <li>
            <NavLink to="/api">Api</NavLink>
          </li>
          <li>
            <NavLink to="/products">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/shoppingCart">
              Carrito <span>{amount}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const stateToProps = (state) => ({
  amount: state.shoppingCartReducer.amount,
});

export default connect(stateToProps)(Header);
