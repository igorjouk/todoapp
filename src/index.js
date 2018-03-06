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
  ]
};

ReactDOM.render(<App items={initialObjects.items}/>, document.getElementById('root'));
registerServiceWorker();
