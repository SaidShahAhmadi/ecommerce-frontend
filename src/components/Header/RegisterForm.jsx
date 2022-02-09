import React from "react";

function RegisterForm() {
  return (
    <div>
      <div class="card" id="registration_form">
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
        <div class="card-body">
          <div class="mb-4">
            <label for="FirstName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              id="FirstName"
              placeholder="Type Your Name "
            />
          </div>
          <div class="mb-4">
            <label for="LastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="LastName"
              placeholder="Type Your Last Name "
            />
          </div>
          <div class="mb-4">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Type Your Email"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Type Your password "
            />
          </div>

          <div class="mb-4">
            <label for="phoneNumber" class="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              class="form-control"
              id="phoneNumber"
              placeholder="Type Your phone Number "
            />
          </div>

          <div>
            <button type="submit" className="button">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
