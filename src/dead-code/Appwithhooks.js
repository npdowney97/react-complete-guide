import React, { useState } from 'react';
import './App.css';
import Person from '../Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Nathan', age: 23 },
      { name: 'Cheri', age:21 }
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  //this switchNameHandler is a function within the App function this is used in react hooks often
  const  switchNameHandler = () => {
    //console.log('Was clicked!');
    //POOOOP this.state.persons[0].name = 'Maxamilian';
    setPersonsState({
      persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Nathan', age: 23 },
        { name: 'Cheri', age:22 }
      ]
     });
  }

  return (
    <div className="App">
      <h1>Hi Im react</h1>
      <button onClick={switchNameHandler}>SwitchName</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/> 
    </div>
  );
}

export default App;



/* this is old code that had app as a class based component
class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Nathan', age: 23 },
      { name: 'Cheri', age:21 }
    ]
  }

 
*/