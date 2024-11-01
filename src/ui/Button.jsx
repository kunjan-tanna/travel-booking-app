import React from "react";
import { ClipLoader } from "react-loader-spinner";
const Button = ({ disabled, label, className }) => {
  const defaultClassName =
    "w-2/3 bg-blue-500 text-white px-4 py-2 rounded-xl disabled:bg-blue-700";

  return (
    <div>
      <button
        className={className ? className : defaultClassName}
        disabled={disabled}
      >
        {disabled ? <ClipLoader size={16} /> : label}
      </button>
    </div>
  );
};

export default Button;
