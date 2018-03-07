import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
  }

  onClickClose() {
    this.props.removeItem(this.props.index);
  }

  onClickDone() {
    this.props.markAsDone(this.props.index);
  }

  onClickEdit() {
    this.props.editItem(this.props.index);
  }

  onClickSave() {
    this.props.saveItem(this.props.index, this.refs.textarea.value)
  }

  handleKeyPressed(e) {
    if(e.key === "Enter") {
      this.onClickSave();
    }
  }

  renderNormal() {
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
        <span className='glyphicon glyphicon-pencil icon' onClick={this.onClickEdit}/>
        {this.props.item.value}
        <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
      </div>
    );
  }

  renderEdit() {
    return (
        <li>
          <textarea ref="textarea" onKeyPress={this.handleKeyPressed}
            defaultValue={this.props.item.value}>
          </textarea>
          <button type="button" onClick={this.onClickSave}>Save</button>
        </li>
    );
  }

  render() {
    if(this.props.item.edit) {
      return this.renderEdit()
    }
    else {
      return this.renderNormal()
     }
  }
}
