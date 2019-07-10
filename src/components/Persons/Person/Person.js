import React, { Component } from 'react';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus() 
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Person, shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevSate) {
    console.log('Person, getSnapshotBeforeUpdate')
    return {message: 'snapshout'};
  }

  componentDidUpdate(prevProps, prevSate, snapshot) {
    console.log('Person, componentDidUpdate')
    console.log(snapshot)
  }
  render() {
  return (
    <React.Fragment>
       {this.context.authenticated ? <p>isAuthenticated</p> : null}
      <p onClick={this.props.click}> I am { this.props.name } and I am {this.props.age} years olds</p>
      <p onClick={this.props.deletePerson}>{this.props.children}</p>
      <input
        // ref={(inputEle) => {
        //   console.log(inputEle)
        //   this.inputElement = inputEle
        // }}
        ref={this.inputElementRef}
       type="text" onChange={this.props.changed} value={this.props.name}/>
    </React.Fragment>
    )
  }
};

export default Person;