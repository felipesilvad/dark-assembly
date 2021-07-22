import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import { Row, Col, Image, Table, Container, Tabs, Tab } from 'react-bootstrap';
import SummonFeatured from './SummonFeatured';
import SummonDate from './SummonDate';
import SummonRate from './SummonRate';

const SummonDetail = ({match}) => {

  const summonRef = db.firestore().collection('games').doc('DRPG').collection('Summons').doc(match.params.id);
  const [summon, setSummon] = useState('');

  useEffect(() => {
    summonRef.get().then((summon) => {
      const newSummon = summon.data();
      setSummon(newSummon)
    })
  }, [])

  return (
    <Container className="p-0">
      <Row>
        <Col sm={4} className="p-1 pt-3">
          <Image src={summon.image_url} className="portrait-img rounded mx-auto d-block" />
        </Col>
        <Col>
          <h2 className="char-title">{summon.title}</h2>
          <h3 className="sub-title">Featured</h3>
          <Row>
            {!! summon.featured &&(summon.featured.map((featured) => (
              <SummonFeatured
                id={featured.value}
              />
            )))}
          </Row>
        </Col>
      </Row>
      <SummonDate summonID={match.params.id} />
      <SummonRate summonID={match.params.id} />
    </Container>
  )
}

export default SummonDetail;