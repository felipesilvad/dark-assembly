import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import CharsListItem from './CharsListItem';
import { Row, Col, Image, Table, Container, Tabs, Tab } from 'react-bootstrap';


function useChars() {
  const [chars, setChars] = useState([])

  useEffect(() => {
    const unsubscribe = db
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Characters')
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

const CharsList = () => {
  const chars = useChars();

  return (
    <div>
      <h2>Characters List</h2>
      {chars.map((char) => (
        <CharsListItem
          id={char.id}
          title={char.title}
        />
      ))}
      <div className="d-block">
        <div>
          <Image />
        </div>
      </div>
    </div>
  )
}

export default CharsList;