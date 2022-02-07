import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="uk-navbar-container uk-margin" uk-navbar>
        <div className="uk-navbar-left">
          <Link className="uk-navbar-item uk-logo" to="/">
            e-commerce-app
          </Link>

          <ul className="uk-navbar-nav">
            <li>
              <NavLink to="/productslist">
                <span className="uk-icon uk-margin-small-right"></span>
                Products
              </NavLink>
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
              <NavLink to="/register">
                <button className="uk-button uk-button-secondary">
                  Cart <span class="" uk-icon="cart"></span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
