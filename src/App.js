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
    this.saveItem = this.saveItem.bind(this);
    this.sortItems = this.sortItems.bind(this);
    this.state = {
      items: this.props.items,
      sortingDirection: this.props.sortingDirection
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

  saveItem(index, newValue) {
    var item = this.state.items[index];
    item.value = newValue;
    item.edit = false;
    this.setState({items: this.state.items});
  }

  sortItems() {
    if (this.state.sortingDirection === "ascending") {
      this.setState({
        items: this.sortDescending(this.state.items),
        sortingDirection: "descending"
      });
    } else {
      this.setState({
        items: this.sortAscending(this.state.items),
        sortingDirection: "ascending"
      });
    }
  }

  sortAscending(items) {
    return items.sort((a, b) =>{return a.value.toLowerCase() > b.value.toLowerCase()});
  }

  sortDescending(items) {
    return items.sort((a, b) => {return a.value.toLowerCase() < b.value.toLowerCase()});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <InputForm addItem={this.addItem}
          sortingDirection={this.state.sortingDirection} sortItems={this.sortItems}/>
        <ListItems items={this.props.items} removeItem={this.removeItem}
          markAsDone={this.markAsDone} editItem={this.editItem} saveItem={this.saveItem}/>
      </div>
    );
  }
}
