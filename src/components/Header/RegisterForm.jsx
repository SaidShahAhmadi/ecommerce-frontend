import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { Link } from "react-router-dom";

class RegisterForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    // username: Joi.string().required().email().label("Username"),

    firstName: Joi.string().required().label("FirstName"),
    lastName: Joi.string().required().label("LastName"),
    email: Joi.string().required().email().label("Email"),
    phoneNumber: Joi.string()
      .regex(/^[0-9]{10}$/)
      // .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
      .required(),

    password: Joi.string().required().min(5).label("Password"),
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
              <h3>Registration Form</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  {this.renderInput("firstName", "FirstName")}
                </div>
                <div className="col">
                  {this.renderInput("lastName", "LastName")}
                </div>
              </div>

              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "Password")}
              {this.renderInput("phoneNumber", "PhoneNumber")}

              {this.renderButton("Register")}
            </div>
            <div className="account">
              <p>
                Already have an account?{" "}
                <Link id="link" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
