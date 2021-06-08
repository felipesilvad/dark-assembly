import React, { useState } from 'react';
import firebase, {storage} from '../../../firebase';

const AddSummon = () => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChangeImage = async (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0]
      const imgRef = storage.ref("images/DRPG/summons");
      const imageRef = imgRef.child(`${title}`)
      await imageRef.put(image)
      const summonRef = firebase.firestore().collection('games').doc('DRPG').collection('Summons');
      await imageRef.getDownloadURL().then((image_url) => {
        summonRef.where('title', "==", title).set({image_url}, { merge: true })
      })
    }
  }

  function onSubmit(e) {
    e.preventDefault()

    var fourStarsArea = document.getElementById("fourStars");
    var arrayOfLines = fourStarsArea.value.split("\n");
    var arrayFourStars = []
    for(var i = 0;i < arrayOfLines.length;i++){
      arrayFourStars.push({
        "id": arrayOfLines[i].split("/")[0],
        "title": arrayOfLines[i].split("/")[1],
        "rate": arrayOfLines[i].split("/")[2]
      })
    }
    console.log(arrayFourStars)
    
    const statsRef = firebase.firestore().collection('games').doc('DRPG').collection('Summons');
    statsRef.add({
      title,
      arrayFourStars
    })

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label><h4 id="stat">Add Summon</h4></label>
        </div>
        <div>
          <input type="text" name="title" placeholder="Title"
            onChange={e => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <textarea
            id="fourStars" className="summon-ta"
            onChange={e => setFourStars(e.currentTarget.value)}
          />
        </div>
        <button className="button add-button">Add</button>
      </form>
    </div>
  )
}

export default AddSummon;
