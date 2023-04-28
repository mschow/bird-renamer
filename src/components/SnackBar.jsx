import React, { useContext, useEffect, useState } from "react";
import "./SnackBar.css";
import { SnackBarContext } from "../contexts/SnackBarContext";

export default function SnackBar() {
  const { FADE_TIME, displaySnackbar, snackBarItem } =
    useContext(SnackBarContext);

  return (
    <div
      className={`flex justify-center w-full fixed top-5 z-10 ease-in duration-${FADE_TIME} ${
        displaySnackbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`text-center snack-bar snack-bar-${snackBarItem?.type}`}>
        {snackBarItem?.message}
      </div>
    </div>
  );
}
