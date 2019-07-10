import React,  {PureComponent} from 'react'
import Person from './Person/Person';

class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Persons, shouldComponentUpdate')
  //   if (nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed
  //     ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  render() {
    return this.props.persons.map((person, index) => {
      return <Person
              deletePerson={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(e) => this.props.changed(e, person.id)}
              >
              Delete
            </Person>
      })
  }
}
export default Persons
