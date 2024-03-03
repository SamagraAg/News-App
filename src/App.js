import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }
  handleNext() {
    const newPage = this.state.page + 1
    console.log(newPage)
    this.setState({ page: newPage })
  }
  handlePrev() {
    if(this.state.page == 1) return;
    const newPage = this.state.page - 1
    console.log(newPage)
    this.setState({ page: newPage })
  }
  author = `Samagra`

  render() {
    return (
      <>
        <Navbar></Navbar>
        <News page={this.state.page}> </News>
        <Footer page={this.state.page} handlePrev={this.handlePrev} handleNext={this.handleNext}></Footer>
      </>
    )
  }
}

