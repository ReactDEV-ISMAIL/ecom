import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ name, label, handlChange, ...OtherProps }) => (
  <div className="group">
    <input
      className="form-input"
      name={name}
      onChange={handlChange}
      {...OtherProps}
    />
    {label ? (
      <label
        className={`${
          OtherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
