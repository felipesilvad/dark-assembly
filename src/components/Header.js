import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends PureComponent {
  render() {
    return (
      <div>
        <nav>
          <Link to='/add-char'>Add Character</Link>
          <Link to='/char-list'>Character List</Link>
          <Link to='/classes'>Classes List</Link>
        </nav>
      </div>
    )
  }
}
