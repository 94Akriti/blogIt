//import { render } from '@testing-library/react';
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import CHeader from './components/CHeader'
import Channel from './components/Channel'
import FunctionClick from './components/FunctionClick'
import CFunctionClick from './components/CFunctionClick'
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header name="Akriti" last="Yadav"/>
        <p>Hi I'm Akriti</p>
        <Header name="Jimmy"/> 
        <CHeader name="Arpana"/>
        <Channel/>
        <FunctionClick/>
        <CFunctionClick/>
      </div>
      );
  }
}

export default App;
