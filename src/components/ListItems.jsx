import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListItems extends Component {
  render() {
    return(
      <div>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </div>
    );
  }
}
