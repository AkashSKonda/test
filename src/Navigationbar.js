import React from 'react';
import {  BrowserRouter as Router, Switch,  Route,  Link} from "react-router-dom";
import Home from './Home';
import Nomatch from './Nomatch';
import TitleLogo from './images/TitleLogo.png'
import './Navigationbar.css'

class Navigationbar extends React.Component{
    render()
    {
        return(
            <div>
                <Router>
      <div className="">
        <div class="row">
          <img src={TitleLogo} alt='TitleLogo' className="titleimg img-responsive pl-5"/>
        </div>
        
        <nav class="navbar navbar-expand-sm ncd avbar-light bg-light nav-background">
          <ul class="navbar-nav mr-auto">
            
            <li class="link">
              <Link to="/">Home</Link>
            </li>
            <li class="link ">
              <Link to="/About">About Us</Link>
            </li>
            <li class="link">
              <Link to="/Plans">Plans</Link>
            </li>            
            <li class="link">
              <Link to="/Registration" >Registration</Link>
            </li>
            <li class="link">
              <Link to="/Login" >Login</Link>
            </li>
            <li class="link">
              <Link to="/Contact" >Contact Us</Link>
            </li>
            <li class="link">
              <Link to="/Error">Page Not Found </Link>
            </li>
          </ul>
        </nav>
        <Switch>
              <Route exact path="/">
               <Home/>
              </Route>
              <Route path="/CustomersList">
              {/* <CustomersList/> */}
              </Route>
              <Route path="/CustomerAdd">
              {/* <CustomerAdd/> */}
              </Route>
              <Route path="/CustomerDetails/:code">
               {/* <CustomerDetails/>                */}
               </Route>
               <Route path="/StudentName">
              {/* <StudentName/> */}
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