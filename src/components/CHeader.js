import React from 'react';

class CHeader extends React.Component{
    render(){
        return <h1>Class Component says hi to: {this.props.name}</h1>
    }
}
export default CHeader;