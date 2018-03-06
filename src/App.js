import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import ListItems from './components/ListItems'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ListItems/>
      </div>
    );
  }
}
