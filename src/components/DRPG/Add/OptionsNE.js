import React from 'react';

const OptionsNE = ({id, title}) => {

  return (
    <option value={id} key={id}>
        {title}
    </option>
  )
}

export default OptionsNE;