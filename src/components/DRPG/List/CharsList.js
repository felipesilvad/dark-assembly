import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import CharsListItem from './CharsListItem';
import { Row } from 'react-bootstrap';

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
      <Row className="">
        {chars.map((char) => (
          <CharsListItem
            id={char.id}
            title={char.title}
            portrait_url={char.portrait_url}
          />
        ))}
      </Row>
    </div>
  )
}

export default CharsList;