import React from 'react';
import {Link} from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';


const CharsListItem = ({id, title, portrait_url}) => {


  return (
    <Col className="chars-list-item" key={id}>
      <Link to={`/DRPG/characters/${id}`}>
        <Image className="chars-list-item__img mx-auto d-block gray-bg" src={portrait_url} />
        <h4 className="text-center">{title}</h4>
      </Link>
    </Col>
  )
}

export default CharsListItem;