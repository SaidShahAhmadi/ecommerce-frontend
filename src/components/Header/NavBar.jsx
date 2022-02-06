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
            </div>
            <div class="boundary uk-panel uk-placeholder ">
              <button
                class="uk-button uk-button-default uk-float-right"
                type="button"
              >
                Cart <span class="" uk-icon="cart"></span>
              </button>
              <div uk-drop="boundary: .boundary">
                {/* <div class="cart">
                  <img
                    src="https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                  />
                  <div class="desc">
                    <h3>Stylish Tote Bag</h3>
                    <p>Brown Color Women's Tote Bag</p>
                    <span>#368798</span>
                  </div>
                  <div>
                    <label>Quantity :</label>
                    <input type="text" value="1" size="1" />
                  </div>
                  <div class="price">$99.00</div>
                  <img
                    src="https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                  >
                    <div>
                      <h3>Sunglasses</h3>
                      <p>Glasses with wooden frame</p>
                      <span>#756328</span>
                    </div>
                    <div>
                      <label>Quantity :</label>
                      <input type="text" value="1" size="1" />
                    </div>
                    <div class="price">$142.00</div>/
                  </img>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
