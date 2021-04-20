import React from 'react';

const TargetOptions = ({id, title}) => {

  return (
    <option value={title} key={id}>
        {title}
    </option>
  )
}

export default TargetOptions;