import React, { Component } from 'react'

class UserNames extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             UserId:'',num:0
        }
    }
    
    signup=(uid)=>{
        console.log(uid);
        this.setState({
            USerId:uid,num:this.state.num+1
        })

    }
    render() {
        return (
            <div>
            <button onClick={()=> {this.signup(1)}}>Sign UP</button>
                <Signups UserId={this.state.UserId} num={this.state.num}></Signups>
            </div>
        )
    }
}

export default UserNames;


class Signups extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             num:this.props.num
        }
    }

   /* updateNum=()=>{
        this.setState({
            num:this.state.num+1
        })
    }*/

static getDerivedStateFromProps(props,state){
    console.log(props.num)
    console.log(state.num)
    if(props.num !== state.num){
        return { num: props.num}
    }

    return null;
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