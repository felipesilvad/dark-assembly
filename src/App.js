import React, { PureComponent } from 'react';
import AddChar from './components/DRPG/Add/AddChar';
import UpdateChar from './components/DRPG/Add/UpdateChar';

import CharDetail from './components/DRPG/Detail/CharDetail';
import CharsList from './components/DRPG/List/CharsList';
import EvilitiesList from './components/DRPG/List/EvilitiesList';
import Header from './components/DRPG/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <Header />
        <Container>
          <Route path="/DRPG/adm/add-char" component={AddChar} exact/>
          <Route path="/DRPG/adm/characters/:id" component={UpdateChar} exact/>
          <Route path="/DRPG/characters" component={CharsList} exact/>
          <Route path="/DRPG/characters/:id" component={CharDetail} exact/>
          <Route path="/DRPG/evilities" component={EvilitiesList} exact/>
        </Container>
      </Router>
    )
  }
}
