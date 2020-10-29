import React from 'react';
import logo from './logo.svg';
import './App.css';

function HelloWorld(props){
  return <div>{props.kata}</div>
}
function Button(){
  return <button onClick={()=>alert('Youkoso')}>Jajal Ketok Inyong</button>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld kata="Saha Maneh"/>
        <Button />
        <p>
          Edit <code>src/App.js</code> Hello Jonathan
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
