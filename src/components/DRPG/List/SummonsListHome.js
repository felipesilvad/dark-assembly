import React from 'react';
import firebase from '../../../firebase';
import {Link} from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import moment from 'moment';

const CharsList = ({summon}) => {
  const dates = []
  const now = moment().unix()
  firebase.firestore().collection('games').doc('DRPG').collection('Summons').doc(summon.id)
    .collection('Dates')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (now >= doc.data().endDate.seconds)
          dates.push(doc.data().endDate.seconds)
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  
  return (
    <Row>
      {dates.map(() => (
        <Col className="chars-list-item" key={summon.id}>
          <Link to={`/DRPG/characters/${summon.id}`}>
            <Image className="chars-list-item__img mx-auto d-block gray-bg" src={summon.img_url} />
            <h4 className="text-center">{summon.title}</h4>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default CharsList;