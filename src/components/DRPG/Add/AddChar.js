import React, { useState } from 'react';
import firebase, {storage} from '../../../firebase';
import  { Redirect } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import AddEvility from './AddEvility';
import AddTarget from './AddTarget';
import AddStat from './AddStat';


const AddChar = () => {
  const [id, setID] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('humanoid');
  const [forte, setForte] = useState('sword');
  const [gender, setGender] = useState('male');
  const [type_2, setType_2] = useState('unique');


  const [stars, setStars] = useState('');

  const [hp_1, setHP_1] = useState('');
  const [atk_1, setATK_1] = useState('');
  const [def_1, setDEF_1] = useState('');
  const [int_1, setINT_1] = useState('');
  const [res_1, setRES_1] = useState('');
  const [spd_1, setSPD_1] = useState('');
  const [hp_9, setHP_9] = useState('');
  const [atk_9, setATK_9] = useState('');
  const [def_9, setDEF_9] = useState('');
  const [int_9, setINT_9] = useState('');
  const [res_9, setRES_9] = useState('');
  const [spd_9, setSPD_9] = useState('');
  const [crt, setCRT] = useState('');
  const [crd, setCRD] = useState('');

  const [r_fire, setR_Fire] = useState('');
  const [r_water, setR_Water] = useState('');
  const [r_wind, setR_Wind] = useState('');
  const [r_star, setR_Star] = useState('');
  const [r_poison, setR_Poison] = useState('');
  const [r_paralysis, setR_Paralysis] = useState('');
  const [r_sleep, setR_Sleep] = useState('');
  const [r_forget, setR_Forget] = useState('');

  const [class_1, setClass1] = useState('');
  const [class_2, setClass2] = useState('');
  const [class_3, setClass3] = useState('');
  const [class_4, setClass4] = useState('');
  const [class_5, setClass5] = useState('');
  const [class_6, setClass6] = useState('');

  const [wm_sword, setWmSword] = useState('');
  const [wm_fist, setWmFist] = useState('');
  const [wm_spear, setWmSpear] = useState('');
  const [wm_bow, setWmBow] = useState('');
  const [wm_gun, setWmGun] = useState('');
  const [wm_axe, setWmAxe] = useState('');
  const [wm_staff, setWmStaff] = useState('');
  const [wm_monster1, setWmMonster1] = useState('');
  const [wm_monster2, setWmMonster2] = useState('');

  const [portrait, setPortrait] = useState('');
  const [cut_in, setCutIn] = useState('');



  function onSubmit(e) {
    e.preventDefault()

    const charRef = firebase.firestore().collection('games').doc('DRPG').collection('Characters');
    const imgRef = storage.ref("images/DRPG/characters");

    imgRef.child(`${id}_portrait`).put(portrait);
    imgRef.child(`${id}_cut_in`).put(cut_in);

    imgRef.child(`${id}_portrait`).getDownloadURL().then((portrait_url) => {
      charRef.doc(id).set({portrait_url}, { merge: true })
    });

    // imgRef.child(`${id}_cut_in`).getDownloadURL().then((cut_in_url) => {
    //   charRef.doc(id).set({cut_in_url}, { merge: true })
    // });


    charRef.doc(id).set({
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
    }, { merge: true })

    // uploadTask.on(
    //   "state_changed",
    //   snapshot => {},
    //   error => {
    //     console.error(error);
    //   },
    //   () => {
    //     storage
    //       .ref("images")
    //       .child(portrait.name)
    //       .getDownloadURL()
    //       .then(portrait_url => {
    //         charRef.doc(id).set({
    //           title,
    //           type,
    //           forte,
    //           gender,
    //           type_2,
    //           stars,
    //           hp_1,atk_1,def_1,int_1,res_1,spd_1,
    //           hp_9,atk_9,def_9,int_9,res_9,spd_9,
    //           crt, crd,
    //           r_fire,r_water,r_wind,r_star,r_poison,r_paralysis,r_sleep,r_forget,
    //           wm_sword,wm_fist,wm_spear,wm_bow,wm_gun,wm_axe,wm_staff,wm_monster1,wm_monster2,
    //           class_1,class_2,class_3,class_4,class_5,class_6,
    //           portrait_url
    //         })
    //         .then(() => {
    //           // setID('')
    //           // setTitle('')
    //           // setStats('')
    //           // setUrl('')
    //           return <Redirect to='/characters'  />
    //         })
    //       });
    //   }
    // )
  }

  const handleChangePortrait = e => {
    if (e.target.files[0]) {
      setPortrait(e.target.files[0]);
    }
  }

  const handleChangeCutIn = e => {
    if (e.target.files[0]) {
      setCutIn(e.target.files[0]);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={onSubmit}>
            <div className="d-flex">
              <input className="w-10" type="number" name="id" placeholder="ID"
                onChange={e => setID(e.currentTarget.value)}
              />
              <input className="w-90" type="text" name="title" placeholder="Title"
                onChange={e => setTitle(e.currentTarget.value)}
              />
            </div>

            <div className="d-flex">
              <div>
                <label>Type</label>
                <select name="type" id="type"
                  onChange={e => setType(e.currentTarget.value)}
                >
                  <option value="humanoid">Humanoid</option>
                  <option value="monster">Monster</option>
                </select>
              </div>
              <div>
                <label>Forte</label>
                <select name="forte" id="forte"
                  onChange={e => setForte(e.currentTarget.value)}
                >
                  <option value="sword">Sword</option>
                  <option value="fist">Fist</option>
                  <option value="spear">Spear</option>
                  <option value="bow">Bow</option>
                  <option value="gun">Gun</option>
                  <option value="axe">Axe</option>
                  <option value="staff">Staff</option>
                  <option value="monster-1">Monster-1</option>
                  <option value="monster-2">Monster-2</option>
                </select>
              </div>
              <div>
                <label>Gender</label>
                <select name="gender" id="gender"
                  onChange={e => setGender(e.currentTarget.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label>Type_2</label>
                <select name="type_2" id="type_2"
                  onChange={e => setType_2(e.currentTarget.value)}
                >
                  <option value="unique">Unique</option>
                  <option value="generic">Generic</option>
                </select>
              </div>
              <div>
                <label>Stars</label>
                <input type="number" name="star"
                  onChange={e => setStars(e.currentTarget.value)}
                />
              </div>
            </div>
            
            <div className="d-flex">
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
            </div>
            
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

            <label>Portrait</label>
            <input type="file" onChange={handleChangePortrait} />

            <label>Cut-In</label>
            <input type="file" onChange={handleChangeCutIn} />

            <button className="button">Post</button>
          </form>
        </Col>
      </Row>
      <hr className="hr p-4" />
      <Row>
        <Col lg={8}>
          <AddEvility />
        </Col>
        <Col>
          <AddTarget />
          <AddStat />
        </Col>
      </Row>
      <hr className="hr p-4" />
      <hr className="hr p-4" />
      <hr className="hr p-4" />

    </Container>
  )
}

export default AddChar;
