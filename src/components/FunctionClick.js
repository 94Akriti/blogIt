import React from 'react'

function FunctionClick(){
    function changeEvent(e){
        e.preventDefault();
            console.log("This is Eventhandling",this)
    }
    return(
        <React.Fragment>
            <a href="google.com" onClick={changeEvent}>Click It!!!</a>
        </React.Fragment>
    )
}

export default FunctionClick;