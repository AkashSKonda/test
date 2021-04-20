import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export class About extends Component {
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
                    <h1 style={{textAlign:'center',marginTop:100,marginBottom:50}} > About Us  </h1>
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
                            <h2 style={{color: 'green'}}><b>Vision</b></h2>
                            <p style={{color: 'black'}}>eTour-The World Class Travel Company, Spreading Smiles and Happiness..."</p>
                                
                            <ColoredLine color="#95d26b" /> 
                            <h2 style={{color: 'green'}}><b>Mission</b></h2>
                            <p style={{color: 'black'}}>eTour is passionately committed to Total Quality Travel, with continual delivery of value added services.<br></br>
                            We uphold the highest ethical standards and believe in creating new benchmarks in the industry.</p>
                            <ColoredLine color="#95d26b" /> 
                           </Col>
                            
                        </Row>  
                    </Container>
            </div>
        )
    }
}

export default About
