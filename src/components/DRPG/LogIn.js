import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import firebase from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = ({email, password, hasAccount, setEmail, setPassword, setHasAccount, handleLogin}) => {

  return(
    <Container>
      <div>
        <label>email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="text"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button onClick={handleLogin}>Login</button>
          {hasAccount ? (
            <>
              hasAccount
            </>
          ): (
            <>
              DONT hasAccount
            </>
          )}
        </div>
      </div>
    </Container>
  )
}

export default LogIn;