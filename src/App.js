import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { NoMatch } from './components/NoMatch';
import NavigationBar from './components/NavigationBar';
import { Footer } from './components/Footer'

class App extends Component { 
  render () {
    return (
      <React.Fragment>
        <NavigationBar />
         <HashRouter basename="/course-directory" >
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route component={NoMatch} />
            </Switch>
        </HashRouter>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
