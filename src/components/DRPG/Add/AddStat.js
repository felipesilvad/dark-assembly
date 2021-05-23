import React, { useState } from 'react';
import firebase from '../../../firebase';

const AddStat = () => {
  const [title, setTitle] = useState('');

  function onSubmit(e) {
    e.preventDefault()

    const statsRef = firebase.firestore().collection('games').doc('DRPG').collection('Stats');

    statsRef.add({
      title,
    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label><h4 id="stat">Add Stat</h4></label>
          <input className="w-90" type="text" name="title" placeholder="Title"
            onChange={e => setTitle(e.currentTarget.value)}
          />
        <button className="button add-button">Add</button>
      </form>
    </div>
  )
}

export default AddStat;
