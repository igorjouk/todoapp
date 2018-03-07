import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var initialObjects = {
  items: [
    {index: 1, value: "Help GrandMa", done: false, edit: false},
    {index: 2, value: "Save the World", done: false, edit: false},
    {index: 3, value: "Learn React", done: false, edit: false}
  ],
  sortingDirection: "ascending"
};

var defaultItems = JSON.parse(localStorage.getItem('items')) || initialObjects;

ReactDOM.render(
  <App items={defaultItems.items} sortingDirection={defaultItems.sortingDirection}/>,
  document.getElementById('root'));
registerServiceWorker();
