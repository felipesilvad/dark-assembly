import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase';
import Select from 'react-select';
import moment from 'moment';


function useSummons() {
  const [summons, setSummons] = useState([])
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Summons')
      .orderBy(firebase.firestore.FieldPath.documentId())
      .onSnapshot((snapshot) => {
        const newSummons = snapshot.docs.map((doc) => ({
          value: doc.id, label: doc.id + " " + doc.data().title
        }))

        setSummons(newSummons)
      })
    return () => unsubscribe()
  }, [])

  return summons;
}

const AddSummonDate = () => {
  const summons = useSummons();

  const [summon, setSummon] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const selectStyles = { 
    option: () => ({ color: 'black' }), 
    multiValueLabel: provided => ({ ...provided, whiteSpace: 'normal', color: 'black' }),
    inputValue: () => ({ color: 'black' }), 
  }

  function onSubmit(e) {
    e.preventDefault()
    
    const datesRef = firebase.firestore().collection('games').doc('DRPG')
      .collection('Summons').doc(summon.value).collection('Dates');
    datesRef.add({
      startDate: firebase.firestore.Timestamp.fromDate(new Date(moment(start).format('MMMM D YYYY'))),
      endDate: firebase.firestore.Timestamp.fromDate(new Date(moment(end).format('MMMM D YYYY'))),
    })

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label><h4 id="stat">Add Summon Date</h4></label>
        </div>
        <div>
          <label>Summon</label>
          <Select 
            options={summons} onChange={e => setSummon(e)}
            styles={selectStyles} className="Selector" isSearchable autoFocus 
          />
        </div>
        <label>Start Date</label>
        <input type="date" onChange={e => setStart(e.currentTarget.value)} />
        <label>End Date</label>
        <input type="date" onChange={e => setEnd(e.currentTarget.value)} />
        <button className="button add-button">Add</button>
      </form>
    </div>
  )
}

export default AddSummonDate;