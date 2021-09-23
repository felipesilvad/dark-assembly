import React, { useState, useEffect } from 'react';
import firebase from '../../../firebase';
import Options from './Options';

function useSkillEffect() {
  const [effects, setEffects] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Effects')
      .orderBy('title')
      .onSnapshot((snapshot) => {
        const newEffects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setEffects(newEffects)
      })
    return () => unsubscribe()
  }, [])

  return effects;
}


const AddEvility = () => {
  const effects = useSkillEffect();

  const [title, setTitle] = useState('');
  const [type, setType] = useState('Unique Skill');
  const [pwr, setPwr] = useState('');
  const [element, setElement] = useState('N/A');
  const [target, setTarget] = useState('One Enemy');
  const [stat, setStat] = useState('');
  const [sp, setSp] = useState('');
  const [cup, setCUP] = useState('');
  const [effect, setEffect] = useState('');
  const [effectInt, setEffectInt] = useState('');
  const [effectIntType, setEffectIntType] = useState('%');
  const [effect2, setEffect2] = useState('');
  const [effectInt2, setEffectInt2] = useState('');
  const [effectIntType2, setEffectIntType2] = useState('%');
  const [unlock, setUnlock] = useState('Lv');
  const [unlockInt, setUnlockInt] = useState('');
  const [weapon, setWeapon] = useState('');
  const [description, setDescription] = useState('');



  function onSubmit(e) {
    e.preventDefault()

    const skillsRef = firebase.firestore().collection('games').doc('DRPG').collection('Skills');

    skillsRef.add({
      title,
      type,
      pwr,
      element,
      target,
      stat,
      sp,
      cup,
      effect,
      effectInt,
      effectIntType,
      effect2,
      effectInt2,
      effectIntType2,
      unlock,
      unlockInt,
      weapon,
      description
    })
  }


  return (
    <div>
      <h4 id="skill">Add Skill</h4>
      <form onSubmit={onSubmit}>
        
        <div className="d-flex">
          <input className="" type="text" name="title" placeholder="Title"
            onChange={e => setTitle(e.currentTarget.value)}
          />
          <select name="type" id="type"
            onChange={e => setType(e.currentTarget.value)}
          >
            <option value="Unique Skill">Unique Skill</option>
            <option value="Spell">Spell</option>
            <option value="Weapon Skill">Weapon Skill</option>
          </select>
          <select name="Pwr" id="Pwr"
            onChange={e => setPwr(e.currentTarget.value)}
          >
            <option value=""></option>
            <option value="G">G</option>
            <option value="G+">G+</option>
            <option value="F">F</option>
            <option value="F+">F+</option>
            <option value="E">E</option>
            <option value="E+">E+</option>
            <option value="D">D</option>
            <option value="D+">D+</option>
            <option value="C">C</option>
            <option value="C+">C+</option>
            <option value="B">B</option>
            <option value="B+">B+</option>
            <option value="A">A</option>
            <option value="A+">A+</option>
            <option value="S">S</option>
            <option value="S+">S+</option>
            <option value="SS">SS</option>
            <option value="SS+">SS+</option>
          </select>
        </div>
        <div className="d-flex">
          <select name="Element" id="Element" placeholder="Element"
            onChange={e => setElement(e.currentTarget.value)}
          >
            <option value="N/A">N/A</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Wind">Wind</option>
            <option value="Star">Star</option>
          </select>
          <select name="Target" id="Target"
            onChange={e => setTarget(e.currentTarget.value)}
          >
            <option value="One Enemy">One Enemy</option>
            <option value="All Enemies">All Enemies</option>
            <option value="One Ally">One Ally</option>
            <option value="All Allies">All Allies</option>
            <option value="Self">Self</option>
          </select>
          <select name="Stat" id="Stat"
            onChange={e => setStat(e.currentTarget.value)}
          >
            <option value=""></option>
            <option value="ATK">ATK</option>
            <option value="INT">INT</option>
            <option value="RES">RES</option>
          </select>
          <input className="" type="number" name="Sp" placeholder="SP" onChange={e => setSp(e.currentTarget.value)} />
        </div>
        <div className="d-flex">
          Effect
          <select name="effect" id="effect"
            onChange={e => setEffect(e.currentTarget.value)}
          >
            <option value=""></option>
            {effects.map((effect) => (
              <Options
                id={effect.id}
                title={effect.title}
              />
            ))}
          </select>
          <input className="" type="number" name="EffectInt" placeholder="EffectInt" onChange={e => setEffectInt(e.currentTarget.value)} />
          <select name="EffectIntType" id="EffectIntType"
            onChange={e => setEffectIntType(e.currentTarget.value)}
          >
            <option value="%">%</option>
            <option value=""></option>
          </select>
        </div>
        <div className="d-flex">
          CUP<input type="checkbox" onChange={e => setCUP(e.currentTarget.checked)}/>
        </div>
        <div className="d-flex">
          Effect2
          <select name="effect" id="effect"
            onChange={e => setEffect2(e.currentTarget.value)}
          >
            <option value=""></option>
            {effects.map((effect) => (
              <Options
                id={effect.id}
                title={effect.title}
              />
            ))}
          </select>
          <input className="" type="number" name="EffectInt" placeholder="EffectInt" onChange={e => setEffectInt2(e.currentTarget.value)} />
          <select name="EffectIntType" id="EffectIntType"
            onChange={e => setEffectIntType2(e.currentTarget.value)}
          >
            <option value="%">%</option>
            <option value=""></option>
          </select>
        </div>
        <div className="d-flex">
          <select name="Unlock" id="Unlock"
            onChange={e => setUnlock(e.currentTarget.value)}
          >
            <option value="Lv">Lv</option>
            <option value="Wm">Wm</option>
            <option value="N.E.">N.E.</option>
          </select>
          <input className="" type="number" name="UnlockInt" placeholder="UnlockInt" onChange={e => setUnlockInt(e.currentTarget.value)} />
          <select name="Weapon" id="Weapon"
            onChange={e => setWeapon(e.currentTarget.value)}
          >
            <option value=""></option>
            <option value="Sword">Sword</option>
            <option value="Fist">Fist</option>
            <option value="Spear">Spear</option>
            <option value="Bow">Bow</option>
            <option value="Gun">Gun</option>
            <option value="Axe">Axe</option>
            <option value="Staff">Staff</option>
            <option value="Monster1">Monster1</option>
            <option value="Monster2">Monster2</option>
          </select>
        </div>
        <input className="" type="text" name="Description" placeholder="Description"
          onChange={e => setDescription(e.currentTarget.value)}
        />
      
        <button className="button add-button">Add</button>
      </form>

    </div>
  )
}

export default AddEvility;
