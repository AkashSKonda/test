import React from 'react';

class Content extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.updateStateProp}>Update The State</button>
                <h1>{this.props.myDataProp}</h1>
            </div>
        )
    }
}


export default Content;