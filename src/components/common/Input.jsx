import React, { Component } from "react";
const Input = ({ name, label, value, error, onchange }) => {
  return (
    <div className="form-group mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onchange}
        id={name}
        name={name}
        type="text"
        className="form-control"
        id="UserName"
        placeholder="Type Your user name"
      />
      {/* Displaying Validation Errors  */}
      <div className="alert alert-danger">{error}</div>
    </div>
  );
};
export default Input;
