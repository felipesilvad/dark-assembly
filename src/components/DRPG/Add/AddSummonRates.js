import React, { useState, useEffect } from 'react';
import firebase, {storage} from '../../../firebase';
import Select from 'react-select';
import { Row, Col} from 'react-bootstrap';

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

const AddSummon = () => {
  const summons = useSummons();

  const [summon, setSummon] = useState('');
  const [id, setId] = useState('');
  const [price1x, setPrice1x] = useState('');
  const [price10x, setPrice10x] = useState('');
  const [paid, setPaid] = useState('');
  const [twoStars, setTwoStars] = useState('');
  const [threeStars, setThreeStars] = useState('');
  const [fourStars, setFourStars] = useState('');
  const [twoStarsG, setTwoStarsG] = useState('');
  const [threeStarsG, setThreeStarsG] = useState('');
  const [fourStarsG, setFourStarsG] = useState('');

  const selectStyles = { 
    option: () => ({ color: 'black' }), 
    multiValueLabel: provided => ({ ...provided, whiteSpace: 'normal', color: 'black' }),
    inputValue: () => ({ color: 'black' }), 
  }

  const handleChangeImage = async (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0]
      const imgRef = storage.ref("images/DRPG/summons");
      const imageRef = imgRef.child(`${summon.title} - ${id}`)
      await imageRef.put(image)
      const ratesRef = firebase.firestore().collection('games').doc('DRPG')
        .collection('Summons').doc(summon.value).collection('Rates').doc(id);
      await imageRef.getDownloadURL().then((image_url) => {
        ratesRef.set({image_url}, { merge: true })
      })
    }
  }
  
  function onSubmit(e) {
    e.preventDefault()

    var twoStarsArea = document.getElementById("twoStars");
    var arrayOfLines2 = twoStarsArea.value.split("\n");
    var ratesTwoStars = []
    if (ratesTwoStars !== []) {
      for(var i2 = 0;i2 < arrayOfLines2.length;i2++){
        ratesTwoStars.push({
          "id": arrayOfLines2[i2].split("/")[0],
          "title": arrayOfLines2[i2].split("/")[1],
          "rate": arrayOfLines2[i2].split("/")[2]
        })
      }
    }
    
    var threeStarsArea = document.getElementById("threeStars");
    var arrayOfLines3 = threeStarsArea.value.split("\n");
    var ratesThreeStars = []
    if (ratesThreeStars !== []) {
      for(var i3 = 0;i3 < arrayOfLines3.length;i3++){
        ratesThreeStars.push({
          "id": arrayOfLines3[i3].split("/")[0],
          "title": arrayOfLines3[i3].split("/")[1],
          "rate": arrayOfLines3[i3].split("/")[2]
        })
      }
    }

    var fourStarsArea = document.getElementById("fourStars");
    var arrayOfLines4 = fourStarsArea.value.split("\n");
    var ratesFourStars = []
    if (ratesFourStars !== []) {
      for(var i4 = 0;i4 < arrayOfLines4.length;i4++){
        ratesFourStars.push({
          "id": arrayOfLines4[i4].split("/")[0],
          "title": arrayOfLines4[i4].split("/")[1],
          "rate": arrayOfLines4[i4].split("/")[2]
        })
      }
    }
    
    var twoStarsGArea = document.getElementById("twoStarsG");
    var arrayOfLines2G = twoStarsGArea.value.split("\n");
    var ratesTwoStarsG = []
    if (ratesTwoStarsG !== []) {
      for(var i2G = 0;i2G < arrayOfLines2G.length;i2G++){
        ratesTwoStarsG.push({
          "id": arrayOfLines2G[i2G].split("/")[0],
          "title": arrayOfLines2G[i2G].split("/")[1],
          "rate": arrayOfLines2G[i2G].split("/")[2]
        })
      }
    }
    
    var threeStarsAreaG = document.getElementById("threeStarsG");
    var arrayOfLines3G = threeStarsAreaG.value.split("\n");
    var ratesThreeStarsG = []
    if (ratesThreeStarsG !== []) {
      for(var i3G = 0;i3G < arrayOfLines3G.length;i3G++){
        ratesThreeStarsG.push({
          "id": arrayOfLines3G[i3G].split("/")[0],
          "title": arrayOfLines3G[i3G].split("/")[1],
          "rate": arrayOfLines3G[i3G].split("/")[2]
        })
      }
    }

    var fourStarsAreaG = document.getElementById("fourStarsG");
    var arrayOfLines4G = fourStarsAreaG.value.split("\n");
    var ratesFourStarsG = []
    if (ratesFourStarsG !== []) {
      for(var i4G = 0;i4G < arrayOfLines4G.length;i4G++){
        ratesFourStarsG.push({
          "id": arrayOfLines4G[i4G].split("/")[0],
          "title": arrayOfLines4G[i4G].split("/")[1],
          "rate": arrayOfLines4G[i4G].split("/")[2]
        })
      }
    }
    
    
    const ratesRef = firebase.firestore().collection('games').doc('DRPG')
      .collection('Summons').doc(summon.value).collection('Rates');
    ratesRef.doc(id).set({
      ratesTwoStars,
      ratesThreeStars,
      ratesFourStars,
      ratesTwoStarsG,
      ratesThreeStarsG,
      ratesFourStarsG,
      price1x,
      price10x,
      paid,
    }, { merge: true })

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label><h4 id="stat">Add Summon Rates</h4></label>
        </div>
        <div>
          <label>Summon</label>
          <Select 
            options={summons} onChange={e => setSummon(e)}
            styles={selectStyles} className="Selector" isSearchable autoFocus 
          />
        </div>
        <div>
          <input className="" type="number" name="id" placeholder="ID"
            onChange={e => setId(e.currentTarget.value)}
          />
          <input className="" type="number" name="Price1x" placeholder="Price1x"
            onChange={e => setPrice1x(e.currentTarget.value)}
          />
          <input className="" type="number" name="Price10x" placeholder="Price10x"
            onChange={e => setPrice10x(e.currentTarget.value)}
          />
          Paid:
          <input className="" type="checkbox" name="paid" placeholder="paid"
            onChange={e => setPaid(e.currentTarget.value)}
          />
        </div>
        <label>Image</label>
        <input type="file" onChange={handleChangeImage} />
        <Row>
          <label>Normal</label>
          <Col>
            <textarea
              id="fourStars" className="summon-ta"
              onChange={e => setFourStars(e.currentTarget.value)}
            />
          </Col>
          <Col>
            <textarea
              id="threeStars" className="summon-ta"
              onChange={e => setThreeStars(e.currentTarget.value)}
            />
          </Col><Col>
            <textarea
              id="twoStars" className="summon-ta"
              onChange={e => setTwoStars(e.currentTarget.value)}
            />
          </Col>
        </Row>
        <Row>
          <label>Guaranteed</label>
          <Col>
            <textarea
              id="fourStarsG" className="summon-ta"
              onChange={e => setFourStarsG(e.currentTarget.value)}
            />
          </Col>
          <Col>
            <textarea
              id="threeStarsG" className="summon-ta"
              onChange={e => setThreeStarsG(e.currentTarget.value)}
            />
          </Col><Col>
            <textarea
              id="twoStarsG" className="summon-ta"
              onChange={e => setTwoStarsG(e.currentTarget.value)}
            />
          </Col>
        </Row>
        <button className="button add-button">Add</button>
      </form>
    </div>
  )
}

export default AddSummon;
