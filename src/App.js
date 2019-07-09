import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'gjvehf', name: 'Medale', age: 34 },
      { id: 'gvjhef', name: 'Femi', age: 16 },
      { id: 'vbifk', name: 'Ayo', age: 20 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.changeName(newName)
  }

  deletePersonHandler = (personIndex) => {
    // Slice() on the next line helps us to copy the array
    // const persons = this.state.persons.splice()
    const persons =  [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  changeName = (newName, id=null) => {
    let personIndex = 1
    if (id) {
      personIndex = this.state.persons.findIndex(p => {
        return p.id === id
      })
    }
    this.setState((prevSate, props) => {
      const personList = [...prevSate.persons]
      personList[personIndex].name = newName
      personList[personIndex].age = 0
      return {
        persons: personList
      }
    })
  }

  nameChangedHandler = (event, id) => {
    this.changeName(event.target.value, id)
  }

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons,
        persons: prevState.persons
      }
    });
  }

  render() {
    let persons = null;
    let classes = ['red', 'bold'].join(' ')
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                    deletePerson={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(e) => this.nameChangedHandler(e, person.id)}
                    >
                    Delete this
                  </Person>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1 className={classes}> hello</h1>
        <button onClick={this.togglePersonsHandler}>TOGGLE persons</button>
        {persons}
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