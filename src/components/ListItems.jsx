import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListItems extends Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return(
        <ListItem key={index} index={index} item={item}
          removeItem={this.props.removeItem} markAsDone={this.props.markAsDone}/>
      );
    });
    return(
      <ul>{items}</ul>
    );
  }
}
