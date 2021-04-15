import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import { Row, Col, Image, Table } from 'react-bootstrap';


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
  const monster_1 = require('../../assets/DRPG/icons/weapons/Monster1.png');
  const male = require('../../assets/DRPG/icons/male.png');
  const star = require('../../assets/DRPG/icons/rare_star.png');



  return (
    <div>
      <Row>
        <Col xs={3} className="p-1 pl-3 pt-4">
          <Image src={cut} className="main-img" />
        </Col>
        <Col xs={9} className="p-1">
          <div className="char-title__bg d-flex justify-content-between">
            <h1 className="char-title">Prinny</h1>
            <div className="d-block">
              <Image src={monster_icon} className="type_icons" />
              <Image src={monster_1} className="type_icons" />
              <Image src={male} className="type_icons" />
            </div>
          </div>
          <div className="mt-2 d-flex">
            <h3 className="font-weight-bold text-uppercase pt-1 pr-2">Stats at</h3>
            <Image src={star} className="star" />
            <Image src={star} className="star" />
            <Image src={star} className="star" />
            <Image src={star} className="star" />
            <Image src={star} className="star" />
            <Image src={star} className="star" />
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
    </div>
  )
}

export default CharDetail;