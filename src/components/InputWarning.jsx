import React from "react";

function InputWarning(props) {
  return (
    <div className="w-full max-w-[70ch] text-red-600 italic">
      <span>{props.warning}</span>
    </div>
  );
}

export default InputWarning;
