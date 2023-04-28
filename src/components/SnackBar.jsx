import React, { useEffect, useState } from "react";
import "./SnackBar.css";

export default function SnackBar({ snackBarItem, unsetSnackbar }) {
  const FADE_TIME = 300;
  const { message, type, timeout } = snackBarItem;
  const [displaySnackbar, setDisplaySnackbar] = useState(false);

  useEffect(() => {
    if (!snackBarItem) return;
    setDisplaySnackbar(true);

    //Display snackbar until time out.
    setTimeout(() => {
      setDisplaySnackbar(false);
    }, timeout);

    //Unset snackbar after fade out.
    setTimeout(() => {
      unsetSnackbar();
    }, timeout + FADE_TIME);
  }, [snackBarItem]);

  return (
    <div
      className={`flex justify-center w-full fixed top-5 z-10 ease-in duration-${FADE_TIME} ${
        displaySnackbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`text-center snack-bar snack-bar-${type}`}>{message}</div>
    </div>
  );
}
