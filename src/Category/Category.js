import React from 'react';
import Coverflow from 'react-coverflow';
import './Category.css'

class Category extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                intList : [],
                message:""
                
                 }
  
      
    } 
      //http://localhost:8080/Customer/customers
      componentDidMount(){
        fetch(`http://localhost:8080/category/`).then(res=>res.json()).then((result)=>{
            this.setState({
                intList : result,
                

            })
        })
    }
     
  
    render() {
     
      return (
        <div>
            {/* {this.state.catdata} */}
          <Coverflow
            width={1000}
            height={300}
            displayQuantityOfSide={3}
            navigation={false}
            enableHeading={false}            
          >      

        {this.state.intList.map((cust, i) => 
             
        <img src={'images/'+cust.categoryimage}
          alt='Album'
               data-action={"/EventList/"+cust.categoryid}
               style={{borderRadius:20}}
               key = {i}     
               data = {cust}
        
        ></img>       
        
      
     
        
        )}
         
       
          
                     
            {/* <img src='images/europe.jpg' alt='Album one' data-action="/EventList/europe" style={{borderRadius:20}}/>
            <img src='images/usa.jpg' alt='Album two' data-action="/EventList/usa" style={{borderRadius:20}}/>
            <img src='images/ezipt.jpg' alt='Album three' data-action="/EventList/ezipt" style={{borderRadius:20}}/>
            <img src='images/cape.jpg' alt='Album four' data-action="/EventList/cape" style={{borderRadius:20}}/>
            <img src='images/africa.jpg' alt='Album five' data-action="/EventList/africa" style={{borderRadius:20}}/>
            <img src='images/tailand.jpg' alt='Album six' data-action="/EventList/tailand" style={{borderRadius:20}}/>
            <img src='images/dubai.jpg' alt='Album seven' data-action="/EventList/dubai" style={{borderRadius:20}}/> */}
          </Coverflow>
        </div>
      );
    }
  }

  export default Category;