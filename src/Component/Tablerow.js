import React from 'react';

 class Tablerow extends React.Component{
     
       constructor() {
              super();
              this.state = {
                   message :""
                     }
           }
        componentDidMount(){
            fetch('http://localhost:8080/Customer/customer/{id}').then(res=>res.json()).then((result)=>{
                this.setState({
                           message : "Deleted Successfully ..!"
    
                })
            })
        }
      
    render(){
        return(
           
                <tr>
                    <td>{this.props.data.id}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.gender}</td>
                    <td>{this.props.data.mobile}</td>
                    <td>{this.props.data.address}</td>
                     <td><a href={'/CustomerDetails/'+this.props.data.id} class="btn btn-sm btn-success mr-2">Details</a>
                     <a href={'/CustomerEdit/'+this.props.data.id} class="btn btn-sm btn-warning mr-2">Edit{this.state.message}</a>
                     <a href={'/CustomerDelete/'+this.props.data.id} class="btn btn-sm btn-danger">Delete</a>
                     </td>
                </tr>
            
        )
    }
 }

 export default Tablerow;