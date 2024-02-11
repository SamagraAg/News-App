import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  author = `Samagra`
  render() {
    return (
      <>
        <Navbar></Navbar>
        <News></News>
      </>
    )
  }
}

