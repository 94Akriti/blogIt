import React from 'react';

class CHeader extends React.Component{
    state={
        users:[
            {id:1,name:"laila",class:10},
            {id:2,name:"aslan",class:9},
        ]
    }
    render(){
        const newusers=this.state.users.map(user=>{
                return ( 
                <h1>{user.name}</h1>
                )
                
        });
        return <div>
            
            <h1>Class Component says hi to: {this.props.name}</h1>
            <h2>{newusers}</h2>
        </div>
    }
}
export default CHeader;