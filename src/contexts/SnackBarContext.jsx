import React, { createContext, useState, useEffect } from "react";

export const SnackBarContext = createContext();

export default function SnackBarProvider({ children }) {
  const FADE_TIME = 300;
  const [displaySnackbar, setDisplaySnackbar] = useState(false);
  const [snackBarItem, setSnackBarItem] = useState(null);
  const unsetSnackbar = () => setSnackBarItem(null);

  useEffect(() => {
    if (!snackBarItem) return;
    setDisplaySnackbar(true);

    //Display snackbar until time out.
    setTimeout(() => {
      setDisplaySnackbar(false);
    }, snackBarItem.timeout);

    //Unset snackbar after fade out.
    setTimeout(() => {
      unsetSnackbar();
    }, snackBarItem.timeout + FADE_TIME);
  }, [snackBarItem]);

  const snackBarValue = {
    FADE_TIME,
    snackBarItem,
    setSnackBarItem,
    displaySnackbar,
    setDisplaySnackbar,
  };

  return (
    <SnackBarContext.Provider value={snackBarValue}>
      {children}
    </SnackBarContext.Provider>
  );
}
