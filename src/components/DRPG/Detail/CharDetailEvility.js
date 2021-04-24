import React, { useState, useEffect } from 'react';
import db from '../../../firebase';

const CharDetailEvility = ({id}) => {
  const evilityRef = db.firestore().collection('games').doc('DRPG').collection('Evility').doc(id)
  const [evility, setEvility] = useState('');

  useEffect(() => {
    evilityRef.get().then((evility) => {
      const newEvility = evility.data();
      setEvility(newEvility)
    })
  }, [])

  return (
    <div key={id}>
      {evility.title}
    </div>
  )
}

export default CharDetailEvility;