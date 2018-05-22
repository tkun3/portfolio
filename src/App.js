import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import Components
import About from './About/About';
import Projects from './Projects/Projects';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

//Import CSS
//import '../src/css/materialize.css';
import '../src/css/generic.css';


//  <Route path="/gallery" component={Gallery}/> 

//Import Router Library
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



//Switch find the FIRST route that is matched
class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
