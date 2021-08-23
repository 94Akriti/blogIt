import React from 'react';

class Channel extends React.Component{
    constructor(){
        super();
        this.state={
            msg:'This is state under Super'
        }
    }
    sayHi(){
        this.setState({
            msg:'Hi Channel'
        })
    }
    render(){
        return (
        <div>
        <h1>{this.state.msg}</h1>
        <button onClick={ () => { this.sayHi() }}>Say Hi to the channel </button>
            </div>
   )
    }
}
export default Channel;