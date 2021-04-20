 import React from 'react';
 import './EventList.css'
import {Card, Container,Row,Col } from 'react-bootstrap'
import Getpricedetails from './Getpricedetails'
 
 class EventPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
                  intList : [],
                  message:"",
                  paramdata:this.props.match.params.code
                   }
    
        
      } 
        //http://localhost:8080/Customer/customers
        componentDidMount(){
          fetch(`http://localhost:8080/packcompdetail/${this.state.paramdata}`).then(res=>res.json()).then((result)=>{
              this.setState({
                  intList : result,
                  
  
              })
          })
      }
       
    
     render(){
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
          
         return(
             <>
             {/* {this.props.match.params.code} */}

             <Container>
            <h1 style={{textAlign:'center',color:'green'}}>{this.state.intList.tourname}</h1>
            <ColoredLine color="#95d26b" />
            
        <Row>
        <Col xs="1" ></Col>
        <Col xs="10" >
       <Card className="card1">
              <Card.Img variant="top" src={"/images/"+this.state.intList.tourimage}  style={{borderRadius:20}}/>
              <Card.Body>
                <Card.Text >
                    <h4 style={{color:'green'}} ><span style={{fontSize:15,color:'black'}}>Tour Name  : </span>{this.state.intList.tourname}</h4>
                    
                    <h4 style={{color:'green',fontSize:15,marginTop:40,textAlign:'justify'}} >Description : <span style={{fontSize:18,color:'black'}}>{this.state.intList.description}</span></h4>
                   <Getpricedetails  data={this.state.intList.packageid} />
                </Card.Text>
                <button className="btn btn-sm btn-success float-right"> Book Your Tour</button>
              </Card.Body>
          </Card>
          
        </Col>
         
        </Row>
         </Container>
             
             </>
         )
     }
 }


 export default EventPage;