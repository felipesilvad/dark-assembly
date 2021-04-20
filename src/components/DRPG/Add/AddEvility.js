import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase';
import Options from './Options';

function useTargets() {
  const [targets, setTargets] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Targets')
      .onSnapshot((snapshot) => {
        const newTargets = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setTargets(newTargets)
      })
    return () => unsubscribe()
  }, [])

  return targets;
}

function useStats() {
  const [stats, setStats] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Stats')
      .onSnapshot((snapshot) => {
        const newStats = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setStats(newStats)
      })
    return () => unsubscribe()
  }, [])

  return stats;
}

const AddEvility = () => {
  const targets = useTargets();
  const stats = useStats();


  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('-');
  const [stat, setStat] = useState('-');
  const [int, setInt] = useState('');
  const [intType, setIntType] = useState('%');
  const [txt, setTxt] = useState('');
  const [turns, setTurns] = useState('');

  function onSubmit(e) {
    e.preventDefault()

    const evilityRef = firebase.firestore().collection('games').doc('DRPG').collection('Evility');

    evilityRef.add({
      title,
      target,
      stat,
      int,
      intType,
      txt,
      turns
    })
  }


  return (
    <div>
      <h4 id="evility">Add Evility</h4>
      <form onSubmit={onSubmit}>
        <input className="" type="text" name="title" placeholder="Title"
          onChange={e => setTitle(e.currentTarget.value)}
        />
        <div className="d-flex">
          <div>
            <select name="target" id="target"
              onChange={e => setTarget(e.currentTarget.value)}
            >
              <option value="-">-</option>
              {targets.map((target) => (
                <Options
                  id={target.id}
                  title={target.title}
                />
              ))}
            </select>
          </div>
          :
          <div>
            <select name="stat" id="stat"
              onChange={e => setStat(e.currentTarget.value)}
            >
              <option value="-">-</option>
              {stats.map((target) => (
                <Options
                  id={target.id}
                  title={target.title}
                />
              ))}
            </select>
          </div>
          <input className="" type="number" name="Int" onChange={e => setInt(e.currentTarget.value)} />
          <select name="IntType" id="IntType"
            onChange={e => setIntType(e.currentTarget.value)}
          >
            <option value="%">%</option>
            <option value=""></option>
          </select>
          <input className="" type="text" name="Txt" placeholder="Txt"
            onChange={e => setTxt(e.currentTarget.value)}
          />
          <input className="w-10" type="number" name="Turns" onChange={e => setTurns(e.currentTarget.value)} />
        </div>
      
        <button className="button">Post</button>
      </form>

    </div>
  )
}

export default AddEvility;
