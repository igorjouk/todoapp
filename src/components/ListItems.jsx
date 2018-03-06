import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListItems extends Component {
  render() {
    const items = this.props.items;
    return(
      <div>
        <ListItem item={items[0].value}/>
        <ListItem item={items[1].value}/>
        <ListItem item={items[2].value}/>
      </div>
    );
  }
}
