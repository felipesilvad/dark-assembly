import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import firebase from '../../../firebase';
import {Link} from 'react-router-dom';
import { Row } from 'react-bootstrap';

function useSummons() {
  const [summons, setSummons] = useState([])
  useEffect(() => {
    const unsubscribe = db
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Summons')
      .orderBy(firebase.firestore.FieldPath.documentId())
      .onSnapshot((snapshot) => {
        const newSummons = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setSummons(newSummons)
      })
    return () => unsubscribe()
  }, [])

  return summons;
}

const SummonsList = () => {
  const summons = useSummons();
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
      <label>Sort</label>
      <select name="Sort" id="Sort"
        onChange={e => setSort(e.currentSort.value)}
      >
        <option value="Self">Self</option>
        <option value="Sword-Wielding Allies">Sword-Wielding Allies</option>
      </select>
      <h2>Characters List</h2>
      {summons.sort(intid).map((summon) => (
        // <SummonsListItem
        //   id={summon.id}
        //   title={summon.title}
        //   portrait_url={summon.portrait_url}
        // />
        <h4><Link to={`/DRPG/summons/${summon.id}`}>{summon.id} - {summon.title}</Link></h4>
      ))}
    </div>
  )
}

export default SummonsList;