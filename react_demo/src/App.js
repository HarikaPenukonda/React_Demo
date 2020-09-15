import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Harika', age:25 },
      { name: 'Sindhu', age:23 },
      { name: 'Anjali', age:21 }

    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Watching Movies</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>


      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work now?') ); // complex code that's why we use above code as it is simple and easy to understand
  }
}

export default App;
