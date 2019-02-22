import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import Search from './search/search';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
      </Switch>
    );
  }
}
export default App;

