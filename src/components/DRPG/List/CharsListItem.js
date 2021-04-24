import React from 'react';
import {Link} from 'react-router-dom';

const CharsListItem = ({id, title}) => {


  return (
    <div key={id}>
      <Link to={`/characters/${id}`}>{title} / {id}</Link>
    </div>
  )
}

export default CharsListItem;