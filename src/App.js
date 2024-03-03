import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer'


export default class App extends Component {
  author = `Samagra`
  state = {
    page: 1
  }
  render() {
    return (
      <>
        <Navbar></Navbar>
        <News page={this.state.page}> </News>
        <Footer></Footer>
      </>
    )
  }
}

