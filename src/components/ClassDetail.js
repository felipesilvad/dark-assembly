import React, { useState, useEffect } from 'react';
import db from '../firebase';

const ClassDetail = ({match}) => {
  // Class
  function useClass() {
    const [singleclass, setClass] = useState('');
  
    useEffect(() => {
      db
        .firestore()
        .collection('games')
        .doc('Disgaea5')
        .collection('classes')
        .doc(match.params.id)
        .get()
        .then((singleclass) => {
          const newClass = singleclass.data();
    
          setClass(newClass)
        })
    }, [])
  
    return singleclass;
  }
  const singleclass = useClass();

  //Char
  function useChar() {
    const [char, setChar] = useState('');
  
    useEffect(() => {
      db
        .firestore()
        .collection("characters")
        .where("title", "==", "Laharl")
        .onSnapshot((snapshot) => {
          const newChar = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
  
          setChar(newChar)
        })
    }, [])
  
    return char;
  }

  const char = useChar();
  console.log(char[0])

  //Ranks
  function useRanks() {
    const [ranks, setRanks] = useState([])
  
    useEffect(() => {
      const unsubscribe = db
        .firestore()
        .collection('games')
        .doc('Disgaea5')
        .collection('classes')
        .doc(match.params.id)
        .collection('ranks')
        .onSnapshot((snapshot) => {
          const newRanks = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
  
          setRanks(newRanks)
        })
      return () => unsubscribe()
    }, [])
  
    return ranks;
  }

  const ranks = useRanks();

  return (
    <div>
      <h2>Class</h2>
        <p>{singleclass.title}</p>
        <p></p>
        {ranks.map((rank) => (
          rank.basic_stats.ATK
        ))}
    </div>
  )
}

export default ClassDetail;