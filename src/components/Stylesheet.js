import React from 'react'
import './Styles.css'
function Stylesheet(props) {
    let className=props.isvalue ? 'h1css':'h1css1';
    return (
        
        <div>
            <h1 className={`${className} h1css2`}>This is Stylesheet</h1>
        </div>
    )
}

export default Stylesheet
