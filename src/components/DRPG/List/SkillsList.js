import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase';
import db from '../../../firebase';
import SkillsListItem from './SkillsListItem';
import { Row, Col, Image, Table, Container, Tabs, Tab } from 'react-bootstrap';

// function useUniqueSkills() {
//   const [uniqueSkills, setUniqueSkills] = useState([])

//   useEffect(() => {
//     const unsubscribe = db.firestore().collection('games').doc('DRPG')
//       .collection('Skills').where('type', '==', 'Unique Skill')
//       .onSnapshot((snapshot) => {
//         const newUniqueSkills = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data()
//         }))

//         setUniqueSkills(newUniqueSkills)
//       })
//     return () => unsubscribe()
//   }, [])

//   return uniqueSkills;
// }

function useUniqueSkills() {
  const [uniqueSkills, setUniqueSkills] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("games")
      .doc("DRPG")
      .collection("Skills")
      // .orderBy("title")
      .where("type", "==", "Unique Skill")
      .onSnapshot((snapshot) => {
        const newUniqueSkills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setUniqueSkills(newUniqueSkills)
      })
    return () => unsubscribe()
  }, [])

  return uniqueSkills;
}

function useSpells() {
  const [spells, setSpells] = useState([])

  useEffect(() => {
    const unsubscribe = db.firestore().collection('games').doc('DRPG')
      .collection('Skills').where('type', '==', 'Spell')
      .onSnapshot((snapshot) => {
        const newSpells = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setSpells(newSpells)
      })
    return () => unsubscribe()
  }, [])

  return spells;
}

function useWmSkills() {
  const [wmSkills, setWmSkills] = useState([])

  useEffect(() => {
    const unsubscribe = db.firestore().collection('games').doc('DRPG')
      .collection('Skills').where('type', '==', 'Weapon Skill')
      .onSnapshot((snapshot) => {
        const newWmSkills = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setWmSkills(newWmSkills)
      })
    return () => unsubscribe()
  }, [])

  return wmSkills;
}

const SkillsList = () => {
  const uniqueSkills = useUniqueSkills();
  const spells = useSpells();
  const wmSkills = useWmSkills();

  const query = db.firestore().collection('games').doc('DRPG')
  .collection('Skills').where('type', '==', 'Weapon Skill')
  .orderBy('title').limit(2).get();

  console.log("skills",query)

  const Axe = require('../../../assets/DRPG/icons/weapons/Axe.png');
  const Bow = require('../../../assets/DRPG/icons/weapons/Bow.png');
  const Fist = require('../../../assets/DRPG/icons/weapons/Fist.png');
  const Gun = require('../../../assets/DRPG/icons/weapons/Gun.png');
  const Spear = require('../../../assets/DRPG/icons/weapons/Spear.png');
  const Staff = require('../../../assets/DRPG/icons/weapons/Staff.png');
  const Sword = require('../../../assets/DRPG/icons/weapons/Sword.png');
  const Monster1 = require('../../../assets/DRPG/icons/weapons/Monster1.png');
  const Monster2 = require('../../../assets/DRPG/icons/weapons/Monster2.png');

  return (
    <div>
      <h2>Skills List</h2>
      <Tabs className="d-flex justify-content-between" defaultActiveKey="unique">
        <Tab className="skill-tab" eventKey="unique" title="Unique Skills">
          {uniqueSkills.map((skill) => (
            <SkillsListItem
              id={skill.id}
              title={skill.title}
            />
          ))}
        </Tab>
        <Tab className="skill-tab" eventKey="spells" title="Spells">
          {spells.map((skill) => (
            <SkillsListItem
              id={skill.id}
              title={skill.title}
            />
          ))}
        </Tab>
        <Tab className="skill-tab" eventKey="weapon" title="Weapon Skills">
          <Tabs className="d-flex justify-content-between" defaultActiveKey="Sword">
            <Tab className="skill-tab" eventKey="Sword" title={<Image src={Sword} className="w_icons" />}>
              {wmSkills.map((skill) => (
                (skill.weapon === "Sword") ? (<SkillsListItem id={skill.id} />) : ('')
              ))}
            </Tab>
            <Tab className="skill-tab" eventKey="Fist" title={<Image src={Fist} className="w_icons" />}>
              {wmSkills.map((skill) => (
                (skill.weapon === "Fist") ? (<SkillsListItem id={skill.id} />) : ('')
              ))}
            </Tab>
            <Tab className="skill-tab" eventKey="Spear" title={<Image src={Spear} className="w_icons" />}>
              {wmSkills.map((skill) => (
                (skill.weapon === "Spear") ? (<SkillsListItem id={skill.id} />) : ('')
              ))}
            </Tab>
            <Tab className="skill-tab" eventKey="Bow" title={<Image src={Bow} className="w_icons" />}>
              {wmSkills.map((skill) => (
                (skill.weapon === "Bow") ? (<SkillsListItem id={skill.id} />) : ('')
              ))}
            </Tab>
            <Tab className="skill-tab" eventKey="Gun" title={<Image src={Gun} className="w_icons" />}>
              {wmSkills.map((skill) => (
                (skill.weapon === "Gun") ? (<SkillsListItem id={skill.id} />) : ('')
              ))}
            </Tab>
            <Tab className="skill-tab" eventKey="Axe" title={<Image src={Axe} className="w_icons" />}>
              {wmSkills.map((skill) => (
                (skill.weapon === "Axe") ? (<SkillsListItem id={skill.id} />) : ('')
              ))}
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </div>
  )
}

export default SkillsList;