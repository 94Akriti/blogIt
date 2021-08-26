import React, { Component } from 'react'

export class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            msg:'',
            recipient:''
        }
    }
    handleUsername=(event)=>{
        this.setState({
            username:event.target.value
        });
    }
    handlemsg=(event)=>{
        this.setState({
            msg:event.target.value
        });
    }
    handleto=(event)=>{
        this.setState({
            recipient:event.target.value
        });
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} says ${this.state.msg} to ${this.state.recipient}`)
        console.log(`${this.state.username} says ${this.state.msg} to ${this.state.recipient}`)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsername}></input>
                </div>
                <div>
                <label>Message: </label>
                <input type="text" value={this.state.msg} onChange={this.handlemsg}></input>
            </div>
            <div><label>Recipient: </label><input type="text" value={this.state.recipient} onChange={this.handleto}></input></div>
            <button> Send </button>
            </form>
        )
    }
}

export default Form
