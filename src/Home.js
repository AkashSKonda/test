import React from 'react';
import Slider from './Carousel/Slider';
import Container from './Containers/Container';

import Category from './Category/Category';  
import './Home.css'


class Home extends React.Component {
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
     const Line = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 3,
              borderRadius:5,
              width:50
              
          }}
      />
  );
      
     
       return (
          <>          
          <Slider /> 
          <ColoredLine color="#95d26b" /> 
          <marquee  className="marqueetag"> Welcome To E-tour India  PVT LTD. Lets Make Your Journey joyful  !!!</marquee>
          <ColoredLine color="#95d26b" />
          <h4 style={{textAlign:'center'}}>  All Categories </h4> 
          <Category/>

          <ColoredLine color="#95d26b" />
          <h4 style={{textAlign:'center'}}> Maharashtra Trips </h4>
          <Line   color="#95d26b"/>
          <Container cat="MH"/> 

          <ColoredLine color="#95d26b" />
          <h4 style={{textAlign:'center'}}> Kashmiri Trips </h4>
          <Line   color="#95d26b"/>
          <Container cat="KAS"/> 

          <ColoredLine color="#95d26b" />
          <h4 style={{textAlign:'center'}}>  International </h4> 
          <Line   color="#95d26b"/>
          <Container cat="INT"/>

          <ColoredLine color="#95d26b" />
          <h4 style={{textAlign:'center'}}>   Indian Trips</h4>
          <Line   color="#95d26b"/>            
          <Container cat="DOM"/>

          <ColoredLine color="#95d26b" />
          <h4 style={{textAlign:'center'}}> Special  Offered Trips </h4>
          <Line   color="#95d26b"/>
          <Container cat="CKD"/>   

              
          
          </>
          
       )
    }
 }export default Home;