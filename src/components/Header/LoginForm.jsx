import React, { Component } from "react";
import Input from "../common/Input";
import Joi from "joi-browser";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  // we set schema to an object in this object we have two propertys
  // (username and password)
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  // validateing a form Using Joi
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    //call the server
    console.log("submitted");
  };

  validateProperty = ({ name, value }) => {
    if (name === "username")
      if (value.trim() === "") return "Username is Required";

    if (name === "password") {
      if (value.trim() === "") return "Password is Required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account } = this.state;
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
                value={account.username}
                onchange={this.handleChange}
                error={errors.username}
              />

              <Input
                name="password"
                label="Password"
                value={account.password}
                onchange={this.handleChange}
                error={errors.password}
              />

              <div>
                <button type="submit" className="button">
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
