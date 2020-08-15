import React, { useState, useEffect } from 'react';
import db from '../firebase';

const CharDetail = ({match}) => {

  function useChar() {
    const [char, setChar] = useState('');
  
    useEffect(() => {
      db
        .firestore()
        .collection("characters")
        .doc(match.params.id)
        .get()
        .then((char) => {
          const newChar = char.data();
    
          setChar(newChar)
        })
    }, [])
  
    return char;
  }
  
  const char = useChar();
  console.log(char);

  return (
    <div>
      <h2>Character</h2>
        <p>{char.title}</p>
        <p>{char.stats}</p>
        <img src={char.url}/>
    </div>
  )
}

export default CharDetail;