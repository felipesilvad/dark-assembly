import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBypM3TOqsb3UBQLV0Xp_OblBJnmMmYkIU",
  authDomain: "netherworld-2a35d.firebaseapp.com",
  databaseURL: "https://netherworld-2a35d.firebaseio.com",
  projectId: "netherworld-2a35d",
  storageBucket: "netherworld-2a35d.appspot.com",
  messagingSenderId: "6720392311",
  appId: "1:6720392311:web:08d5133e4f727b04554a72",
  measurementId: "G-YW0E871DB0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};