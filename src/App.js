import React from 'react'
import BackgroundVideo from './components/backgroundVid/backgroundVid';
import {BrowserRouter as Router,Route,
  Switch} from 'react-router-dom';
import Navigbar from "./components/Navbar/Navigbar";
import Explore from './components//explore/Explore';
import Contact from './components//contact/contact';
import Footer from './components/Footer/Footer';
// import './allcss.css';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path = '/' ><BackgroundVideo/></Route>
          <Route exact path = '/home' ></Route>
          <Route exact path = '/home/explore' ><Explore/></Route>
          <Route exact path = '/home/contact' ><Contact/></Route>

        </Switch>
    </Router>
  );
}

export default App;
