import React from "react";

const Label = ({ title, id, required }) => {
  return (
    <label htmlFor={id} className="font-semibold">
      {title}
      {required && <span className="text-sm ml-0.5 text-red-500">*</span>}
    </label>
  );
};

export default Label;
