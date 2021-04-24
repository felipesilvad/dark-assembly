import React, { useState } from 'react';
import firebase from '../../../firebase';

const AddSkillEffect = () => {
  const [title, setTitle] = useState('');

  function onSubmit(e) {
    e.preventDefault()

    const effectsRef = firebase.firestore().collection('games').doc('DRPG').collection('Effects');

    effectsRef.add({
      title,
    })

  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <label><h4 id="effect">Add Effect</h4></label>
          <input className="w-90" type="text" name="title" placeholder="Title"
            onChange={e => setTitle(e.currentTarget.value)}
          />
        <button className="button add-button">Add</button>
      </form>
    </div>
  )
}

export default AddSkillEffect;
