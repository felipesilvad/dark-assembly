import React, {useState} from 'react';
import firebase from '../../../firebase';
import {Link} from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import moment from 'moment';

const SummonsListHome = ({summon}) => {
  const dates = []
  const [boolean, setBoolean] = useState(false);
  const now = moment().unix()
  firebase.firestore().collection('games').doc('DRPG').collection('Summons').doc(summon.id)
    .collection('Dates')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(now, '<' ,doc.data().endDate.seconds)
          if (now <= doc.data().endDate.seconds) {
            console.log(summon.id, doc.data().endDate.seconds)
            setBoolean(true)
          }
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  return (
    (boolean === true) ? (
      <Col className="summon-list"  key={summon.id}>
        <Link to={`/DRPG/summons/${summon.id}`}>
          <Image className="mx-auto d-block gray-bg sumon-list_img" src={summon.image_url} />
          <h4 className="text-center">{summon.title}</h4>
        </Link>
      </Col>
    ) : ('')
  )
}

export default SummonsListHome;