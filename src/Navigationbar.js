import React from 'react';
import {  BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";
import Home from './Home';
import Nomatch from './Nomatch';
import EventList from './RedirectPlan/EventList';
import Gallery from './Gallery/Gallery';
import { Signup } from './Registration/Signup'; 
import { Contact } from './Contact/Contact';
import { About } from './About/About';
import { SignIn } from './Registration/SignIn';
import EventPage from './RedirectPlan/EventPage';

import TitleLogo from './images/TitleLogo.png'
import './Navigationbar.css'

class Navigationbar extends React.Component{
    render()
    {
        return(
            <div>
                <Router>
      <div className="">
        <div className="row">
          <img src={TitleLogo} alt='TitleLogo' className="titleimg img-responsive pl-5"/>
        </div>
        
        <nav className="navbar navbar-expand-sm ncd avbar-light bg-light nav-background">
          <div className="col-sm-9">
          <ul className="navbar-nav mr-auto">            
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link ">
              <Link to="/About">About Us</Link>
            </li>
            <li className="link">
              <Link to="/Gallery">Gallery</Link>
            </li>            
            {/* <li className="link">
              <Link to="/Registration" >Registration</Link>
            </li>            */}
            <li className="link">
              <Link to="/Contact" >Contact Us</Link>
            </li>
            <li className="link">
              <Link to="/Error">Page Not Found </Link>
            </li>
            
          </ul>
          </div>
          <div className="col-sm-3">
              <ul>
                <li className="link float-right" style={{listStyleType:'none'}}>
              <Link to="/SignIn" >Sign-In</Link>
            </li>
          </ul>
          </div>
         
        </nav>
        <Switch>
              <Route exact path="/">
               <Home/>
              </Route>
              <Route path="/About">
              <About/>
              </Route>
              <Route path="/Signup">
              <Signup/>
              </Route>
              <Route path="/SignIn">
              <SignIn/>
              </Route>
              <Route path="/Gallery">
               <Gallery/>               
               </Route>
              <Route path="/Contact">
               <Contact/>               
               </Route>
              
              <Route path="/EventList/:listname" 
              render={(props)=> <EventList {...props} key={props.match.params.listname}/>}>
              </Route>
              <Route path="/EventDetails/:code" 
              render={(props)=> <EventPage {...props} key={props.match.params.code}/>}>
              </Route>
              <Route path="*">
              <Nomatch/>
              </Route>

        </Switch>
      </div>
    </Router>
            </div>
        )
    }
}

export default Navigationbar;