import React from 'react'
import BackgroundVideo from './components/backgroundVid/backgroundVid';
import {BrowserRouter as Router,Route,
  Switch} from 'react-router-dom';
import Navigbar from './components/Navbar/Navigbar';
import Explore from './components//explore/Explore';
import Contact from './components//contact/contact';

// import './allcss.css';


function App() {
  return (
    <Router>
      <Route exact path = '/' ><BackgroundVideo/></Route>
      
        <Switch>
          
          <Route exact path = '/home' ></Route>
          <Route exact path = '/home/explore' ><Explore/></Route>
          <Route exact path = '/home/contact' ><Contact/></Route>

        </Switch>
    </Router>
  );
}

export default App;
