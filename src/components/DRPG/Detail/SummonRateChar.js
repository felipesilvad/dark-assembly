import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import {Link} from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';


const CharsListItem = ({id, rate}) => {
  const charRef = db.firestore().collection('games').doc('DRPG').collection('Characters').doc(id)
  const [char, setChar] = useState('');

  useEffect(() => {
    charRef.get().then((char) => {
      const newChar = char.data();
      setChar(newChar)
    })
  }, [])

  return (
      <tr className="rate-tr" key={id}>
          <td className="p-0 m-0 border-r">
            <Link to={`/DRPG/characters/${id}`}>
                <Image className="rate-img" src={char.portrait_url} />
            </Link>
          </td>
          <td className=" border-r">
            <Link to={`/DRPG/characters/${id}`}>
              <h4 className="">{char.title}</h4>
            </Link>
          </td>
          <td className="">{rate}%</td>
      </tr>
  )
}

export default CharsListItem;