// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

import React from 'react'
import Note from './components/Note'


//Destructuring assignment of props
const App =({notes}) => {
    // const {notes} = props

    // const rows = () => notes.map(note => 
    //     <li key={note.id}> 
    //         {note.content}
    //     </li>
    // )

    //or, however, not recommended

    // const rows = () => notes.map( (note,i) =>
    //     <li key={i}>
    //         {note.content}
    //     </li>
    // )

    const rows = () => notes.map( (note,i) =>
        <Note key={i} note={note} />
    )

    const result = notes.map( note => note.content)

    console.log(result)

    return(
        <div>
            <h1> Notes </h1>
            <ul>
                {rows()}
            </ul>
        </div>
    )
}


export default App;
