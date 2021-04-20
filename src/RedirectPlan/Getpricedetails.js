import React from 'react';


class Getpricedetails extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
                  priceList : [],
                  message:""
                   }
    
        
      } 
        //http://localhost:8080/Customer/customers
        componentDidMount(){
          fetch(`http://localhost:8080/pricedetail/${this.props.data}`).then(ress=>ress.json()).then((results)=>{
              this.setState({
                priceList : results                  
                
              })
              
          })
          
      }
       
    render(){
        return(

            <>
            
            
            <h5 style={{marginTop:50}}>Prices : </h5>
            <h5>Adult :  {this.state.priceList.adults} &#8377;</h5>
            <h5>Child With Bed  :  {this.state.priceList.childwithbed} &#8377;</h5>
            <h5>Child Without Bed  :  {this.state.priceList.childwobed} &#8377;</h5>
            </>
        )
    }

 }

 export default Getpricedetails;