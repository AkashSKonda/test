import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Slidercss.css';


class Slider extends React.Component{


 
   
    render(){
        return(
            <div >
          <Carousel fade style={{top:4}} >
            
            <Carousel.Item className="ImageItem" >
                  <img style={{borderRadius:20,height:650}}
                    className="d-block w-100 img-responsive "
                    src="images/slider7.jpg"
                    alt="first slide" 
                  />
                <Carousel.Caption>
                  {/* <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              
            <Carousel.Item className="ImageItem">
                <img style={{borderRadius:20,height:650}}
                  className="d-block w-100 img-responsive"
                  src="images/slider6.jpg"
                  alt="second slide"
                />
                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="ImageItem">
                <img style={{borderRadius:20,height:650}}
                  className="d-block w-100 img-responsive"
                  src="images/slider5.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  {/* <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
            </div>
        )
    }
}

export default Slider;