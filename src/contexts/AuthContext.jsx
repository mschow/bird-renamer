import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    //On mount, subscribe to all authorization state changes for setting / unsetting the active user.
    const subscription = onAuthStateChanged(auth, (user) => {
      setActiveUser(user);
    });

    //Unsubscribe on unmount.
    return subscription;
  }, []);

  function signUp(username, email, password) {
    console.log("HIT", username, email, password);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => updateProfile(auth.currentUser, { username }))
      .catch((error) => {
        //TODO: Handle error. Maybe a snackbar?
        console.error(error);
      });
  }

  function login() {}

  function updatePassword() {}

  function sendPasswordResetEmail() {}

  function deleteUser() {}

  const authValue = {
    activeUser,
    signUp,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
