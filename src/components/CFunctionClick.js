import React, { Component } from 'react'

class CFunctionClick extends Component {
    constructor(props){
        super(props);
        //this.changeEvent=this.changeEvent.bind(this);
        this.state={
            breed:"Spitz",
            year:this.props.year
        }
    }
    changeEvent=()=>{
        this.setState({
            breed:"American Spitz"
        })
        console.log("Hello Jimmy",this.state.breed,this.props.year);
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