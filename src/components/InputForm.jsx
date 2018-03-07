import React, {Component} from 'react';

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickSort = this.onClickSort.bind(this);
  }

  componentDidMount() {
    this.refs.itemName.focus();
  }

  onSubmit(event) {
    event.preventDefault();
    var newValue = this.refs.itemName.value;

    if(newValue) {
      this.props.addItem(newValue);
      this.refs.form.reset();
    }
  }

  onClickSort() {
    this.props.sortItems();
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <input type="text" ref="itemName" placeholder="Insert new task"/>
        <input type="submit" className="btn btn-default" value="Add task"/>
        <button onClick={this.onClickSort}
          className="sort-btn glyphicon btn btn-default glyphicon glyphicon-arrow-down"/>
      </form>
    );
  }

}
