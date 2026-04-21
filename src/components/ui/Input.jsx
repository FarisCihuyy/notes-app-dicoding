import React from "react";

const Input = ({ id, type, name, value, placeholder, className, ...props }) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`${className} shadow bg-white py-2 px-4 w-full`}
      {...props}
    />
  );
};

export default Input;
