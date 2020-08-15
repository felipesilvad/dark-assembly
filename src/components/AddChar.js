import React, { useState } from 'react';
import firebase, {storage} from '../firebase';


const AddChar = () => {
  const [title, setTitle] = useState('');
  const [stats, setStats] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  function onSubmit(e) {
    e.preventDefault()

    // firebase
    //   .firestore()
    //   .collection('characters')
    //   .add({
    //     title,
    //     stats
    //   })
    //   .then(() => {
    //     setTitle('')
    //     setStats('')
    //   })

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.error(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            firebase
              .firestore()
              .collection('characters')
              .add({
                title,
                stats,
                url
              })
              .then(() => {
                setTitle('')
                setStats('')
                setUrl('')
              })
          });
      }
    )
  }

  const handleChangeImage = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={e => setTitle(e.currentTarget.value)}
        />
        <input
          type="number"
          name="stats"
          placeholder="stats"
          onChange={e => setStats(e.currentTarget.value)}
        />
        <input type="file" onChange={handleChangeImage} />
        <button>Post</button>
      </form>
    </div>
  )
}

export default AddChar;
