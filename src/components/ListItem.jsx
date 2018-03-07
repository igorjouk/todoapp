import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickClose() {
    this.props.removeItem(this.props.index);
  }

  onClickDone() {
    this.props.markAsDone(this.props.index);
  }

  render() {
    var done = this.props.item.done;
    var doneState = (doneState) => {
      var classStates = {};
      if(doneState) {
        classStates.itemDone = "done"
        classStates.glyphSymbol = "glyphicon-trash"
      } else {
        classStates.itemDone = "undone"
        classStates.glyphSymbol = "glyphicon-ok"
      }
      return classStates
    };

    return(
      <div >
        <span className={'glyphicon glyphicon-ok icon ' + doneState(done).glyphSymbol}
          onClick={this.onClickDone}>
        </span>
        {this.props.item.value}
        <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
      </div>
    );
  }
}
