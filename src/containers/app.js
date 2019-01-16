import React, { Component } from 'react';
import { HashRouter as Router} from "react-router-dom";
import RouteView from '../router/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <RouteView></RouteView>
        </Router>
      </div>
    );
  }
}

export default App;
