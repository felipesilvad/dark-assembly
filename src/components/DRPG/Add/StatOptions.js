import React from 'react';

const StatOptions = ({id, title}) => {

  return (
    <option value={title} key={id}>
        {title}
    </option>
  )
}

export default StatOptions;