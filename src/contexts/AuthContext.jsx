import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

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
    return createUserWithEmailAndPassword(auth, email, password).then(() =>
      updateProfile(auth.currentUser, { username })
    );
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
