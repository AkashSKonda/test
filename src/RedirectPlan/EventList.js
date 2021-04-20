import React from 'react';
import './EventList.css'
import {Card, Container,Row,Col } from 'react-bootstrap'


class EventList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                eventList : [],
                message:"",
                catdata:this.props.match.params.listname,
                name:''
                 }
  
      
    } 
      //http://localhost:8080/Customer/customers
      componentDidMount(){
        fetch(`http://localhost:8080/subcategory/${this.state.catdata}`).then(res=>res.json()).then((result)=>{
          if(this.state.catdata==='INT'){
            this.setState({ name : 'International Tour '})
          }
          if(this.state.catdata==='DOM'){
            this.setState({ name : 'Indian Tour '})
          }
          if(this.state.catdata==='SIS'){
            this.setState({ name : 'SevenSister Tour '})
          }
          if(this.state.catdata==='VS'){
            this.setState({ name : 'VarshaSahal '})
          }
          if(this.state.catdata==='CKD'){
            this.setState({ name : 'CricketDhamaka Tour '})
          }
        if(result){
          var count = Object.keys(result).length;
          //alert(count);
          if(count==0){
            this.setState({
              message : 'No Records '                
  
            })
          }else{
            this.setState({
              eventList : result                
  
            })
          }
         
        }else{
          this.setState({
            message : ' Server NOT Found  '                

          })
        }
            
        })
    }
   
  
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
            <Container>
            <h1 style={{textAlign:'center'}}>{this.state.name}</h1>
            <ColoredLine color="#95d26b" />
            <h4>{this.state.message}</h4>
        <Row>
        
        {this.state.eventList.map(item => (        
        <Col xs="6" >
        <a href={"/EventDetails/"+item.catsubid} style={{color:'black',textDecoration:'none'}}><Card className="card">
              <Card.Img variant="top" src={"/images/"+item.categoryimage}  style={{borderRadius:20,height:250}}/>
              <Card.Body>
                <Card.Text >
                    <h4 style={{color:'green'}} >{item.categoryname} ({item.categoryid})</h4>
                </Card.Text>
              </Card.Body>
          </Card>
          </a>
        </Col>
          ))} 
        </Row>
         </Container>
        </div>
      );
    }
  }

  export default EventList;