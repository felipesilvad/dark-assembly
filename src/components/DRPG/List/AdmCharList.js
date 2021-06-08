import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import firebase from '../../../firebase';

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

const AdmCharList = () => {
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
    const sortA = a['title'];
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
      <h2>Characters List</h2>
        {chars.sort(order).map((char) => (
          <h4>
            {char.id}-{char.title}
          </h4>
        ))}
    </div>
  )
}

export default AdmCharList;