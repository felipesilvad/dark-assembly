import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import { Row, Col, Image, Table, Container, Tabs, Tab } from 'react-bootstrap';


const CharDetailEvility = ({id, ne, neInt}) => {
  const evilityRef = db.firestore().collection('games').doc('DRPG').collection('Evility').doc(id)
  const [evility, setEvility] = useState('');

  useEffect(() => {
    evilityRef.get().then((evility) => {
      const newEvility = evility.data();
      setEvility(newEvility)
    })
  }, [])

  return (
    <>
      {!ne ? (
        <div key={id} id={id} className="gray-bg e-bg" >
          {!!neInt ? (
            <div className="d-flex border-b">
              <h5 className="ne-e border-r">N.E. {neInt}</h5>
              <div className="w-90 sub-e-title">
                <h3>{evility.title}</h3>
              </div>
            </div>
          ) : (
            <h3 className="border-b">{evility.title}</h3>
          )}
          <h4>
          {evility.target}{(evility.target !== "") ? (': ') : ('')} {evility.stat}{evility.int}{evility.intType} {!!evility.txt && evility.txt} {!!evility.turn && (`(${evility.turn} turns)`)}
          </h4>
        </div>
      ) : (
        <div key={id} id={id} className="gray-bg e-bg" >
          <h3 className="border-b">{evility.title}</h3>
          <h4>
            {evility.target}{(evility.target !== "") ? (': ') : ('')} {evility.stat}{evility.int}{evility.intType} {!!evility.txt && evility.txt} {!!evility.turn && (`(${evility.turn} turns)`)}
          </h4>
        </div>
      )}
    </>
  )
}

export default CharDetailEvility;