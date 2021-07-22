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
  const chars = useChars();

  function order(a, b) {
    const sortA = a['added_date'];
    const sortB = b.added_date;
  
    let comparison = 0;
    if (sortA > sortB) {
      comparison = -1;
    } else if (sortA < sortB) {
      comparison = 1;
    }
    return comparison;
  }

  return (
    <div>
      <h3 className="sub-title">Latest Characters Added</h3>
      <Row className="">
        {chars.sort(order).slice(0,20).map((char) => (
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

export default Home;