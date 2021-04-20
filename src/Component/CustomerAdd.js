import React from 'react';

class CustomerAdd extends React.Component{

    constructor()
    {    super();
        this.state={
            message :""
        }
    }
    onCreateCustomer=()=>{
        
        let custdemo={
            "id":this.refs.id.value,
            "name":this.refs.name.value,
            "gender":this.refs.gender.value,
            "mobile":this.refs.mobile.value,
           "address":this.refs.address.value
          };
        let demo= JSON.stringify(custdemo);
          console.log(JSON.parse(demo));
          alert(demo);
          fetch("http://localhost:8080/Customer/customers.do",{
            method: 'POST',
            mode:'no-cors',
            headers:{'Content-type':'application/json','Accept':'text/html'},
              body: demo
          }).then((data)=>{
            if(data){
              this.setState({message:'New Customer is Created Successfully'});
                
               // alert("err : "+data);
            }else{
               // alert("success"+data);
               this.setState({message:'Not Created..!'});
            }
          });        
          
          
          
    }
    render(){
        return(
            <div>
               
                <div class="row">
                <h4>ADD Customer : {this.state.message} </h4>
                  <div class="col-sm-4"></div>
                  <div class="col-sm-4">
                  
                  <div class="form-group ">
                <label >Enter Id : </label>
                <input type="number" class="form-control" ref="id"></input>
                </div>
                <div class="form-group ">
                <label >Enter Name : </label>
                <input type="text" class="form-control" ref="name"></input>
                </div>
                <div class="form-group ">
                <label >Enter Gender : </label>
                <input type="text" class="form-control" ref="gender"></input>
                </div>
                <div class="form-group ">
                <label >Enter Mobile : </label>
                <input type="number" class="form-control" ref="mobile"></input>
                </div>
                <div class="form-group ">
                <label >Enter Address : </label>
                <input type="text" class="form-control" ref="address"></input>
                </div>
                <div class="col-sm-12 float-right">
                <button class="btn btn-sm btn-success mr-3" onClick={this.onCreateCustomer}> submit </button>
                <button type="reset" class="btn btn-sm btn-danger"> cancel </button>
                </div>
                  </div>
                  <div class="col-sm-4"></div>
                      
                 
                </div>
            </div>
        )
    }
}

export default CustomerAdd;
