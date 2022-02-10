import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  // we set schema to an object in this object we have two propertys
  // (username and password)
  schema = {
    username: Joi.string().required().label("Username"),
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
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password")}
              {this.renderButton("Login")}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
