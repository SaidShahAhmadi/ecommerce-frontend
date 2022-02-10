import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar(props) {
  const state = useSelector((state) => state.handleCart);

  // const inputEL = useRef();

  // const getSearchTerm = () => {
  //   props.searchKeyWord(inputEL.current.value);
  // };
  return (
    <>
      <nav className="uk-navbar-container uk-margin uk-navbar">
        <div className="uk-navbar-left">
          <Link className="uk-navbar-item uk-logo" to="/">
            e-commerce-app
          </Link>

          <ul className="uk-navbar-nav ">
            <li className="navProd uk-active">
              <NavLink id="product" to="/productslist">
                Products
              </NavLink>
            </li>
          </ul>
          <div className="uk-navbar-right">
            <form>
              <input
                // ref={inputEL}
                id="search"
                className="uk-input uk-form-width-large"
                type="text"
                placeholder="Search"
                // value={props.term}
                // onChange={getSearchTerm}
              />
            </form>
          </div>

          <div className="uk-navbar-right">
            <div className="uk-navbar-item">
              <NavLink to="/login">
                <button className="uk-button button-secondary">
                  Login
                  <span className="" uk-icon="sign-in"></span>
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="uk-button button-primary">
                  Register <span className="" uk-icon="user"></span>
                </button>
              </NavLink>
              <NavLink to="/cart" className="uk-button btn-outline-cart ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart
                {/* {state.length}) */}
                <span className="badge bg-warning text-dark">
                  {state.length}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
