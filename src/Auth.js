import React, { useState, useEffect } from 'react';
import app from "./App.js"

// export const AuthProvider = React.createContext();

class AuthProvider {
  constructor() {
    this.authenticated = false
  }

  login(cb) {
    this.authenticated = true
    cb()
  }

  logout(cb) {
    this.authenticated = false
    cb()
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth()