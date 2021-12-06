import React from 'react'
import BackgroundVideo from './components/backgroundVid/backgroundVid';
import {BrowserRouter as Router,Route,
  Switch} from 'react-router-dom';
import Navigbar from "./components/Navbar/Navigbar";
import Explore from './components//explore/Explore';
import Contact from './components//contact/contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path = '/' ><BackgroundVideo/></Route>
        <Route exact path = '/home' ><Navigbar/></Route>
        <Route exact path = '/home/explore' ><Navigbar/><Explore/> </Route>
        <Route exact path = '/home/contact' ><Navigbar/><Contact/><Footer/></Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
