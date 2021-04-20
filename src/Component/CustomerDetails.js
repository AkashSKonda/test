import React from 'react';
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
  


    export function CustomerDetails(props) {
      
        const [customer,setCustomer]=useState({});
        const {id} = useParams()
        
          useEffect(()=> {
              fetch("ejson.json").then(res => res.json()).then((result) => { setCustomer(result);
                 }
              );
          });
        

           // 
            return (
             <div> <CsList data={customer} code={id}/> 
             <h1>{id}</h1>        
             </div>
              );
      }

      class CsList extends React.Component{         
       
          render()
          {
              return(
                <div>
                     { 
                         this.props.data.id==this.props.code ?
                        <div><label>ID :{this.props.data.id}</label>
                        <label>Name :{this.props.data.name}</label>
                        <label>Gender:{this.props.data.gender}</label>
                        <label>Mobile:{this.props.data.annualSalary}</label>
                        <label>Address:{this.props.data.dateOfBirth}</label></div> : <div>
                          <h4>No result Found..!</h4>
                        </div>
                        
                   }                    
                
                 </div>
              )
          }
        }


