import React from 'react'

function FunctionClick(){
    function changeEvent(){
            console.log("This is Eventhandling")
    }
    return(
        <div>
            <button onClick={changeEvent}>Click It!!!</button>
        </div>
    )
}

export default FunctionClick;