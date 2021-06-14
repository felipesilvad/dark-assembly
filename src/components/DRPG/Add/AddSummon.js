import React, { useState, useEffect } from 'react';
import firebase, {storage} from '../../../firebase';
import Select from 'react-select';


function useChars() {
  const [chars, setChars] = useState([])
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Characters')
      .orderBy(firebase.firestore.FieldPath.documentId())
      .onSnapshot((snapshot) => {
        const newChars = snapshot.docs.map((doc) => ({
          value: doc.id, label: doc.id + " " + doc.data().title
        }))

        setChars(newChars)
      })
    return () => unsubscribe()
  }, [])

  return chars;
}

const AddSummon = () => {
  const chars = useChars();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [featured, setFeatured] = useState('');

  const selectStyles = { 
    option: () => ({ color: 'black' }), 
    multiValueLabel: provided => ({ ...provided, whiteSpace: 'normal', color: 'black' }),
    inputValue: () => ({ color: 'black' }), 
  }

  const handleChangeImage = async (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0]
      const imgRef = storage.ref("images/DRPG/summons");
      const imageRef = imgRef.child(`${title}`)
      await imageRef.put(image)
      const summonRef = firebase.firestore().collection('games').doc('DRPG').collection('Summons').doc(id);
      await imageRef.getDownloadURL().then((image_url) => {
        summonRef.set({image_url}, { merge: true })
      })
    }
  }

  function onSubmit(e) {
    e.preventDefault()
    
    const statsRef = firebase.firestore().collection('games').doc('DRPG').collection('Summons');
    statsRef.doc(id).set({
      title,
      featured
    }, { merge: true })

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label><h4 id="stat">ID</h4></label>
        </div>
        <div>
          <input type="text" name="title" placeholder="Title"
            onChange={e => setId(e.currentTarget.value)}
          />
        </div>
        <div>
          <label><h4 id="stat">Add Summon</h4></label>
        </div>
        <div>
          <input type="text" name="title" placeholder="Title"
            onChange={e => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label>Featured</label>
          <Select 
            options={chars} onChange={e => setFeatured(e)}
            styles={selectStyles} className="Selector" isSearchable isMulti autoFocus 
          />
        </div>
        <label>Image</label>
        <input type="file" onChange={handleChangeImage} />
        <button className="button add-button">Add</button>
      </form>
    </div>
  )
}

export default AddSummon;
