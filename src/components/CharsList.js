import React, { useState, useEffect } from 'react';
import db from '../firebase';
import CharsListItem from './CharsListItem';

function useChars() {
  const [chars, setChars] = useState([])

  useEffect(() => {
    const unsubscribe = db
      .firestore()
      .collection('characters')
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
          key={char.id}
          id={char.id}
          title={char.title}
          stats={char.stats}
        />
      ))}
    </div>
  )
}

export default CharsList;