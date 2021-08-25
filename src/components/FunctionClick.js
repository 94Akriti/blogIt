import React from 'react'

function FunctionClick(){
    function changeEvent(e){
        e.preventDefault();
            console.log("This is Eventhandling",this)
    }
    return(
        <div>
            <a href="google.com" onClick={changeEvent}>Click It!!!</a>
        </div>
    )
}

export default FunctionClick;