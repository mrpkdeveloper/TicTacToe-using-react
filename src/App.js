import React from 'react';
import Game from './Components/Game'
import './App.css';

//this is class based component (App is name of component)
class App extends React.Component {
  render() {
    return (
      <Game />
    )
  }
}


//this is a function based component 
//there is another to way which is class based 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to Hello World
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
