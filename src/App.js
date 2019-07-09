import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Medale', age: 34 },
      { name: 'Femi', age: 16 },
      { name: 'Ayo', age: 20 }
    ]
  }

  switchNameHandler = () => {
    this.setState((prevSate, props) => {
      const personList = [...prevSate.persons]
      personList[1].name = "Faith";
      personList[1].age = 0
      return {
        person: personList
      }
    })
  }


  render() {
    return (
      <div className="App">
      <h1> hello</h1>
      <button onClick={this.switchNameHandler}>Switch name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
        My hoobies: Driving
      </Person>
      </div>
    );
  }
}

export default App;
