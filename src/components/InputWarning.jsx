import React from "react";

function InputWarning(props) {
  return (
    <div
      className={`w-full max-w-[70ch] text-red-600 italic text-sm ${
        props.warning
          ? "pt-1 ease-in duration-300 max-h-96 opacity-100"
          : "max-h-0 opacity-0 pt-0"
      } `}
    >
      <span>{props.warning}</span>
    </div>
  );
}

export default InputWarning;
