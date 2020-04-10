import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person';

class App extends Component {
  state = {
    persons: [
      {id: 'abs', name: 'Max', age: 28 },
      {id: 'kdk', name: 'Nathan', age: 23 },
      {id: 'uoi', name: 'Cheri', age:21 }
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  //copies the state array, removes the clicked element from that array, then sets the state to the new array
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); functions the same as the line after
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
                <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                key={person.id}
              />
            ); 
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //assignedClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold'}
    }

    return (
         <div className={classes.App}>
          <h1>This is a React App</h1>
          <p className={assignedClasses.join(' ')}>this is really working</p>

          <button className={btnClass} alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Person
          </button>
         
           {persons}
      </div>
    );
  }
}

export default (App);