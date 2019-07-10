import React, { Component } from 'react';
import './App.css';
import Corkpit from '../components/Cockpits/Cockpit'
import Persons from '../components/Persons/Persons';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      persons: [
        { id: 'gjvehf', name: 'Medale', age: 34 },
        { id: 'gvjhef', name: 'Femi', age: 16 },
        { id: 'vbifk', name: 'Ayo', age: 20 }
      ],
      showPersons: false,
      showCockpit: true,
      authenticated: false
    }  
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('App,  componentDidUpdate')
  }

  shouldComponentUpdate(prevProps, prevSate) {
    console.log('App,  shouldComponentUpdate')
    return true
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
    if (this.state.showPersons) {
      persons = (
        <div>
        <Persons
          isAuthenticated={this.state.authenticated}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}  />
        </div>
      )
    }
    return (
      <div className="App">
      <button onClick={() => {
        this.setState({showCockpit: false})
      }}>remove cockpit</button>
        <AuthContext.Provider value={{ 
          authenticated: this.state.authenticated,
          login: this.loginHandler }}>
          {this.state.showCockpit ? 
            (<Corkpit 
              persons={this.state.persons}
              title={this.props.appTitle} clicked={this.togglePersonsHandler}/>)
              : null}
          {persons}
        </AuthContext.Provider>
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