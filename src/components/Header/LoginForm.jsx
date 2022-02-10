import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../common/Input";
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
    const { data, errors } = this.state;
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
              <Input
                name="username"
                label="UserName"
                value={data.username}
                onchange={this.handleChange}
                error={errors.username}
              />

              <Input
                name="password"
                label="Password"
                value={data.password}
                onchange={this.handleChange}
                error={errors.password}
              />

              <div>
                <button
                  disabled={this.validate()}
                  type="submit"
                  className="button"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
