import React, { useState, useEffect } from 'react';
import app from "./App.js"

export const AuthProvider = React.createContext();

export const AuthProvider = ({children}) = {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, [])
}