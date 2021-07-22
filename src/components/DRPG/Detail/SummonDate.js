import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import { Row, Col } from 'react-bootstrap';

const SummonDate = ({summonID}) => {
  const summonRef = db.firestore().collection('games').doc('DRPG').collection('Summons').doc(summonID);
  
  const [dates, setDates] = useState([])
  summonRef.collection('Dates').onSnapshot((snapshot) => {
    const newDates = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    setDates(newDates)
  })

  return (
    <div>
      <h3 className="sub-title">Dates</h3>
      {!! dates &&(dates.map((date) => (
        <div className="gray-bg mt-2">
          <Row className="m-0 border-b">
            <Col className="p-1 border-r text-center">Start Date</Col>
            <Col className="p-1 text-center">End Date</Col>
          </Row>
          <Row className="m-0">
            <Col className="p-1 text-center border-r">
                {date.startDate.toDate().toLocaleDateString()} - {date.startDate.toDate().toString().split(' ')[0]}
            </Col>
            <Col className="p-1 text-center">
                {date.endDate.toDate().toLocaleDateString()} - {date.endDate.toDate().toString().split(' ')[0]}
            </Col>
          </Row>
        </div>
      )))}
    </div>
  )
}

export default SummonDate;