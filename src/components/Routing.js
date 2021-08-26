import React from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Routing() {
    return (
        <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Chatbox">Chatbox</Link>
                    </li>
                    <li>
                        <Link to="/Status">Status</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Switch>
            <Route path="/Chatbox">
                <Chatbox></Chatbox>
            </Route>
            <Route path="/Status">
                <Status></Status>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
        </Switch>
        </Router>
    )
}

function Home(){
    return <h1>Hello Home</h1>
}
function Chatbox(){
    return <h1>Hello pingers</h1>
}
function Status(){
    return <h1>Hello Statuses</h1>
}