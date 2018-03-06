import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListItems extends Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return(
        <ListItem key={index} index={index} item={item}/>
      );
    });
    return(
      <ul>{items}</ul>
    );
  }
}
