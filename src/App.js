import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  author = `Samagra`
  render() {
    return (
      <div>
        First class based react component by {this.author}
      </div>
    )
  }
}

