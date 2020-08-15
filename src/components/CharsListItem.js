import React from 'react';
import {Link} from 'react-router-dom';

const CharsListItem = ({id, title, stats}) => {

  return (
    <div key={id}>
      <Link to={`/char-list/${id}`}>{title}  - {stats} / {id}</Link>
    </div>
  )
}

export default CharsListItem;