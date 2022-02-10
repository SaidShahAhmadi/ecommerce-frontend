import React from "react";
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Input;
