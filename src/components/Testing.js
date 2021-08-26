import { returnStatement } from '@babel/types'
import React from 'react'

function Testing(props){
    console.log(props.value);
    return(
        <div>
            {props.value}
        </div>
    )
}

export default Testing