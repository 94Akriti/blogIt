//import { render } from '@testing-library/react';
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import CHeader from './components/CHeader'
import Channel from './components/Channel'
import FunctionClick from './components/FunctionClick'
import CFunctionClick from './components/CFunctionClick'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appstyle.css'
import Style from './appstyle.module.css'
import Form from './components/Form'
import Routing from './components/Routing';
import LifeCycleA from './components/LifeCycleA';
import UserNames from './components/UserNames';
import PostUsersList from './components/PostUsersList';
import PostForm from './components/PostForm';
import Hooks from './components/Hooks';
import HookObject from './components/HookObject';
class App extends React.Component{
  render(){
    const dogs=['cherry','rox','jimmy'];
    return(
      <div className="App">
        {/*<h1 className={Style.success}>Success</h1>
        <h1 className='error'>Error</h1>
        <Header name="Akriti" last="Yadav"/>
        <p>Hi I'm Akriti</p>
        <Header name="Jimmy"/> 
        <CHeader name="Arpana"/>
        <Channel/>
        <FunctionClick/>
        <CFunctionClick year="2009" dogs={dogs}/>
        
        <Stylesheet isvalue={true}></Stylesheet>
        <Inline></Inline>
        <Form></Form>
        <Routing></Routing>
        <LifeCycleA></LifeCycleA>
        <UserNames></UserNames>
        <PostUsersList></PostUsersList>
        <PostForm></PostForm>
        <Hooks></Hooks>*/}
        <HookObject></HookObject>
      </div>
      );
  }
}

export default App;
