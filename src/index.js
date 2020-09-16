import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'

// when this code is comnpiled , the babel will convert
// it using the function React.createElement()
// so we can directly create react elements by simple js code
const element = <h1>Quick TEST</h1>;

// this will be a react element
console.log(element);

ReactDOM.render(< App /> , document.getElementById("root") );

// when saveing the file will reload the file 
// this is called as "Hot module reloading"