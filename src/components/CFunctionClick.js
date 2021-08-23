import React, { Component } from 'react'

class CFunctionClick extends Component {
    changeEvent(){
        console.log("Hello Jimmy");
    }
    render(){
    return(
        <div>
            <button onClick={this.changeEvent}>Click It!!!</button>
        </div>
    )
    }
}
export default CFunctionClick;