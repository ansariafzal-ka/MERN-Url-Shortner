import React from "react";

const Input = ({ placeholder, onChange, value }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-2 border outline-none rounded"
      onChange={onChange}
      value={value}
      required
    />
  );
};

export default Input;
