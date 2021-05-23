import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import firebase from '../../../firebase';
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

const CharsList = () => {
  const chars = useChars();
  const [sort, setSort] = useState('title')

  function intid(a, b) {
    const idA = parseInt(a.id);
    const idB = parseInt(b.id);
  
    let comparison = 0;
    if (idA > idB) {
      comparison = 1;
    } else if (idA < idB) {
      comparison = -1;
    }
    return comparison;
  }

  function order(a, b) {
    const sortA = a.title;
    const sortB = b.title;
  
    let comparison = 0;
    if (sortA > sortB) {
      comparison = 1;
    } else if (sortA < sortB) {
      comparison = -1;
    }
    return comparison;
  }
  
  return (
    <div>
      <label>Sort</label>
      <select name="Sort" id="Sort"
        onChange={e => setSort(e.currentSort.value)}
      >
        <option value="Self">Self</option>
        <option value="Sword-Wielding Allies">Sword-Wielding Allies</option>
      </select>
      <h2>Characters List</h2>
      <Row className="">
        {chars.sort(order).map((char) => (
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