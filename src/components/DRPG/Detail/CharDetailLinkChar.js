import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import {Link} from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';


const CharDetailLinkChar = ({id}) => {

  const charRef = db.firestore().collection('games').doc('DRPG').collection('Characters').doc(id)
  const [char, setChar] = useState('');

  useEffect(() => {
    charRef.get().then((char) => {
      const newChar = char.data();
      setChar(newChar)
    })
  }, [])

  if (char) {
    
  }
  return (
    !! char &&(
      <Col className="chars-list-item" key={id}>
        <Link to={`/DRPG/characters/${id}`}>
          <Image className="chars-list-item__img mx-auto d-block gray-bg" src={char.portrait_url} />
          <h4 className="text-center">{char.title}</h4>
        </Link>
      </Col>
    )
  )
}

export default CharDetailLinkChar;