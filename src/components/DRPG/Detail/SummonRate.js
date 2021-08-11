import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import SummonRateChar from './SummonRateChar';
import slugify from 'react-slugify';
import { Row, Col, Image, Table, Tabs, Tab } from 'react-bootstrap';

const SummonRate = ({summonID}) => {
  const summonRef = db.firestore().collection('games').doc('DRPG').collection('Summons').doc(summonID);
  
  const [rates, setRates] = useState([])
  summonRef.collection('Rates').onSnapshot((snapshot) => {
    const newRates = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))

    setRates(newRates)
  })

  const nq = require('../../../assets/DRPG/icons/nether-quartz.png');

  return (
    <div>
      <h3 className="sub-title mt-2">Rates</h3>
      {!! rates &&(rates.map((rate) => (
        <Row className="gray-bg mt-2">
          <Col md={5}>
            <Image class="img-fluid" style={{ width: 'inherit', }} src={rate.image_url} />
            <Row>
              {!! rate.price1x &&(
                <Col>
                  <h3 className="text-center">1x</h3>
                  <h4 className="text-center">
                    {rate.price1x}
                    {(rate.currency1x === "paid-nether-quartz") ? (
                      <>
                        Paid
                        <Image src={nq} className="nq-icon"/>
                      </>
                    ) : ('')}
                    {(rate.currency1x === "nether-quartz") ? (
                        <Image src={nq} className="nq-icon"/>
                    ) : ('')}
                  </h4>
                </Col>
              )}
              {!! rate.price10x &&(
                <Col>
                  <h3 className="text-center">10x</h3>
                  <h4 className="text-center">
                    {rate.price10x}
                    {(rate.currency10x === "paid-nether-quartz") ? (
                      <>
                        Paid
                        <Image src={nq} className="nq-icon"/>
                      </>
                    ) : ('')}
                    {(rate.currency10x === "nether-quartz") ? (
                        <Image src={nq} className="nq-icon"/>
                    ) : ('')}
                  </h4>
                </Col>
              )}
            </Row>
          </Col>
          <Col>
            <Tabs defaultActiveKey="normal" id="" className="mb-2">
              <Tab eventKey="normal" title="4 Stars Rates">
                <Table className="">
                  {!! rate.ratesFourStars &&(rate.ratesFourStars.map((char) => (
                    <SummonRateChar
                      id={char.id}
                      rate={char.rate}
                    />
                  )))}
                </Table>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      )))}
    </div>
    
  )
}

export default SummonRate;