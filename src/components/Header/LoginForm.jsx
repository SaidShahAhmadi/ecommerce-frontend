import React from "react";

function LoginForm() {
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
          <h3>Login</h3>
        </div>
        <div class="card-body">
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

export default LoginForm;
