import React from 'react';
import TitleLogo from './images/TitleLogo.png'

import './Navigationbar.css'
class Nomatch extends React.Component {
    render() {
       return (
         <div class="container">
         <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8 pt-5"> 
            
               <p style={{fontSize:35,marginTop:50}}>404 OOPS.. You Went Wrong Direction.!</p>
               <img src={TitleLogo} alt='TitleLogo'style={{marginTop:30,marginBottom:220}} className="titleimg img-responsive pl-5"/>
            </div>
            <div class="col-sm-2"></div>
         </div>
         
         
      </div>
       )
    }
 }
 export default Nomatch;