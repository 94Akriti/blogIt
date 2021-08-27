import React, { Component } from 'react'

class UserNames extends Component {
    
    render() {
        return (
            <div>
                <Signups></Signups>
            </div>
        )
    }
}

export default UserNames;


class Signups extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             num:0
        }
    }

    updateNum=()=>{
        this.setState({
            num:this.state.num+1
        })
    }
    componentDidMount(){
        console.log("Execute after component render");
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Component Updated');
    }
    render(){
        return(
            <div>
                <h1>Signed Up User count: {this.state.num} </h1>
                <button onClick={this.updateNum}>Sign Up</button>
            </div>
        )
    }
}