import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Harika" age="25"/>
        <Person name="Sindhu" age="23">My Hobbies: Watching Movies</Person>
        <Person name="Anjali" age="21"/>


      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work now?') ); // complex code that's why we use above code as it is simple and easy to understand
  }
}

export default App;
