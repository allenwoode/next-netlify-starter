import logo from '../assets/logo.svg';
import './App.module.css';
//import { Routes, Route } from 'react-router-dom';
import Image from 'next/image';

function Home() {
  return (
    <h1>Home</h1>
  )
}

function About() {
  return (
    <div>
      <p>About</p>
    </div>
  )
}

export default function App({title}) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Image src={logo} alt="logo" className='App-logo'/>
        <div className="App-tip">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
      </header>
      <p>Application {title}</p>
    </div>
  )
}
