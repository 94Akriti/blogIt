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
        const dogs=this.props.dogs;
        //const alldogs=dogs.map(function(dogs){ return <li>{dogs}</li>});
    return(
        <React.Fragment>
            <button onClick={this.changeEvent}>Click It!!!</button>
            {this.props.year}
            <ul>
            {
                dogs.map((dogs)=>{  
                    return 
                    <li key={dogs}>{dogs}</li>
                })
            }
                    </ul>
            </React.Fragment>
    )
    }
}
export default CFunctionClick;