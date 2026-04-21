import React from "react";

const Label = ({ title, id }) => {
  return (
    <label htmlFor={id} className="font-semibold">
      {title}
    </label>
  );
};

export default Label;
