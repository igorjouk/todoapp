import React, {Component} from 'react';

export default class InputForm extends Component {
  render() {
    return (
      <form>
        <input type="text" ref="itemName" placeholder="Insert new task"/>
        <input type="submit" className="btn btn-default" value="Add task"/>
      </form>
    );
  }

}
