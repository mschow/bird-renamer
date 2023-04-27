import React from "react";
import "./SnackBar.css";

export default function SnackBar({ snackBarItem }) {
  const { message, type, timeout } = snackBarItem;

  return (
    <div className="flex justify-center w-full fixed top-5 z-10">
      <div className={`w-1/2 text-center snack-bar-${type}`}>{message}</div>
    </div>
  );
}
