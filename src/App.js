import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ListItems from './components/ListItems';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markAsDone = this.markAsDone.bind(this);
    this.editItem = this.editItem.bind(this);
    this.state = {
      items: this.props.items
    };
  }

  addItem(newValue) {
    this.state.items.unshift({
      index: this.state.items.length + 1,
      value: newValue,
      done: false,
      edit: false
    });

    this.setState({items: this.state.items});
  }

  removeItem(index) {
    this.state.items.splice(index, 1);
    this.setState({items: this.state.items});
  }

  markAsDone(index) {
    var item = this.state.items[index];
    this.state.items.splice(index, 1);
    item.done = !item.done;
    item.done ? this.state.items.push(item) : this.state.items.unshift(item);
    this.setState({items: this.state.items});
  }

  editItem(index) {
    var item = this.state.items[index];
    item.edit = !item.edit;
    this.setState({items: this.state.items});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <InputForm addItem={this.addItem}/>
        <ListItems items={this.props.items} removeItem={this.removeItem}
          markAsDone={this.markAsDone} editItem={this.editItem}/>
      </div>
    );
  }
}
