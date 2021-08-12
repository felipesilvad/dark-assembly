import React, { PureComponent } from 'react';
import AddChar from './components/DRPG/Add/AddChar';
import AddSummon from './components/DRPG/Add/AddSummon';
import AddSummonDate from './components/DRPG/Add/AddSummonDate';
import AddSummonRates from './components/DRPG/Add/AddSummonRates';
import UpdateChar from './components/DRPG/Add/UpdateChar';
import AdmCharList from './components/DRPG/List/AdmCharList';

import CharDetail from './components/DRPG/Detail/CharDetail';
import CharsList from './components/DRPG/List/CharsList';
import EvilitiesList from './components/DRPG/List/EvilitiesList';
import SkillsList from './components/DRPG/List/SkillsList';
import SummonDetail from './components/DRPG/Detail/SummonDetail';
import SummonsList from './components/DRPG/List/SummonsList';
import Header from './components/DRPG/Header';
import Home from './components/DRPG/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <Container fuild className="responsive-mt">
          <Row className="m-0">
            <Col md={2} className="p-0">
              <Header />
            </Col>
            <Col md={10} className="p-0">
              <Container className="m-0 p-0">
                <Route path="/DRPG" component={Home} exact/>
                <Route path="/DRPG/adm/add-char" component={AddChar} exact/>
                <Route path="/DRPG/adm/add-summon" component={AddSummon} exact/>
                <Route path="/DRPG/adm/add-summon/date" component={AddSummonDate} exact/>
                <Route path="/DRPG/adm/add-summon/rates" component={AddSummonRates} exact/>
                <Route path="/DRPG/adm/characters" component={AdmCharList} exact/>
                <Route path="/DRPG/adm/characters/:id" component={UpdateChar} exact/>

                <Route path="/DRPG/characters" component={CharsList} exact/>
                <Route path="/DRPG/characters/:id" component={CharDetail} exact/>
                <Route path="/DRPG/evilities" component={EvilitiesList} exact/>
                <Route path="/DRPG/skills" component={SkillsList} exact/>
                <Route path="/DRPG/summons" component={SummonsList} exact/>
                <Route path="/DRPG/summons/:id" component={SummonDetail} exact/>

              </Container>
            </Col>
          </Row>
        </Container>
      </Router>
    )
  }
}
