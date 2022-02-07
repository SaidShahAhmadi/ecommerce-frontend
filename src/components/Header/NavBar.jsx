import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <nav className="uk-navbar-container uk-margin" uk-navbar>
        <div className="uk-navbar-left">
          <Link className="uk-navbar-item uk-logo" to="/">
            e-commerce-app
          </Link>

          <ul className="uk-navbar-nav ">
            <li className="navProd uk-active">
              <NavLink to="/productslist">Products</NavLink>
            </li>
          </ul>

          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
              <NavLink to="/login">
                <button className="uk-button button-secondary">
                  Login
                  <span class="" uk-icon="sign-in"></span>
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="uk-button button-primary">
                  Register <span class="" uk-icon="user"></span>
                </button>
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
