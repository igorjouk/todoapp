import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
  }

  onClickClose() {
    this.props.removeItem(this.props.index);
  }

  render() {
    return(
      <div >
        {this.props.item.value}
        <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
      </div>
    );
  }
}
