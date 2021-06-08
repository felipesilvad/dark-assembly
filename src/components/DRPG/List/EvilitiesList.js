import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase';
import EvilitiesListItem from './EvilitiesListItem';
import Options from '../Add/Options';
import Select from 'react-select'


function useEvilities() {
  const [evilities, setEvilities] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Evility')
      .onSnapshot((snapshot) => {
        const newEvilities = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setEvilities(newEvilities)
      })
    return () => unsubscribe()
  }, [])

  return evilities;
}

function useTargets() {
  const [targets, setTargets] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Targets')
      .orderBy('title')
      .onSnapshot((snapshot) => {
        const newTargets = snapshot.docs.map((doc) => ({
          value: doc.data().title, label: doc.data().title
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
      .orderBy('title')
      .onSnapshot((snapshot) => {
        const newStats = snapshot.docs.map((doc) => ({
          value: doc.data().title, label: doc.data().title
        }))

        setStats(newStats)
      })
    return () => unsubscribe()
  }, [])

  return stats;
}

const EvilitiesList = () => {
  const [target, setTarget] = useState("")
  const [stat, setStat] = useState("")
  const targets = useTargets();
  const targetOptions = [
    { value: "", label: "No Filter" },
    ...targets
  ]
  const stats = useStats();
  const statOptions = [
    { value: "", label: "No Filter" },
    ...stats
  ]
  const evilities = useEvilities(target);

  const selectStyles = { 
    option: () => ({ color: 'black' }), 
    multiValueLabel: provided => ({ ...provided, whiteSpace: 'normal', color: 'black' }),
    inputValue: () => ({ color: 'black' }), 
  }

  function order(a, b) {
    const sortA = a.title;
    const sortB = b.title;
  
    let comparison = 0;
    if (sortA > sortB) {
      comparison = 1;
    } else if (sortA < sortB) {
      comparison = -1;
    }
    return comparison;
  }

  function filterTarget(evility) {
    if (target === "" || evility.target === "") {
      return true
    } else {
      return evility.target == target.value
    }
  }
  function filterStat(evility) {
    if (stat === "") {
      return true
    } else {
      return evility.stat == stat.value
    }
  }

  return (
    <div>
      <h2 className="sub-title p-2 mt-2">Evilities List</h2>
      <div>
        <h3>Filter Evilities</h3>
        <div className="d-flex gray-bg">
          <label>Target</label>
            <Select 
              onChange={e => setTarget(e)} options={targetOptions} 
              styles={selectStyles} className="Selector" isSearchable
            />
        </div>
        <div className="d-flex gray-bg">
          <label>Effect</label>
            <Select 
              onChange={e => setStat(e)} options={statOptions} 
              styles={selectStyles} className="Selector" isSearchable
            />
        </div>
      </div>
      
      {evilities.sort(order).filter(filterTarget).filter(filterStat).map((evility) => (
        <EvilitiesListItem
          id={evility.id}
          title={evility.title}
          target={evility.target}
          stat={evility.stat}
          int={evility.int}
          intType={evility.intType}
          txt={evility.txt}
          turn={evility.turn}
        />
      ))}
    </div>
  )
}

export default EvilitiesList;