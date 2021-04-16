import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import { Row, Col, Image, Table, Container } from 'react-bootstrap';


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
                <td className="font-weight-bold">HP</td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="font-weight-bold">ATK</td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="font-weight-bold">DEF</td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="font-weight-bold">INT</td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="font-weight-bold">RES</td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
              <tr>
                <td className="font-weight-bold">SPD</td>
                <td>15</td>
                <td>10384701</td>
                <td className="highlight-2 font-italic">2nd</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <div className=" w-100">
        <h3 className="font-weight-bold text-uppercase">Critical</h3>
        <Table striped bordered className="gray-bg" >
          <tr>
            <th>Chance</th>
            <td>30%</td>
            <th>Damage</th>
            <td>130%</td>
          </tr>
        </Table>
      </div>
      
      <div className="w-100">
        <h3 className="font-weight-bold text-uppercase">Resistances</h3>
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

      <div className="w-100 pt-3">
        <h3 className="font-weight-bold text-uppercase">Weapon Mastery</h3>
        <div className="gray-bg p-0">
          <Row className="m-0">
            <Col className="p-0 border-r">
              <Image src={Sword} className="res_icons" />
              <hr className="hr" />
              <Table className="m-0 ">
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Fist} className="res_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Spear} className="res_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Bow} className="res_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Gun} className="res_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">3</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Axe} className="res_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">5</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Staff} className="res_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">10</th>
              </Table>
            </Col>
            <Col className="p-0 border-r">
              <Image src={Monster1} className="res_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">-</th>
              </Table>
            </Col>
            <Col className="p-0 ">
              <Image src={Monster2} className="res_icons" />
              <hr className="hr" />
              <Table className="m-0">
                <th className="text-center ">-</th>
              </Table>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default CharDetail;