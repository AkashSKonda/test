import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
export class Contact extends Component {
    render() {
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 3,
                    borderRadius:5,
                    
                }}
            />
        );
        return (
            <div>
                    <h1 style={{textAlign:'center',marginTop:100,marginBottom:70}} > Contact Page </h1>
                    
                    
                    <Container>
                        <Row>                            
                            <Col md='6'>                             
                            <Row>
                            <img
                             src="images/TitleLogo.png"
                                width='450'
                                style={{marginBottom:80}}
                            /> 
                            </Row> 
                            </Col>
                            <Col md='6'>
                            <h2 style={{color: 'green'}}><b>Our Address </b></h2>
                            <ColoredLine color="#95d26b" /> 
                            <p style={{color: 'black'}}>USM's VidyaNidhi Infotech Academy, <br></br>Juhu, Mumbai </p>
                            
                            
                           </Col>
                            
                        </Row>  
                    </Container>
            </div>
        )
    }
}

export default Contact
