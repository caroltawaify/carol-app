import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { About } from './About';
import { Projects } from './Projects';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer'

class App extends Component { 
  render () {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
         <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route  path='/about' component={About} />
              <Route  path='/projects' component={Projects} />
              <Route  component={NoMatch} />
            </Switch>
        </Router>
        <Contact />
        </Layout>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
