import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             userid:'',
             title:'',
             body:''
        }
    }
    
    changeHandler = (e)=>{
        this.setState({ [e.target.name]:e.target.value })
    }

    handleSubmit=(e)=>{
        e.perventDefault()
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response =>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        const{userid,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
            <div>
                <label>User Id</label>
                <input type="text" value={userid} name="userid" onChange={this.changeHandler}></input>
                </div>
                <div>
                <label>Title: </label>
                <input type="text" value={title} name="title" onChange={this.changeHandler}></input>
            </div>
            <div><label>Body </label><input type="text" value={body} name="body" onChange={this.changeHandler}></input></div>
            <button type="submit"> Submit </button>
            </form>
            </div>
        )
    }
}

export default PostForm
