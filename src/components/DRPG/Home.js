import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import firebase from '../../firebase';
import CharsListItem from './List/CharsListItem';
import { Col, Row, Image } from 'react-bootstrap';

function useChars() {
  const [chars, setChars] = useState([])
  useEffect(() => {
    const unsubscribe = db
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Characters')
      .orderBy(firebase.firestore.FieldPath.documentId())
      .onSnapshot((snapshot) => {
        const newChars = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setChars(newChars)
      })
    return () => unsubscribe()
  }, [])

  return chars;
}

const Home = () => {

  return (
    <>
    </>
  )
}

export default Home;