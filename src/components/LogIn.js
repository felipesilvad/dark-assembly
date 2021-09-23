import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import firebase from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LogIn = ({setHasAccount}) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      setHasAccount(true)
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  return(
    <Container>
      <div>
        <label>email</label>
        <input
          type="text"
          id="daemail"
          autocomplete="on"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="text"
          id="dapassword"
          autocomplete="on"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </Container>
  )
}

export default LogIn;