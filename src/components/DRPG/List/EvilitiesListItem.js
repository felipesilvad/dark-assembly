import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import {Link} from 'react-router-dom';
import { Row, Col, Image} from 'react-bootstrap';

function useChars() {
  const [chars, setChars] = useState([])
  useEffect(() => {
    const unsubscribe = db
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Characters')
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

const CharsListItem = ({id, title, target, stat, int, intType, txt, turn}) => {
  const count = 0;
  const chars = useChars();

  return (
    <div key={id} id={id} className="gray-bg e-bg mlr-0">
      <div className="p-0">
        <h3 className="border-b" >{title}</h3>
        <h4>
        {target}{(target !== "") ? (': ') : ('')} {stat}{int}{intType} {!!txt && txt} {!!turn && (`(${turn} turns)`)}
        </h4>
      </div>
      <div className="d-block p-0">
        {chars.map((char) => (
          (char.mainEvility.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne1.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne2.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne3.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne4.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne5.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne6.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne7.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne8.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne9.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')||
          (char.ne10.value === id) ? (
            <Link to={`/DRPG/characters/${char.id}`}>
              <Image className="evility_char-list-lg gray-bg" src={char.portrait_url} />
            </Link>
          ) : ('')
        ))}

      </div>
    </div>
  )
}

export default CharsListItem;