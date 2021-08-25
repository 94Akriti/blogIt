import React, { Component } from 'react'

class CFunctionClick extends Component {
    constructor(){
        super();
        //this.changeEvent=this.changeEvent.bind(this);
        this.state={
            breed:"Spitz"
        }
    }
    changeEvent=()=>{
        this.setState({
            breed:"American Spitz"
        })
        console.log("Hello Jimmy",this.state.breed);
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