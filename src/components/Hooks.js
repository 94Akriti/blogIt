import React,{useState} from 'react'

export default function Hooks() {
    const [likes,changestate]=useState('Like it?');
    const giveLike=()=>{
        changestate('Thank you');
    }
    return (
        <div>
            {likes}
            <button onClick={giveLike}>Like</button>
        </div>
    )
}

