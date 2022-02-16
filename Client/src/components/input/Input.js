import React from "react";
import "./Input.css";

export const Input = (props) => {
  const { label, type, nameInput, func, required } = props;

  return (
    <div className="inputForm">
      <label>{label}</label>
      {required === "required" ? (
        <input type={type} name={nameInput} onChange={func} required />
      ) : (
        <input type={type} name={nameInput} onChange={func} />
      )}
    </div>
  );
};
