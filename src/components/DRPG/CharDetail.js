import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import { Row, Col, Image, Table, Container, Tabs, Tab } from 'react-bootstrap';


const CharDetail = ({match}) => {

  function useChar() {
    const [char, setChar] = useState('');
  
    useEffect(() => {
      db
        .firestore()
        .collection('games')
        .doc('DRPG')
        .collection('Characters')
        .doc(match.params.id)
        .get()
        .then((char) => {
          const newChar = char.data();
    
          setChar(newChar)
        })
    }, [])
  
    return char;
  }
  
  const char = useChar();
  const face = require('../../assets/DRPG/temp/main.png');
  const cut = require('../../assets/DRPG/temp/cut.png');
  const frame = require('../../assets/DRPG/icons/frames/chara_face_win01.png');
  const monster_icon = require('../../assets/DRPG/icons/Monster.png');
  const male = require('../../assets/DRPG/icons/male.png');
  const star = require('../../assets/DRPG/icons/rare_star.png');

  const e_fire = require('../../assets/DRPG/icons/fire.png');
  const e_water = require('../../assets/DRPG/icons/water.png');
  const e_wind = require('../../assets/DRPG/icons/wind.png');
  const e_star = require('../../assets/DRPG/icons/star.png');
  const poison = require('../../assets/DRPG/icons/poison.png');
  const paralysis = require('../../assets/DRPG/icons/paralysis.png');
  const sleep = require('../../assets/DRPG/icons/sleep.png');
  const forget = require('../../assets/DRPG/icons/forget.png');

  const Axe = require('../../assets/DRPG/icons/weapons/Axe.png');
  const Bow = require('../../assets/DRPG/icons/weapons/Bow.png');
  const Fist = require('../../assets/DRPG/icons/weapons/Fist.png');
  const Gun = require('../../assets/DRPG/icons/weapons/Gun.png');
  const Spear = require('../../assets/DRPG/icons/weapons/Spear.png');
  const Staff = require('../../assets/DRPG/icons/weapons/Staff.png');
  const Sword = require('../../assets/DRPG/icons/weapons/Sword.png');
  const Monster1 = require('../../assets/DRPG/icons/weapons/Monster1.png');
  const Monster2 = require('../../assets/DRPG/icons/weapons/Monster2.png');

  const skill_axe = require('../../assets/DRPG/icons/skill/skill_axe.png');
  const skill_bow = require('../../assets/DRPG/icons/skill/skill_bow.png');
  const skill_fist = require('../../assets/DRPG/icons/skill/skill_fist.png');
  const skill_gun = require('../../assets/DRPG/icons/skill/skill_gun.png');
  const skill_spear = require('../../assets/DRPG/icons/skill/skill_spear.png');
  const skill_sword = require('../../assets/DRPG/icons/skill/skill_sword.png');
  const skill_staff = require('../../assets/DRPG/icons/skill/skill_staff.png');
  const skill_humanoid = require('../../assets/DRPG/icons/skill/skill_humanoid.png');
  const skill_monster = require('../../assets/DRPG/icons/skill/skill_monster.png');

  const pow_rank_a = require('../../assets/DRPG/icons/skill/pow_rank_a.png');
  const pow_rank_b = require('../../assets/DRPG/icons/skill/pow_rank_b.png');
  const pow_rank_c = require('../../assets/DRPG/icons/skill/pow_rank_c.png');
  const pow_rank_d = require('../../assets/DRPG/icons/skill/pow_rank_d.png');
  const pow_rank_e = require('../../assets/DRPG/icons/skill/pow_rank_e.png');
  const pow_rank_f = require('../../assets/DRPG/icons/skill/pow_rank_f.png');
  const pow_rank_g = require('../../assets/DRPG/icons/skill/pow_rank_g.png');
  const pow_rank_s = require('../../assets/DRPG/icons/skill/pow_rank_s.png');
  const pow_rank_ss = require('../../assets/DRPG/icons/skill/pow_rank_ss.png');
  const pow_rank_plus = require('../../assets/DRPG/icons/skill/pow_rank_plus.png');

  const range_icon_ally = require('../../assets/DRPG/icons/skill/range_icon_ally.png');
  const range_icon_ally_all = require('../../assets/DRPG/icons/skill/range_icon_ally_all.png');
  const range_icon_enemy = require('../../assets/DRPG/icons/skill/range_icon_enemy.png');
  const range_icon_enemy_all = require('../../assets/DRPG/icons/skill/range_icon_enemy_all.png');

  return (
    <Container className="p-0">
      <Row>
        <Col xs={3} className="p-1 pt-3">
          <Image src={cut} className="main-img" />
        </Col>

        <Col xs={9} className="p-1">
          <div className="char-title__bg d-flex justify-content-between">
            <h1 className="char-title">Prinny</h1>
            <div className="d-block">
              <Image src={monster_icon} className="type_icons" />
              <Image src={Monster1} className="type_icons" />
              <Image src={male} className="type_icons" />
            </div>
          </div>
          <div className="mt-2 d-flex">
            <h3 className="font-weight-bold text-uppercase pt-1 pr-2">Stats at</h3>
            <Image src={star} className="star" /> <Image src={star} className="star" /> <Image src={star} className="star" /> <Image src={star} className="star" /> <Image src={star} className="star" /> <Image src={star} className="star" />
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
                <td className="stat-txt"><h4>HP</h4></td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="stat-txt"><h4>ATK</h4></td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="stat-txt"><h4>DEF</h4></td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="stat-txt"><h4>INT</h4></td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="stat-txt"><h4>RES</h4></td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="stat-txt"><h4>SPD</h4></td>
                <td>15</td>
                <td>10384701</td>
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
            <td>30%</td>
            <th>Damage</th>
            <td>130%</td>
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
                <th className=" inner">50%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0">
              <Image src={e_water} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">50%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0">
              <Image src={e_wind} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">50%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0">
              <Image src={e_star} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">50%</th>
              </Table>
            </Col>
          </Row>
          <hr className="hr" />
          <Row className="m-0 pt-2">
            <Col className="d-flex p-0 pt-1">
              <Image src={poison} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">50%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0 pt-1">
              <Image src={paralysis} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">50%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0 pt-1">
              <Image src={sleep} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">50%</th>
              </Table>
            </Col>
            <Col className="d-flex p-0 pt-1">
              <Image src={forget} className="res_icons" />
              <Table className="m-0">
                <th className=" inner">50%</th>
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
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Fist} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Spear} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Bow} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Gun} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">3</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Axe} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">5</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Staff} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Monster1} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">-</th>
              </Table>
            </Col>
            <Col className="p-0 ">
              <Image src={Monster2} className="w_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">-</th>
              </Table>
            </Col>
          </Row>
        </div>
      </div>

      <div className=" pt-3">
        <h3 className="sub-title">Classes</h3>
        <div className="gray-bg" >
          <div className="border-b">
            <Row>
              <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /></Col>
              <Col className="">Apprentice Prinny</Col>
            </Row>
          </div>
          <div className="border-b">
            <Row>
              <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
              <Col className="">Apprentice Prinny</Col>
            </Row>
          </div>
          <div className="border-b">
            <Row>
              <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
              <Col className="">Apprentice Prinny</Col>
            </Row>
          </div>
          <div className="border-b">
            <Row>
              <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
              <Col className="">Apprentice Prinny</Col>
            </Row>
          </div>
          <div className="border-b">
            <Row>
              <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
              <Col className="">Gen. Prinny</Col>
            </Row>
          </div>
          <div className="">
            <Row>
              <Col xs={4} className="text-right border-r p-0"><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /><Image src={star} className="star-class" /></Col>
              <Col className="">Prinny King</Col>
            </Row>
          </div>
        </div>
      </div>

      <div className=" pt-3">
        <h3 className="sub-title">Evilities</h3>

        <h4 className="e-type main-e-color">Main Evility</h4>
        <div className="d-flex">
          <div class="vl main-e-color"></div>
          <div className="d-block w-100">
           <div className="gray-bg e-bg" >
              <h3 className="border-b">Dodge Mastery</h3>
              <h4>Self: SPD +7% when battle begins. (3 Turns)</h4>
            </div>
          </div>
        </div>

        <h4 className="e-type sub-e-color">Sub Evility</h4>
        <div className="d-flex">
          <div class="vl sub-e-color"></div>
          <div className="d-block w-100">

            <div className="gray-bg e-bg" >
              <div className="d-flex border-b">
                <h5 className="ne-e border-r">N.E. 7</h5>
                <div className=" w-90">
                  <h3>Optimal Solution</h3>
                </div>
              </div>
              <h4>Gun/Fist/Monster Physical-Equipping Members: Damage dealt +12%</h4>
            </div>
            
            <div className="gray-bg e-bg" >
              <div className="d-flex border-b">
                <h5 className="ne-e border-r">N.E. 7</h5>
                <div className=" w-90">
                  <h3>Hero Me, Dood!</h3>
                </div>
              </div>
              <h4>Self: Initial SP +10 when battle begins.</h4>
            </div>
            <div className="gray-bg e-bg" >
              <div className="d-flex border-b">
                <h5 className="ne-e border-r">N.E. 7</h5>
                <div className=" w-90">
                  <h3>Hero Me, Dood!</h3>
                </div>
              </div>
              <h4>Self: Initial SP +10 when battle begins.</h4>
            </div>
          </div>
        </div>

      </div>

      <div className=" pt-3">
        <h3 className="sub-title">Skills</h3>
        <Tabs className="d-flex justify-content-between" defaultActiveKey="unique">
          <Tab className="skill-tab" eventKey="unique" title="Unique Skills">
            <div className="gray-bg e-bg" >
              <div className="d-flex justify-content-between border-b">
                <div className="d-flex skill-in">
                  <Image className="icon-skill" src={skill_monster} />
                  <h3 className="pt-1 pl-1">Optimal Solution</h3>
                </div>
                <div className="d-flex skill-in border-l">
                  <h6 className="pt-3 pr-2 stat-txt">Lv</h6>
                  <h3 className="pt-1 pl-0 pr-2">500</h3>
                </div>
              </div>
              <div className="d-flex border-b">
                <div className="d-flex skill-in pt-2 border-r">
                  <Image className="icon-rank" src={pow_rank_s} />
                  <Image className="icon-rank" src={pow_rank_plus} />
                </div>
                <div className="d-flex skill-in border-r">
                  <h6 className="pt-3 pr-2 stat-txt">Element</h6>
                  <Image className="icon-range" src={e_fire} />
                </div>
                <div className="d-flex skill-in">
                  <h6 className="pt-3 stat-txt">Target</h6>
                  <Image className="icon-range" src={range_icon_ally} />
                  <h3 className="pt-3 pl-0 pr-2 sub-e-color e-type text-capitalize">One</h3>
                </div>
              </div>
              <div className="d-flex ">
                <div className="d-flex skill-in border-r">
                  <h6 className="pt-3 pr-2 stat-txt">Stat</h6>
                  <h3 className="pl-0 pr-2 RES-color e-type">RES</h3>
                </div>
                <div className="d-flex skill-in border-r">
                  <h6 className="pt-3 pr-2 stat-txt">SP</h6>
                  <h3 className="pt-1">20</h3>
                </div>
                <div className="d-flex skill-in">
                  <h6 className="pt-3 pr-2 stat-txt">Effect</h6>
                  <h3 className="pt-1 pl-0 pr-2">DEF -40%</h3>
                </div>
              </div>
            </div>
            <div className="gray-bg e-bg" >
              <div className="d-flex justify-content-between border-b">
                <div className="d-flex skill-in">
                  <Image className="icon-skill" src={skill_monster} />
                  <h3 className="pt-1">Sayonara Roboto</h3>
                </div>
                <div className="d-flex skill-in border-l">
                  <h6 className="pt-3 pr-2 stat-txt">Wm</h6>
                  <Image className="icon-range" src={Staff} />
                  <h6 className="pt-3 pr-2 stat-txt">Lv</h6>
                  <h3 className="pt-1 pl-0 pr-2">30</h3>
                </div>
              </div>
              <div className="d-flex border-b">
                <div className="d-flex skill-in pt-2 border-r">
                  <Image className="icon-rank" src={pow_rank_s} />
                  <Image className="icon-rank" src={pow_rank_plus} />
                </div>
                <div className="d-flex skill-in border-r">
                  <h6 className="pt-3 pr-2 stat-txt">Element</h6>
                  <Image className="icon-range" src={e_star} />
                </div>
                <div className="d-flex skill-in">
                  <h6 className="pt-3 stat-txt">Target</h6>
                  <Image className="icon-range" src={range_icon_ally} />
                  <h3 className="pt-3 pl-0 pr-2 sub-e-color e-type text-capitalize">One</h3>
                </div>
              </div>
              <div className="d-flex ">
                <div className="d-flex skill-in border-r">
                  <h6 className="pt-3 pr-2 stat-txt">Stat</h6>
                  <h3 className="pl-0 pr-2 ATK-color e-type">ATK</h3>
                </div>
                <div className="d-flex skill-in border-r">
                  <h6 className="pt-3 pr-2 stat-txt">SP</h6>
                  <h3 className="pt-1">20</h3>
                </div>
                <div className="d-flex skill-in">
                  <h6 className="pt-3 pr-2 stat-txt">Effect</h6>
                  <h3 className="pt-1 pl-0 pr-2">Lesser Healing</h3>
                </div>
              </div>
            </div>
            <div className="gray-bg e-bg" >
              <div className="d-flex justify-content-between border-b">
                <div className="d-flex skill-in">
                  <Image className="icon-skill" src={skill_monster} />
                  <h3 className="pt-1">Optimal Solution</h3>
                </div>
                <div className="d-flex skill-in border-l">
                  <h6 className="pt-3 pr-2 stat-txt">N.E.</h6>
                  <h3 className="pt-1 pl-0 pr-2">30</h3>
                </div>
              </div>
              <div className="d-flex border-b">
                <div className="d-flex skill-in pt-2 border-r">
                  <Image className="icon-rank" src={pow_rank_s} />
                  <Image className="icon-rank" src={pow_rank_plus} />
                </div>
                <div className="d-flex skill-in border-r">
                  <h6 className="pt-3 pr-2 stat-txt">Element</h6>
                  <h3 className="pt-1">N/A</h3>
                </div>
                <div className="d-flex skill-in">
                  <h6 className="pt-3 stat-txt">Target</h6>
                  <Image className="icon-range" src={range_icon_enemy_all} />
                  <h3 className="pt-3 pl-0 pr-2 sub-e-color e-type text-capitalize">All</h3>
                </div>
              </div>
              <div className="d-flex ">
                <div className="d-flex skill-in border-r">
                  <h6 className="pt-3 pr-2 stat-txt">Stat</h6>
                  <h3 className="pl-0 pr-2 INT-color e-type">INT</h3>
                </div>
                <div className="d-flex skill-in border-r">
                  <h6 className="pt-3 pr-2 stat-txt">SP</h6>
                  <h3 className="pt-1">20</h3>
                </div>
                <div className="d-flex skill-in">
                  <h6 className="pt-3 pr-2 stat-txt">Effect</h6>
                  <h3 className="pt-1 pl-0 pr-2">-</h3>
                </div>
              </div>
            </div>
          </Tab>
          <Tab className="skill-tab" eventKey="spells" title="Spells">
            Prof
          </Tab>
          <Tab className="skill-tab" eventKey="weapon" title="Weapon Skills">
            Prof
          </Tab>
        </Tabs>
      </div>

      <div className=" pt-3">
        <h3 className="sub-title">N.E.</h3>

        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">1</h4>
          </div>
          <div className="gray-bg w-90">
            <div className="d-flex border-b">
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">Unique Skill</h6>
              </div>
              <div className="d-flex skill-in">
                <Image className="icon-skill" src={skill_humanoid} />
                <h3 className="pt-1 pl-1">Heart Catch</h3>
              </div>
            </div>
            <div className="d-flex border-b">
              <div className="d-flex skill-in pt-2 border-r">
                <Image className="icon-rank" src={pow_rank_s} />
                <Image className="icon-rank" src={pow_rank_plus} />
              </div>
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">Element</h6>
                <h3 className="pt-1">N/A</h3>
              </div>
              <div className="d-flex skill-in">
                <h6 className="pt-3 stat-txt">Target</h6>
                <Image className="icon-range" src={range_icon_enemy_all} />
                <h3 className="pt-3 pl-0 pr-2 sub-e-color e-type text-capitalize">All</h3>
              </div>
            </div>
            <div className="d-flex ">
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">Stat</h6>
                <h3 className="pl-0 pr-2 INT-color e-type">INT</h3>
              </div>
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">SP</h6>
                <h3 className="pt-1">20</h3>
              </div>
              <div className="d-flex skill-in">
                <h6 className="pt-3 pr-2 stat-txt">Effect</h6>
                <h3 className="pt-1 pl-0 pr-2">-</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex pt-2">
          <div className="w-10">
            <h5 className="type_icons stat-txt ne-n p-2">10</h5>
          </div>
          <div className="gray-bg w-90">
            <div className="d-flex justify-content-between border-b">
              <div className="d-flex skill-in">
                <Image className="icon-skill" src={skill_monster} />
                <h3 className="pt-1">Optimal Solution</h3>
              </div>
              <div className="d-flex skill-in border-l">
                <h6 className="pt-3 pr-2 stat-txt">Wm</h6>
                <Image className="icon-range" src={Axe} />
                <h6 className="pt-3 pr-2 stat-txt">Lv</h6>
                <h3 className="pt-1 pl-0 pr-2">30</h3>
              </div>
            </div>
            <div className="d-flex border-b">
              <div className="d-flex skill-in pt-2 border-r">
                <Image className="icon-rank" src={pow_rank_s} />
                <Image className="icon-rank" src={pow_rank_plus} />
              </div>
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">Element</h6>
                <h3 className="pt-1">N/A</h3>
              </div>
              <div className="d-flex skill-in">
                <h6 className="pt-3 stat-txt">Target</h6>
                <Image className="icon-range" src={range_icon_enemy_all} />
                <h3 className="pt-3 pl-0 pr-2 sub-e-color e-type text-capitalize">All</h3>
              </div>
            </div>
            <div className="d-flex ">
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">Stat</h6>
                <h3 className="pl-0 pr-2 INT-color e-type">INT</h3>
              </div>
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">SP</h6>
                <h3 className="pt-1">20</h3>
              </div>
              <div className="d-flex skill-in">
                <h6 className="pt-3 pr-2 stat-txt">Effect</h6>
                <h3 className="pt-1 pl-0 pr-2">-</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex pt-2">
          <div className="w-10">
            <h4 className="type_icons stat-txt ne-n p-2">2</h4>
          </div>
          <div className="gray-bg w-90">
            <div className="d-flex justify-content-between border-b">
              <div className="d-flex skill-in">
                <Image className="icon-skill" src={skill_monster} />
                <h3 className="pt-1">Optimal Solution</h3>
              </div>
              <div className="d-flex skill-in border-l">
                <h6 className="pt-3 pr-2 stat-txt">Wm</h6>
                <Image className="icon-range" src={Axe} />
                <h6 className="pt-3 pr-2 stat-txt">Lv</h6>
                <h3 className="pt-1 pl-0 pr-2">30</h3>
              </div>
            </div>
            <div className="d-flex border-b">
              <div className="d-flex skill-in pt-2 border-r">
                <Image className="icon-rank" src={pow_rank_s} />
                <Image className="icon-rank" src={pow_rank_plus} />
              </div>
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">Element</h6>
                <h3 className="pt-1">N/A</h3>
              </div>
              <div className="d-flex skill-in">
                <h6 className="pt-3 stat-txt">Target</h6>
                <Image className="icon-range" src={range_icon_enemy_all} />
                <h3 className="pt-3 pl-0 pr-2 sub-e-color e-type text-capitalize">All</h3>
              </div>
            </div>
            <div className="d-flex ">
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">Stat</h6>
                <h3 className="pl-0 pr-2 INT-color e-type">INT</h3>
              </div>
              <div className="d-flex skill-in border-r">
                <h6 className="pt-3 pr-2 stat-txt">SP</h6>
                <h3 className="pt-1">20</h3>
              </div>
              <div className="d-flex skill-in">
                <h6 className="pt-3 pr-2 stat-txt">Effect</h6>
                <h3 className="pt-1 pl-0 pr-2">-</h3>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className=" pt-3">
        <div className="gray-bg" >
          <div className="">
            <Row>
              <Col className="text-center">CV: Apprentice Prinny</Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CharDetail;