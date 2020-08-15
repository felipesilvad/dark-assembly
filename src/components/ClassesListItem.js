import React from 'react';
import {Link} from 'react-router-dom';

const ClassesListItem = ({id, title, stats}) => {

  return (
    <div key={id}>
      <Link to={`/classes/${id}`}>{title}  - {stats} / {id}</Link>
    </div>
  )
}

export default ClassesListItem;