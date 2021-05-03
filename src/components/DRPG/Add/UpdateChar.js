import React, { useState, useEffect } from 'react';
import firebase, {storage} from '../../../firebase';
import db from '../../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row, Col, Container } from 'react-bootstrap';
import AddEvility from './AddEvility';
import AddTarget from './AddTarget';
import AddStat from './AddStat';
import AddSkill from './AddSkill';
import AddSkillEffect from './AddSkillEffect';
import Select from 'react-select';
import moment from 'moment';

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
          value: doc.id, label: doc.data().title
        }))

        setEvilities(newEvilities)
      })
    return () => unsubscribe()
  }, [])

  return evilities;
}

function useSkills() {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('games')
      .doc('DRPG')
      .collection('Skills')
      .onSnapshot((snapshot) => {
        const newSkills = snapshot.docs.map((doc) => ({
          value: doc.id, label: doc.data().title, 
        }))

        setSkills(newSkills)
      })
    return () => unsubscribe()
  }, [])

  return skills;
}


const UpdateChar = ({match}) => {

  const charRef = db.firestore().collection('games').doc('DRPG').collection('Characters').doc(match.params.id)
  const [char, setChar] = useState('');

  useEffect(() => {
    charRef.get().then((char) => {
      const newChar = char.data();
      setChar(newChar)
    })
  }, [])

  const evilities = useEvilities();
  const skills = useSkills();
  const NEOptions = [
    { value: 10, label: '10' },
    { value: 25, label: '25' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
    ...evilities,
    ...skills,
  ]
  const StarsInOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: 'D2', label: 'D2' },
    { value: 'RPG', label: 'RPG' },
  ]

  const selectStyles = { 
    option: () => ({ color: 'black' }), 
    multiValueLabel: provided => ({ ...provided, whiteSpace: 'normal', color: 'black' }),
    inputValue: () => ({ color: 'black' }), 
  }

  const [title, setTitle] = useState(char.title);
  const [type, setType] = useState(char.type);
  const [forte, setForte] = useState(char.forte);
  const [gender, setGender] = useState(char.gender);
  const [type_2, setType_2] = useState(char.type_2);
  const [stars, setStars] = useState(char.stars);

  const [hp_1, setHP_1] = useState(char.hp_1);
  const [atk_1, setATK_1] = useState(char.atk_1);
  const [def_1, setDEF_1] = useState(char.def_1);
  const [int_1, setINT_1] = useState(char.int_1);
  const [res_1, setRES_1] = useState(char.res_1);
  const [spd_1, setSPD_1] = useState(char.spd_1);
  const [hp_9, setHP_9] = useState(char.hp_9);
  const [atk_9, setATK_9] = useState(char.atk_9);
  const [def_9, setDEF_9] = useState(char.def_9);
  const [int_9, setINT_9] = useState(char.int_9);
  const [res_9, setRES_9] = useState(char.res_9);
  const [spd_9, setSPD_9] = useState(char.spd_9);
  const [crt, setCRT] = useState(char.crt);
  const [crd, setCRD] = useState(char.crd);

  const [r_fire, setR_Fire] = useState(char.r_fire);
  const [r_water, setR_Water] = useState(char.r_water);
  const [r_wind, setR_Wind] = useState(char.r_wind);
  const [r_star, setR_Star] = useState(char.r_star);
  const [r_poison, setR_Poison] = useState(char.r_poison);
  const [r_paralysis, setR_Paralysis] = useState(char.r_paralysis);
  const [r_sleep, setR_Sleep] = useState(char.r_sleep);
  const [r_forget, setR_Forget] = useState(char.r_forget);

  const [class_1, setClass1] = useState(char.class_1);
  const [class_2, setClass2] = useState(char.class_2);
  const [class_3, setClass3] = useState(char.class_3);
  const [class_4, setClass4] = useState(char.class_4);
  const [class_5, setClass5] = useState(char.class_5);
  const [class_6, setClass6] = useState(char.class_6);

  const [wm_sword, setWmSword] = useState(char.wm_sword);
  const [wm_fist, setWmFist] = useState(char.wm_fist);
  const [wm_spear, setWmSpear] = useState(char.wm_spear);
  const [wm_bow, setWmBow] = useState(char.wm_bow);
  const [wm_gun, setWmGun] = useState(char.wm_gun);
  const [wm_axe, setWmAxe] = useState(char.wm_axe);
  const [wm_staff, setWmStaff] = useState(char.wm_staff);
  const [wm_monster1, setWmMonster1] = useState(char.wm_monster1);
  const [wm_monster2, setWmMonster2] = useState(char.wm_monster2);

  const [mainEvility, setMainEvility] = useState(char.mainEvility);
  // const [subEvilities, setSubEvilities] = useState(char.subEvilities);
  const [uniqueSkills, setUniqueSkills] = useState(char.uniqueSkills);
  const [spell4, setSpell4] = useState(char.spell4);
  const [spell9, setSpell9] = useState(char.spell9);
  const [spell15, setSpell15] = useState(char.spell15);
  const [spell22, setSpell22] = useState(char.spell22);
  const [spell30, setSpell30] = useState(char.spell30);

  const [ne1, setNE1] = useState(char.ne1);
  const [ne1Type, setNE1Type] = useState(char.ne1Type);
  const [ne2, setNE2] = useState(char.ne2);
  const [ne2Type, setNE2Type] = useState(char.ne2Type);
  const [ne3, setNE3] = useState(char.ne3);
  const [ne3Type, setNE3Type] = useState(char.ne3Type);
  const [ne4, setNE4] = useState(char.ne4);
  const [ne4Type, setNE4Type] = useState(char.ne4Type);
  const [ne5, setNE5] = useState(char.ne5);
  const [ne5Type, setNE5Type] = useState(char.ne5Type);
  const [ne6, setNE6] = useState(char.ne6);
  const [ne6Type, setNE6Type] = useState(char.ne6Type);
  const [ne7, setNE7] = useState(char.ne7);
  const [ne7Type, setNE7Type] = useState(char.ne7Type);
  const [ne8, setNE8] = useState(char.ne8);
  const [ne8Type, setNE8Type] = useState(char.ne8Type);
  const [ne9, setNE9] = useState(char.ne9);
  const [ne9Type, setNE9Type] = useState(char.ne9Type);
  const [ne10, setNE10] = useState(char.ne10);
  const [ne10Type, setNE10Type] = useState(char.ne10Type);

  const [cv, setCv] = useState(char.cv);
  const [starsIn, setStarsIn] = useState(char.starsIn);

  console.log(char.id, char.title)

  function onSubmit(e) {
    e.preventDefault()
    const charRef = firebase.firestore().collection('games').doc('DRPG').collection('Characters');
    charRef.doc(match.params.id).set({
      title,
      type,
      forte,
      gender,
      type_2,
      stars,
      hp_1,atk_1,def_1,int_1,res_1,spd_1,
      hp_9,atk_9,def_9,int_9,res_9,spd_9,
      crt, crd,
      r_fire,r_water,r_wind,r_star,r_poison,r_paralysis,r_sleep,r_forget,
      wm_sword,wm_fist,wm_spear,wm_bow,wm_gun,wm_axe,wm_staff,wm_monster1,wm_monster2,
      class_1,class_2,class_3,class_4,class_5,class_6,
      mainEvility,
      uniqueSkills, spell4, spell9, spell15, spell22, spell30,
      ne1Type, ne2Type, ne3Type, ne4Type, ne5Type, ne6Type, ne7Type, ne8Type, ne9Type, ne10Type,
      ne1, ne2, ne3, ne4, ne5, ne6, ne7, ne8, ne9, ne10,
      cv, starsIn,
    }, { merge: true }).then(
      setTitle('')
    )
  }

  return (
    <Container>
      <Row className="gray-bg">
        <Col>
          <label>Add Character</label>
          <form onSubmit={onSubmit}>
            <Row>
              <Col xs={2}>
                <input className="w-100" type="number" name="id" placeholder="ID"
                  value={match.params.id}
                />
              </Col>
              <Col xs={10}>
                <input className="w-100" type="text" name="title" placeholder="Title"
                  onChange={e => setTitle(e.currentTarget.value)}
                />
              </Col>
            </Row>

            <Row className=" pt-2">
              <Col>
                <label>Type</label>
                <select name="type" id="type"
                  onChange={e => setType(e.currentTarget.value)}
                >
                  <option value="humanoid">Humanoid</option>
                  <option value="monster">Monster</option>
                </select>
              </Col>
              <Col>
                <label>Forte</label>
                <select name="forte" id="forte"
                  onChange={e => setForte(e.currentTarget.value)}
                >
                  <option value="Sword">Sword</option>
                  <option value="Fist">Fist</option>
                  <option value="Spear">Spear</option>
                  <option value="Bow">Bow</option>
                  <option value="Gun">Gun</option>
                  <option value="Axe">Axe</option>
                  <option value="Staff">Staff</option>
                  <option value="Monster1">Monster-1</option>
                  <option value="Monster2">Monster-2</option>
                </select>
              </Col>
              <Col>
                <label>Gender</label>
                <select name="gender" id="gender"
                  onChange={e => setGender(e.currentTarget.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </Col>
              <Col>
                <label>Type_2</label>
                <select name="type_2" id="type_2"
                  onChange={e => setType_2(e.currentTarget.value)}
                >
                  <option value="unique">Unique</option>
                  <option value="generic">Generic</option>
                </select>
              </Col>
              <Col>
                <label>Stars</label>
                <input type="number" name="star"
                  onChange={e => setStars(e.currentTarget.value)}
                />
              </Col>
            </Row>
            
            <Row>
              <Col>
                <table id="stats">
                  <tr>
                    <th className="text-uppercase">HP</th>
                    <td>
                      <input type="number" name="HP_1" onChange={e => setHP_1(e.currentTarget.value)} />
                    </td>
                    <td>
                      <input type="number" name="HP_9" onChange={e => setHP_9(e.currentTarget.value)} />
                    </td>
                  </tr>
                  <tr>
                    <th className="text-uppercase">ATK</th>
                    <td>
                      <input type="number" name="ATK_1" onChange={e => setATK_1(e.currentTarget.value)} />
                    </td>
                    <td>
                      <input type="number" name="ATK_9" onChange={e => setATK_9(e.currentTarget.value)} />
                    </td>
                  </tr>
                  <tr>
                    <th className="text-uppercase">DEF</th>
                    <td>
                      <input type="number" name="DEF_1" onChange={e => setDEF_1(e.currentTarget.value)} />
                    </td>
                    <td>
                      <input type="number" name="DEF_9" onChange={e => setDEF_9(e.currentTarget.value)} />
                    </td>
                  </tr>
                  <tr>
                    <th className="text-uppercase">INT</th>
                    <td>
                      <input type="number" name="INT_1" onChange={e => setINT_1(e.currentTarget.value)} />
                    </td>
                    <td>
                      <input type="number" name="INT_9" onChange={e => setINT_9(e.currentTarget.value)} />
                    </td>
                  </tr>
                  <tr>
                    <th className="text-uppercase">RES</th>
                    <td>
                      <input type="number" name="RES_1" onChange={e => setRES_1(e.currentTarget.value)} />
                    </td>
                    <td>
                      <input type="number" name="RES_9" onChange={e => setRES_9(e.currentTarget.value)} />
                    </td>
                  </tr>
                  <tr>
                    <th className="text-uppercase">SPD</th>
                    <td>
                      <input type="number" name="SPD_1" onChange={e => setSPD_1(e.currentTarget.value)} />
                    </td>
                    <td>
                      <input type="number" name="SPD_9" onChange={e => setSPD_9(e.currentTarget.value)} />
                    </td>
                  </tr>
                  <tr>
                    <th className="text-uppercase">CRT</th>
                    <td>
                      <input type="number" name="CRT" onChange={e => setCRT(e.currentTarget.value)} />
                    </td>
                  </tr>
                  <tr>
                    <th className="text-uppercase">CRD</th>
                    <td>
                      <input type="number" name="CRD" onChange={e => setCRD(e.currentTarget.value)} />
                    </td>
                  </tr>
                </table>
              </Col>
              <Col>
                <table id="resistences">
                  <tr >
                    <th><label className="ATK-color stat-txt">Fire</label></th>
                    <td>
                      <input type="number" name="r_fire"
                        onChange={e => setR_Fire(e.currentTarget.value)}
                      />
                    </td>
                  </tr>
                  <tr >
                    <th><label className="RES-color stat-txt">Water</label></th>
                    <td>
                      <input type="number" name="r_sater"
                        onChange={e => setR_Water(e.currentTarget.value)}
                      />
                    </td>
                  </tr>
                  <tr >
                    <th><label className="sub-e-color stat-txt">Wind</label></th>
                    <td>
                      <input type="number" name="r_wind"
                        onChange={e => setR_Wind(e.currentTarget.value)}
                      />
                    </td>
                  </tr>
                  <tr >
                    <th><label className="INT-color stat-txt">Star</label></th>
                    <td>
                      <input type="number" name="r_star"
                        onChange={e => setR_Star(e.currentTarget.value)}
                      />
                    </td>
                  </tr>
                  <tr >
                    <th><label className="">Poison</label></th>
                    <td>
                      <input type="number" name="r_poison"
                        onChange={e => setR_Poison(e.currentTarget.value)}
                      />
                    </td>
                  </tr>
                  <tr >
                    <th><label className="">Paralysis</label></th>
                    <td>
                      <input type="number" name="r_paralysis"
                        onChange={e => setR_Paralysis(e.currentTarget.value)}
                      />
                    </td>
                  </tr>
                  <tr >
                    <th><label className="">Sleep</label></th>
                    <td>
                      <input type="number" name="r_sleep"
                        onChange={e => setR_Sleep(e.currentTarget.value)}
                      />
                    </td>
                  </tr>
                  <tr >
                    <th><label className="">Forget</label></th>
                    <td>
                      <input type="number" name="r_forget"
                        onChange={e => setR_Forget(e.currentTarget.value)}
                      />
                    </td>
                  </tr>
                </table>
              </Col>
            </Row>
            
            <div id="classes">
              <div className="d-flex">
                <label>Class_1</label>
                <input className="w-90" type="text" name="Class_1" placeholder="Class_1"
                  onChange={e => setClass1(e.currentTarget.value)}
                />
              </div>
              <div className="d-flex">
                <label>Class_2</label>
                <input className="w-90" type="text" name="Class_2" placeholder="Class_2"
                  onChange={e => setClass2(e.currentTarget.value)}
                />
              </div>
              <div className="d-flex">
                <label>Class_3</label>
                <input className="w-90" type="text" name="Class_3" placeholder="Class_3"
                  onChange={e => setClass3(e.currentTarget.value)}
                />
              </div>
              <div className="d-flex">
                <label>Class_4</label>
                <input className="w-90" type="text" name="Class_4" placeholder="Class_4"
                  onChange={e => setClass4(e.currentTarget.value)}
                />
              </div>
              <div className="d-flex">
                <label>Class_5</label>
                <input className="w-90" type="text" name="Class_5" placeholder="Class_5"
                  onChange={e => setClass5(e.currentTarget.value)}
                />
              </div>
              <div className="d-flex">
                <label>Class_6</label>
                <input className="w-90" type="text" name="Class_6" placeholder="Class_6"
                  onChange={e => setClass6(e.currentTarget.value)}
                />
              </div>
            </div>
            
            <div id="wm" className="d-flex">
              <div className="w-10">
                <label>Sword</label>
                <input type="number" name="WmSword" onChange={e => setWmSword(e.currentTarget.value)} />
              </div>
              <div className="w-10">
                <label>Fist</label>
                <input type="number" name="WmFist" onChange={e => setWmFist(e.currentTarget.value)} />
              </div>
              <div className="w-10">
                <label>Spear</label>
                <input type="number" name="WmSpear" onChange={e => setWmSpear(e.currentTarget.value)} />
              </div>
              <div className="w-10">
                <label>Bow</label>
                <input type="number" name="WmBow" onChange={e => setWmBow(e.currentTarget.value)} />
              </div>
              <div className="w-10">
                <label>Gun</label>
                <input type="number" name="WmGun" onChange={e => setWmGun(e.currentTarget.value)} />
              </div>
              <div className="w-10">
                <label>Axe</label>
                <input type="number" name="WmAxe" onChange={e => setWmAxe(e.currentTarget.value)} />
              </div>
              <div className="w-10">
                <label>Staff</label>
                <input type="number" name="WmStaff" onChange={e => setWmStaff(e.currentTarget.value)} />
              </div>
              <div className="w-10">
                <label>Monster1</label>
                <input type="number" name="WmMonster1" onChange={e => setWmMonster1(e.currentTarget.value)} />
              </div>
              <div className="w-10">
                <label>Monster2</label>
                <input type="number" name="WmMonster2" onChange={e => setWmMonster2(e.currentTarget.value)} />
              </div>
            </div>
          
            <Row id="evilities">
              <Col>
                <label>Main Evility</label>
                <Select 
                  options={evilities} onChange={e => setMainEvility(e)}
                  styles={selectStyles} className="Selector" isSearchable
                />
              </Col>
              <Col>
                <label>Unique Skills</label>
                <Select 
                  options={skills} onChange={e => setUniqueSkills(e)}
                  styles={selectStyles} className="Selector" isSearchable isMulti autoFocus 
                />
              </Col>
              {/* <Col>
                <label>Sub Evilities</label>
                <Select 
                  options={evilities} onChange={e => setSubEvilities(e)}
                  styles={selectStyles} className="Selector" isSearchable isMulti autoFocus 
                />
              </Col> */}
            </Row>

            <Row>
              <Col>
                <label>Spell4</label>
                <Select 
                  options={skills} onChange={e => setSpell4(e)}
                  styles={selectStyles} className="Selector" isSearchable 
                />
              </Col>
              <Col>
                <label>Spell9</label>
                <Select 
                  options={skills} onChange={e => setSpell9(e)}
                  styles={selectStyles} className="Selector" isSearchable 
                />
              </Col>
              <Col>
                <label>Spell15</label>
                <Select 
                  options={skills} onChange={e => setSpell15(e)}
                  styles={selectStyles} className="Selector" isSearchable 
                />
              </Col>
              <Col>
                <label>Spell22</label>
                <Select 
                  options={skills} onChange={e => setSpell22(e)}
                  styles={selectStyles} className="Selector" isSearchable 
                />
              </Col>
              <Col>
                <label>Spell30</label>
                <Select 
                  options={skills} onChange={e => setSpell30(e)}
                  styles={selectStyles} className="Selector" isSearchable 
                />
              </Col>
            </Row>

            <div id="NE" className="pt-2 pb-2">
              <div className="d-flex gray-bg">
                <label>NE1</label>
                <select name="NE1Type" id="NE1Type"
                  onChange={e => setNE1Type(e.currentTarget.value)}
                >
                  <option value="evility">Evility</option>
                  <option value="stat">Stats</option>
                  <option value="skill">Skill</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE1(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
              <div className="d-flex gray-bg">
                <label>NE2</label>
                <select name="NE2Type" id="NE2Type"
                  onChange={e => setNE2Type(e.currentTarget.value)}
                >
                  <option value="stat">Stats</option>
                  <option value="evility">Evility</option>
                  <option value="skill">Skill</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE2(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
              <div className="d-flex gray-bg">
                <label>NE3</label>
                <select name="NE3Type" id="NE3Type"
                  onChange={e => setNE3Type(e.currentTarget.value)}
                >
                  <option value="skill">Skill</option>
                  <option value="stat">Stats</option>
                  <option value="evility">Evility</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE3(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
              <div className="d-flex gray-bg">
                <label>NE4</label>
                <select name="NE4Type" id="NE4Type"
                  onChange={e => setNE4Type(e.currentTarget.value)}
                >
                  <option value="stat">Stats</option>
                  <option value="evility">Evility</option>
                  <option value="skill">Skill</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE4(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
              <div className="d-flex gray-bg">
                <label>NE5</label>
                <select name="NE5Type" id="NE5Type"
                  onChange={e => setNE5Type(e.currentTarget.value)}
                >
                  <option value="evility">Evility</option>
                  <option value="stat">Stats</option>
                  <option value="skill">Skill</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE5(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
              <div className="d-flex gray-bg">
                <label>NE6</label>
                <select name="NE6Type" id="NE6Type"
                  onChange={e => setNE6Type(e.currentTarget.value)}
                >
                  <option value="stat">Stats</option>
                  <option value="evility">Evility</option>
                  <option value="skill">Skill</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE6(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
              <div className="d-flex gray-bg">
                <label>NE7</label>
                <select name="NE7Type" id="NE7Type"
                  onChange={e => setNE7Type(e.currentTarget.value)}
                >
                  <option value="evility">Evility</option>
                  <option value="stat">Stats</option>
                  <option value="skill">Skill</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE7(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
              <div className="d-flex gray-bg">
                <label>NE8</label>
                <select name="NE8Type" id="NE8Type"
                  onChange={e => setNE8Type(e.currentTarget.value)}
                >
                  <option value="stat">Stats</option>
                  <option value="evility">Evility</option>
                  <option value="skill">Skill</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE8(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
              <div className="d-flex gray-bg">
                <label>NE9</label>
                <select name="NE9Type" id="NE9Type"
                  onChange={e => setNE9Type(e.currentTarget.value)}
                >
                  <option value="stat">Stats</option>
                  <option value="evility">Evility</option>
                  <option value="skill">Skill</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE9(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
              <div className="d-flex gray-bg">
                <label>NE10</label>
                <select name="NE10Type" id="NE10Type"
                  onChange={e => setNE10Type(e.currentTarget.value)}
                >
                  <option value="stat">Stats</option>
                  <option value="evility">Evility</option>
                  <option value="skill">Skill</option>
                </select>
                <Select 
                  options={NEOptions} onChange={e => setNE10(e)}
                  styles={selectStyles} className="Selector w-100" isSearchable
                />
              </div>
            </div>
           
            <div className="">
              <input className="" type="text" name="Cv" placeholder="Cv"
                onChange={e => setCv(e.currentTarget.value)}
              />
              <div>
                <label>Stars In</label>
                <Select 
                  options={StarsInOptions} onChange={e => setStarsIn(e)}
                  styles={selectStyles} className="Selector" isSearchable isMulti autoFocus 
                />
              </div>
            </div>

            <button className="button add-button">Add</button>
          </form>
        </Col>
      </Row>

      <hr className="hr p-4" />

      <Row className="gray-bg">
        <Col lg={8}>
          <AddEvility />
        </Col>
        <Col>
          <AddTarget />
          <AddStat />
        </Col>
      </Row>
      <Row className="gray-bg">
        <Col lg={8}>
          <AddSkill />
        </Col>
        <Col>
          <AddSkillEffect />
        </Col>
      </Row>
      <hr className="hr p-4" />
      <hr className="hr p-4" />
      <hr className="hr p-4" />

    </Container>
  )
}

export default UpdateChar;
