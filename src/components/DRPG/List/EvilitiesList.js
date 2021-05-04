import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase';
import EvilitiesListItem from './EvilitiesListItem';
import { Row, Col } from 'react-bootstrap';

function useEvilities(filterTarget) {
  const [evilities, setEvilities] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Evility')
      .where("target", "==", filterTarget)
      .onSnapshot((snapshot) => {
        const newEvilities = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setEvilities(newEvilities)
        console.log('filterTarget', filterTarget)
      })
    return () => unsubscribe()
  }, [])

  return evilities;
}

const EvilitiesList = () => {
  const [target, setTarget] = useState("Self")
  const evilities = useEvilities(target);

  console.log('target',target)

  return (
    <div>
      <h2>Evilities List</h2>
      <Row className=" pt-2">
        <Col>
          <label>Target</label>
          <select name="Target" id="Target"
            onChange={e => setTarget(e.currentTarget.value)}
          >
            <option value="Self">Self</option>
            <option value="Sword-Wielding Allies">Sword-Wielding Allies</option>
          </select>
        </Col>
      </Row>
      {evilities.map((evility) => (
        <EvilitiesListItem
          id={evility.id}
          title={evility.title}
          target={evility.target}
          stat={evility.stat}
          int={evility.int}
          intType={evility.intType}
          txt={evility.txt}
          turn={evility.turn}
        />
      ))}
    </div>
  )
}

export default EvilitiesList;