import React from 'react';
import Testing from './Testing'
class CHeader extends React.Component{
    state={
        users:[
            {id:1,name:"laila",class:10},
            {id:2,name:"aslan",class:9},
        ]
    }
    render(){
        /*const newusers=this.state.users.map(user=>{
                return ( 
                <h1>{user.name}</h1>
                )
                
        });*/
        return (
        <div>    
            <h1>Class Component says hi to: {this.props.name}</h1>
            {
               this.state.users.map(user=>{
                   return(
                       /*<h1 key = {user.id}>{user.id}
                       {user.name}
                       {user.class}
                       </h1>*/
                       <Testing key={user.id} value={user.id}></Testing>
                   )
            })
    }
    </div>
    )
    }
}
export default CHeader;