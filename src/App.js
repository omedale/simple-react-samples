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

  switchNameHandler = (newName) => {
    this.setState((prevSate, props) => {
      const personList = [...prevSate.persons]
      personList[1].name = newName;
      personList[1].age = 0
      return {
        persons: personList
      }
    })
  }


  render() {
    return (
      <div className="App">
      <h1> hello</h1>
      <button onClick={() => this.switchNameHandler('Joy')}>Switch name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Kunle')}  />
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}>
        My hoobies: Driving
      </Person>
      </div>
    );
  }
}

export default App;


// Using functional useState() hook
// const app = pros => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Medale', age: 34 },
//       { name: 'Femi', age: 16 },
//       { name: 'Ayo', age: 20 }
//     ]
//   })

//   const switchNameHandler = () => {
//     setPersonsState((prevSate, props) => {
//       const personList = [...prevSate.persons]
//       personList[1].name = "Faith";
//       personList[1].age = 0
//       return {
//         persons: personList
//       }
//     })
//   }

//     return (
//       <div className="App">
//       <h1> hello</h1>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
//         My hoobies: Driving
//       </Person>
//       </div>
//     );
// }

// export default app;