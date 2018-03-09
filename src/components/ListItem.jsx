import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ListItem.css'

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
  }

  componentDidUpdate() {
    if(this.props.item.edit) {
      this.refs.textarea.focus();
    }
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
        classStates.glyphSymbol = "glyphicon-repeat"
      } else {
        classStates.itemDone = "undone"
        classStates.glyphSymbol = "glyphicon-ok"
      }
      return classStates
    };

    return(
      <li className="list-group-item">
        <div className={doneState(done).itemDone}>
          <span className={'glyphicon glyphicon-ok icon ' + doneState(done).glyphSymbol}
            data-placement="bottom" title={'Mark as ' + doneState(!done).itemDone}
            onClick={this.onClickDone}>
          </span>
          <span data-placement="bottom" title="Edit item"
            className='glyphicon glyphicon-pencil icon' onClick={this.onClickEdit}/>
          {this.props.item.value}
          <button data-placement="bottom" title="Remove item"
            type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>
    );
  }

  renderEdit() {
    return (
        <li className="list-group-item">
          <textarea className="textarea" ref="textarea" onKeyPress={this.handleKeyPressed}
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
