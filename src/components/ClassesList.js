import React, { useState, useEffect } from 'react';
import db from '../firebase';
import ClassesListItem from './ClassesListItem.js';

function useClasses() {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const unsubscribe = db
      .firestore()
      .collection('games')
      .doc('Disgaea5')
      .collection('classes')
      .onSnapshot((snapshot) => {
        const newClasses = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setClasses(newClasses)
      })
    return () => unsubscribe()
  }, [])

  return classes;
}

const ClassesList = () => {
  const classes = useClasses();

  return (
    <div>
      <h2>Characters List</h2>
      {classes.map((singleclass) => (
        <ClassesListItem
          key={singleclass.id}
          id={singleclass.id}
          title={singleclass.title}
          stats={singleclass.stats}
        />
      ))}
    </div>
  )
}

export default ClassesList;