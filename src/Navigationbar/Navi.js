import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

  class Navi extends React.Component{
    render(){
        return(
            <>
              <div className="">
                  <div className="row">
                      <div className="col-lg-7">
                          <h1>
                              hello This Is Title
                          </h1>
                      </div>
                      <div className="col-lg-12">
                      <Router>
                          <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbarname">
                              <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                              <Navbar.Collapse id="basic-navbar-nav">
                                  <Nav className="mr-auto">
                                  <Nav.Link href="/">Home</Nav.Link>
                                  <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                  <Nav.Link href="/contact-us">About Us</Nav.Link>
                                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                  </NavDropdown>
                                  </Nav>
                                 
                              </Navbar.Collapse>
                          </Navbar>
                          <br />
                          <Switch>
                              <Route exact path="/">
                                 
                              </Route>
                              <Route path="/about-us">
                                  
                              </Route>
                              <Route path="/contact-us">
                                  
                              </Route>
                          </Switch>
                      </Router>
                      </div>

                  </div>
              </div>
            </>
        )
    }
}
export default Navi;