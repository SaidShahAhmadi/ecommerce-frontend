import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { Link, NavLink } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  // we set schema to an object in this object we have two propertys
  // (email and password)
  schema = {
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("email"),

    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <div className="card" id="registration_form">
          <form onSubmit={this.handleSubmit}>
            <div
              className="card-header"
              style={{
                textAlign: "center",
                padding: 12,
                backgroundColor: "#f9fafb",
                border: "none",
              }}
            >
              <h3>Login</h3>
            </div>
            <div className="card-body">
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "Password")}
              {this.renderButton("Login")}
            </div>

            <div className="account">
              <p>
                Don't have an account?{" "}
                <Link to="/register">Create account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
