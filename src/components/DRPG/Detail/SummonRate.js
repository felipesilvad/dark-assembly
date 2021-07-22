import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import { Row, Col, Image } from 'react-bootstrap';

const SummonRate = ({summonID}) => {
  const summonRef = db.firestore().collection('games').doc('DRPG').collection('Summons').doc(summonID);
  
  const [rates, setRates] = useState([])
  summonRef.collection('Rates').onSnapshot((snapshot) => {
    const newRates = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    setRates(newRates)
  })

  return (
    <div>
      <h3 className="sub-title">Rates</h3>
      {!! rates &&(rates.map((rate) => (
        <Row className="gray-bg mt-2">
          <Col>
            <Image src={rate.image_url} />
          </Col>
          <Col>
          </Col>
        </Row>
      )))}
    </div>
    
  )
}

export default SummonRate;