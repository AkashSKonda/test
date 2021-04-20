import React from 'react';
import Slider from './Carousel/Slider';

class Home extends React.Component {
    render() {
       return (
          <>          
          <Slider/>
          <div class="container">
             <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8 pt-5">
                <h1> Welcome To E-Tour India PVT LTD </h1>
                </div>
                <div class="col-sm-2"></div>
             </div>
             
          </div>
          </>
          
       )
    }
 }export default Home;