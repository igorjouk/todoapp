import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ListItems from './components/ListItems';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    };
  }

  addItem(item) {
    console.log("add item", item);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <InputForm addItem={this.addItem}/>
        <ListItems items={this.props.items}/>
      </div>
    );
  }
}
