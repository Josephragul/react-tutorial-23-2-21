import './App.css';
import Persons from './Persons/Persons';
import {Component, useState} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

//  1. State Component

// class App extends Component {
//   state = {
//     Persons: [{name: 'Joseph'}, {name: 'Jack'}],
//   };

//   submitNameHandler = () => {
//     this.setState({
//       Persons: [{name: 'Rahul'}, {name: 'Joshua'}],
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h2>This is State Component Method</h2>
//         <Persons name={this.state.Persons[0].name} />
//         <Persons name={this.state.Persons[1].name} />
//         <button onClick={this.submitNameHandler}>Click Me</button>
//       </div>
//     );
//   }
// }

// export default App;




//  2. useState Component

// const App = props =>{

//   const [personsName, setPersonsName] = useState({
//     Persons : [
//       {name:"Joseph"}, {name: 'Jack'}
//     ]
//   })

//   const submitNameHandler = () =>{
//     setPersonsName({
//       Persons: [{name: 'Rahul'}, {name: 'Joshua'}],
//     });
//   }

//     return (
//       <div className="App">
//         <h2>This is useState Component Method</h2>;
//         <Persons name={personsName.Persons[0].name} />
//         <Persons name={personsName.Persons[1].name} />
//         <button onClick={submitNameHandler}>Click Me</button>
//       </div>
//     );

// }

// export default App;





//  3.Excersice

// class App extends Component {
//   state = {
//     username: '',
//     userName: '',
//   };
//   usernameChangedHandler = (event) => {
//     this.setState({username: event.target.value});
//   };

//   usernameChangedHandle = (event) => {
//     this.setState({userName: event.target.value});
//   };
//   render() {
//     return (
//       <div className="App">
//         <UserInput changed={this.usernameChangedHandler} />
//         <UserOutput userName={this.state.username} />

//         <UserInput changed={this.usernameChangedHandle} />
//         <UserOutput userName={this.state.userName} />
//       </div>
//     );
//   }
// }

// export default App;
