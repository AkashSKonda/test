import React from 'react';
import TableRow from './Tablerow'


class CustomersList extends React.Component {

   
       constructor() {
          super();
          this.state = {
               customerList : []
                 }
       }
    componentDidMount(){
        fetch('ejson.json').then(res=>res.json()).then((result)=>{
            this.setState({
                       customerList : result

            })
        })
    }
     
     
    render()
    {
        return(
            <div>
                <h2 class="align-center pt-3">Customers List :</h2>
               <a href="/CustomerAdd" class="btn btn-sm btn-success float-right mb-3"> Create new Customer</a>
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.customerList.map((cust, i) => <TableRow key = {i} 
                       data = {cust} />)}
                    </tbody>
                </table>      
            </div>
        )
    }

    
}
// class TableRow extends React.Component {
//       render() {
//          return (
//             <tr>
//                <td>{this.props.data.Id}</td>
//                <td>{this.props.data.Name}</td>
//                 <td>{this.props.data.Location}</td>
//                <td>{this.props.data.Salary}</td>
//             </tr>
//          );
//       }
//     }

export default CustomersList;