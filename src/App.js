import React, { PureComponent } from 'react';
import AddChar from './components/DRPG/Add/AddChar';
import CharDetail from './components/DRPG/Detail/CharDetail';
import CharsList from './components/DRPG/List/CharsList';
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
          <Route path="/add-char" component={AddChar} exact/>
          <Route path="/characters" component={CharsList} exact/>
          <Route path="/characters/:id" component={CharDetail} exact/>
        </Container>
      </Router>
    )
  }
}
