import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person/>  
        <Person/>
        <Person/>
         

      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work now?') ); // complex code that's why we use above code as it is simple and easy to understand
  }
}

export default App;
