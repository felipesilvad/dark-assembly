import React, { PureComponent } from 'react';
import AddChar from './components/AddChar';
import CharDetail from './components/CharDetail';
import CharsList from './components/CharsList';
import ClassDetail from  './components/ClassDetail';
import ClassesList from  './components/ClassesList';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <Header />
         <Route path="/char-list" component={CharsList} exact/>
         <Route path="/add-char" component={AddChar} exact/>
         <Route path="/char-list/:id" component={CharDetail} exact/>
         <Route path="/classes" component={ClassesList} exact/>
         <Route path="/classes/:id" component={ClassDetail} exact/>
      </Router>
    )
  }
}
