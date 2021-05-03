import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import CharDetailEvility from './CharDetailEvility';
import CharDetailSkill from './CharDetailSkill';
import { Row, Col, Image, Table, Container, Tabs, Tab } from 'react-bootstrap';

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

const CharDetail = ({match}) => {
  const wmSkills = useWmSkills()

  const charRef = db.firestore().collection('games').doc('DRPG').collection('Characters').doc(match.params.id)
  const [char, setChar] = useState('');

  useEffect(() => {
    charRef.get().then((char) => {
      const newChar = char.data();
      setChar(newChar)
    })
  }, [])

  const star = require('../../../assets/DRPG/icons/rare_star.png');

  const e_fire = require('../../../assets/DRPG/icons/Fire.png');
  const e_water = require('../../../assets/DRPG/icons/Water.png');
  const e_wind = require('../../../assets/DRPG/icons/Wind.png');
  const e_star = require('../../../assets/DRPG/icons/Star.png');
  const poison = require('../../../assets/DRPG/icons/Poison.png');
  const paralysis = require('../../../assets/DRPG/icons/Paralysis.png');
  const sleep = require('../../../assets/DRPG/icons/Sleep.png');
  const forget = require('../../../assets/DRPG/icons/Forget.png');

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
    <Container className="p-0">
      <Row>
        <Col xs={3} className="p-1 pt-3">
          <Image src={char.cut_in_url} className="main-img" />
        </Col>
        <Col xs={9} className="p-1">
          <div className="char-title__bg d-flex justify-content-between">
            <h2 className="char-title">{char.title}</h2>
            <div className="d-block">
              {!! char.type &&(
                <Image src={require(`../../../assets/DRPG/icons/${char.type}.png`)} className="type_icons" />
              )}
              {!! char.forte &&(
                <Image src={require(`../../../assets/DRPG/icons/weapons/${char.forte}.png`)} className="type_icons" />
              )}
              {!! char.gender &&(
                <Image src={require(`../../../assets/DRPG/icons/${char.gender}.png`)} className="type_icons" />
              )}
            </div>
          </div>
          <div className="mt-2 d-flex">
            <h3 className="font-weight-bold text-uppercase pt-1 pr-2">Stats</h3>
            {/* <Image src={star} className="star" /> <Image src={star} className="star" /> <Image src={star} className="star" /> <Image src={star} className="star" /> <Image src={star} className="star" /> <Image src={star} className="star" /> */}
          </div>
          <Table striped bordered className="gray-bg" >
            <thead>
              <tr>
                <th></th>
                <th>Lv. 1</th>
                <th>Lv. 9999</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><h4 className="font-weight-bold">HP</h4></td>
                <td>{char.hp_1}</td>
                <td>{char.hp_9}</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td><h4 className="font-weight-bold">ATK</h4></td>
                <td>{char.atk_1}</td>
                <td>{char.atk_9}</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td><h4 className="font-weight-bold">DEF</h4></td>
                <td>{char.def_1}</td>
                <td>{char.def_9}</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td><h4 className="font-weight-bold">INT</h4></td>
                <td>{char.int_1}</td>
                <td>{char.int_9}</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td><h4 className="font-weight-bold">RES</h4></td>
                <td>{char.res_1}</td>
                <td>{char.res_9}</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td><h4 className="font-weight-bold">SPD</h4></td>
                <td>{char.spd_1}</td>
                <td>{char.spd_9}</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <div className=" ">
        <h3 className="sub-title">Critical</h3>
        <Table striped bordered className="gray-bg" >
          <tr>
            <th>Chance</th>
            <td>{char.crt}%</td>
            <th>Damage</th>
            <td>{char.crd}%</td>
          </tr>
        </Table>
      </div>
      
      <div className="">
        <h3 className="sub-title">Resistances</h3>
        <div className="gray-bg p-2">
          <Row className="m-0">
            <Col className="d-flex p-0">
              <Image src={e_fire} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">{char.r_fire}%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0">
              <Image src={e_water} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">{char.r_water}%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0">
              <Image src={e_wind} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">{char.r_wind}%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0">
              <Image src={e_star} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">{char.r_star}%</th>
              </Table>
            </Col>
          </Row>
          <hr className="hr" />
          <Row className="m-0 pt-2">
            <Col className="d-flex p-0 pt-1">
              <Image src={poison} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">{char.r_poison}%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0 pt-1">
              <Image src={paralysis} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">{char.r_paralysis}%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0 pt-1">
              <Image src={sleep} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">{char.r_sleep}%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0 pt-1">
              <Image src={forget} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">{char.r_forget}%</th>
              </Table>
            </Col>
          </Row>
        </div>
      </div>

      <div className=" pt-3">
        <h3 className="sub-title">Weapon Mastery</h3>
        <div className="gray-bg p-0">
          <Row className="m-0">
            <Col className="p-0 border-r">
              <Image src={Sword} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0 ">
                <th className="text-center ">{!!char.wm_sword ? char.wm_sword : ('-')}</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Fist} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">{!!char.wm_fist ? char.wm_fist : ('-')}</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Spear} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">{!!char.wm_spear ? char.wm_spear : ('-')}</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Bow} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">{!!char.wm_bow ? char.wm_bow : ('-')}</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Gun} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">{!!char.wm_gun ? char.wm_gun : ('-')}</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Axe} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">{!!char.wm_axe ? char.wm_axe : ('-')}</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Staff} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">{!!char.wm_staff ? char.wm_staff : ('-')}</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Monster1} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">{!!char.wm_monster1 ? char.wm_monster1 : ('-')}</th>
              </Table>
            </Col>
            <Col className="p-0 ">
              <Image src={Monster2} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">{!!char.wm_monster2 ? char.wm_monster2 : ('-')}</th>
              </Table>
            </Col>
          </Row>
        </div>
      </div>

      <div className=" pt-3">
        <h3 className="sub-title">Classes</h3>
        <div className="gray-bg" >
          {!!char.class_1 && (
            <div className="border-b">
              <Row>
                <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /></Col>
                <Col className="">{char.class_1}</Col>
              </Row>
            </div>
          )}
          {!!char.class_2 && (
            <div className="border-b">
              <Row>
                <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
                <Col className="">{char.class_2}</Col>
              </Row>
            </div>
          )}
          {!!char.class_3 && (
            <div className="border-b">
              <Row>
                <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
                <Col className="">{char.class_3}</Col>
              </Row>
            </div>
          )}
          {!!char.class_4 && (
            <div className="border-b">
              <Row>
                <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
                <Col className="">{char.class_4}</Col>
              </Row>
            </div>
          )}
          {!!char.class_5 && (
            <div className="border-b">
              <Row>
                <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
                <Col className="">{char.class_5}</Col>
              </Row>
            </div>
          )}
          {!!char.class_6 && (
            <div className="">
              <Row>
                <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
                <Col className="">{char.class_6}</Col>
              </Row>
            </div>
          )}
        </div>
      </div>

      <div className=" pt-3">
        <h3 className="sub-title">Evilities</h3>
        <h4 className="e-type main-e-color">Main Evility</h4>
        <div className="d-flex">
          <div class="vl main-e-color"></div>
          <div className="d-block w-100">
            {!! char.mainEvility &&(
              <CharDetailEvility id={char.mainEvility.value}/>
            )}
          </div>
        </div>

        <h4 className="e-type sub-e-color">Sub Evility</h4>
        <div className="d-flex">
          <div class="vl sub-e-color"></div>
          <div className="d-block w-100">
            {(char.ne1Type === "evility") ? (
              <CharDetailEvility id={char.ne1.value} neInt="1"/>
            ) : ('')}
            {(char.ne2Type === "evility") ? (
              <CharDetailEvility id={char.ne2.value} neInt="2"/>
            ) : ('')}
            {(char.ne3Type === "evility") ? (
              <CharDetailEvility id={char.ne3.value} neInt="3"/>
            ) : ('')}
            {(char.ne4Type === "evility") ? (
              <CharDetailEvility id={char.ne4.value} neInt="4"/>
            ) : ('')}
            {(char.ne5Type === "evility") ? (
              <CharDetailEvility id={char.ne5.value} neInt="5"/>
            ) : ('')}
            {(char.ne6Type === "evility") ? (
              <CharDetailEvility id={char.ne6.value} neInt="6"/>
            ) : ('')}
            {(char.ne7Type === "evility") ? (
              <CharDetailEvility id={char.ne7.value} neInt="7"/>
            ) : ('')}
            {(char.ne8Type === "evility") ? (
              <CharDetailEvility id={char.ne8.value} neInt="8"/>
            ) : ('')}
            {(char.ne9Type === "evility") ? (
              <CharDetailEvility id={char.ne9.value} neInt="9"/>
            ) : ('')}
            {(char.ne10Type === "evility") ? (
              <CharDetailEvility id={char.ne10.value} neInt="10"/>
            ) : ('')}
          </div>
        </div>

      </div>

      <div className=" pt-3">
        <h3 className="sub-title">Skills</h3>
        <Tabs className="d-flex justify-content-between" defaultActiveKey="unique">
          <Tab className="skill-tab" eventKey="unique" title="Unique Skills">
            {!! char.uniqueSkills &&(char.uniqueSkills.map((skill) => (
              <CharDetailSkill id={skill.value} type={char.type}/>
            )))}
          </Tab>
          <Tab className="skill-tab" eventKey="spells" title="Spells">
            {!! char.spell4 &&(
              <CharDetailSkill id={char.spell4.value} type={char.type} wmlv={4} />
            )}
            {!! char.spell9 &&(
              <CharDetailSkill id={char.spell9.value} type={char.type} wmlv={9} />
            )}
            {!! char.spell15 &&(
              <CharDetailSkill id={char.spell15.value} type={char.type} wmlv={15} />
            )}
            {!! char.spell22 &&(
              <CharDetailSkill id={char.spell22.value} type={char.type} wmlv={22} />
            )}
            {!! char.spell30 &&(
              <CharDetailSkill id={char.spell30.value} type={char.type} wmlv={30} />
            )}
          </Tab>
          {(char.type === "humanoid") ? (
            <Tab className="skill-tab" eventKey="weapon" title="Weapon Skills">
              <Tabs className="d-flex justify-content-between" defaultActiveKey="Sword">
                <Tab className="skill-tab" eventKey="Sword" title={<Image src={Sword} className="w_icons" />}>
                  {wmSkills.map((skill) => (
                    (skill.weapon === "Sword") ? (<CharDetailSkill id={skill.id} type={char.type} />) : ('')
                  ))}
                </Tab>
                <Tab className="skill-tab" eventKey="Fist" title={<Image src={Fist} className="w_icons" />}>
                  {wmSkills.map((skill) => (
                    (skill.weapon === "Fist") ? (<CharDetailSkill id={skill.id} type={char.type} />) : ('')
                  ))}
                </Tab>
                <Tab className="skill-tab" eventKey="Spear" title={<Image src={Spear} className="w_icons" />}>
                  {wmSkills.map((skill) => (
                    (skill.weapon === "Spear") ? (<CharDetailSkill id={skill.id} type={char.type} />) : ('')
                  ))}
                </Tab>
                <Tab className="skill-tab" eventKey="Bow" title={<Image src={Bow} className="w_icons" />}>
                  {wmSkills.map((skill) => (
                    (skill.weapon === "Bow") ? (<CharDetailSkill id={skill.id} type={char.type} />) : ('')
                  ))}
                </Tab>
                <Tab className="skill-tab" eventKey="Gun" title={<Image src={Gun} className="w_icons" />}>
                  {wmSkills.map((skill) => (
                    (skill.weapon === "Gun") ? (<CharDetailSkill id={skill.id} type={char.type} />) : ('')
                  ))}
                </Tab>
                <Tab className="skill-tab" eventKey="Axe" title={<Image src={Axe} className="w_icons" />}>
                  {wmSkills.map((skill) => (
                    (skill.weapon === "Axe") ? (<CharDetailSkill id={skill.id} type={char.type} />) : ('')
                  ))}
                </Tab>
              </Tabs>
            </Tab>
          ) : ('')}
        </Tabs>
      </div>

      <div className=" pt-3">
        <h3 className="sub-title">N.E.</h3>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">1</h4>
          </div>
          {(char.ne1Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne1.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne1Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne1.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne1Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne1.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">2</h4>
          </div>
          {(char.ne2Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne2.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne2Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne2.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne2Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne2.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">3</h4>
          </div>
          {(char.ne3Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne3.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne3Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne3.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne3Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne3.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">4</h4>
          </div>
          {(char.ne4Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne4.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne4Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne4.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne4Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne4.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">5</h4>
          </div>
          {(char.ne5Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne5.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne5Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne5.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne5Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne5.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">6</h4>
          </div>
          {(char.ne6Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne6.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne6Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne6.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne6Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne6.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">7</h4>
          </div>
          {(char.ne7Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne7.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne7Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne7.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne7Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne7.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">8</h4>
          </div>
          {(char.ne8Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne8.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne8Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne8.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne8Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne8.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">9</h4>
          </div>
          {(char.ne9Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne9.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne9Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne9.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne9Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne9.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">10</h4>
          </div>
          {(char.ne10Type === "stat") ? (
            <div className="gray-bg w-90">
              <h3 className="text-center p-2">All Stats except SPD +{char.ne10.value}%</h3>
            </div>
          ) : ('')}
          {(char.ne10Type === "evility") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">Sub Evility</h6>
              <CharDetailEvility id={char.ne10.value} ne="True"/>
            </div>
          ) : ('')}
          {(char.ne10Type === "skill") ? (
            <div div className="w-90">
              <h6 className="pr-1 stat-txt text-capitalize">unique skill</h6>
              <CharDetailSkill id={char.ne10.value} ne="True"/>
            </div>
          ) : ('')}
        </div>
      </div>

      <div className=" pt-3">
        <Image src={char.full_url} className="img-fluid full-img mx-auto d-block" />
        <div className="gray-bg" >
          <div className="">
            <Row>
              <Col className="text-center">CV: {!!char.cv ? char.cv : ('-')}</Col>
            </Row>
          </div>
        </div>
        <div className="gray-bg pt-1" >
          <h3 className="text-center pt-1">Stars In</h3>
          <div className="d-block">
            {!! char.starsIn &&(char.starsIn.map((game) => (
              <Image src={require(`../../../assets/DRPG/icons/logo_${game.value}.png`)} className="img-icons" />
            )))}
          </div>

        </div>
      </div>
    </Container>
  )
}

export default CharDetail;