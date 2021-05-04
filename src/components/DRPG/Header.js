import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends PureComponent {
  render() {
    return (
      <div>
        <nav>
          <Link to='/DRPG/adm/add-char'>Add Character</Link>
          <Link to='/DRPG/characters'>Character List</Link>
          <Link to='/DRPG/evilities'>Evility List</Link>
          <Link to='/DRPG/skills'>Skills List</Link>
        </nav>
      </div>
    )
  }
}
