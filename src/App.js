import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'

export default class App extends Component {
  author = `Samagra`
  render() {
    return (
      <>
      <Navbar></Navbar>
      </>
    )
  }
}

