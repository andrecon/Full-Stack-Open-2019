// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// const App = () => (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()

// import React from 'react'
import ReactDOM from 'react-dom'

import React, {useState} from 'react'

const Display = ({counter}) => {
    return(
        <div>
            {counter}
        </div>
    )
}

const Button = ({onClick, text}) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const App = (props) => {
    const [counter, setCounter] = useState(0);

    const setToValue = (value) => setCounter(value)

    //Double Arrow function example
    /*
    const setToValue = (value) => () => setCounter(value)
    */

    return(
        <div>
            <Display counter={counter}/>
            <Button onClick={() => setToValue(counter + 1)} text="+" />
            <Button onClick={() => setToValue(counter - 1)} text="-" />
            <Button onClick={() => setToValue(0)} text="Reset" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

//-----------------------------------------------------------------------------
// //Defined a new component : React component names must be capitalized
// const Header = (props) => {
//     return(
//         <div>
//             <h1>{props.course}</h1>
//         </div>
//     )
// }

// const Part = (props) => {
//     return(
//         <div>
//             {props.partData}
//         </div>
//     )
// }

// const Content = (props) => {
//     var items = []

//     for(const [, content] of props.parts.entries() ) {
//         items.push(<p> {content.name} {content.exercises}  </p>)
//     } 

//     //Using pop method will give us the last item in the array, so we reverse it!
//     items = items.reverse()
    
//     return(
//         <div>
//             <Part partData = {items.pop()}/>
//             <Part partData = {items.pop()}/>
//             <Part partData = {items.pop()}/>
//         </div>
//     )
// }

// const Total = (props) => {
//     var total = 0
//     for(const data of props.exercises){
//         total += data.exercises
//     }
//     return(
//         <div>
//             <p> Number of excercises {total}</p>
//         </div>
//     )
// }

// const Footer = (props) => {
//     return(
//         <>
//             App created by
//             <a href="https://github.com/andrecon"> {props.author} </a>
//         </>
//     )
// }

// const App = () => {
//     const course = {
//         name: 'Half Stack application development',
//         parts: [
//           {
//             name: 'Fundamentals of React',
//             exercises: 10
//           },
//           {
//             name: 'Using props to pass data',
//             exercises: 7
//           },
//           {
//             name: 'State of a component',
//             exercises: 14
//           }
//         ]
//       }

//       const date = new Date();
//       const name = "Andres";
//     return(
//         <div>
//             <p> Hello, Today is {date.toString()}</p>
//             <Header course={course.name} />
//             <Content parts={course.parts} />
//             <Total exercises={course.parts} />
//             <Footer author={name} />
//         </div>
//     )
// }
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// const Hello = ({name, age}) => {

//     const bornYear = () => new Date().getFullYear()-1 - age

//     return (
//         <div>
//             <p>
//                 Hello {name}, you are {age} years old.
//             </p>
//             <p>So you were probably born in {bornYear()} </p>
//         </div>
//     )
// }

// const App = () => {
//     const name = "Andres";
//     const age = 22;

//     return(
//         <div>
//             <Hello name={name} age={age}/> 
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// const App = ({counter}) => {
//     return(
//         <div>
//             {counter}
//         </div>
//     )
// }

// let counter = 1


// const refresh = () => {
//     ReactDOM.render(<App counter={counter} />, document.getElementById('root'));
// }

// setInterval( () => {
//     refresh()
//     counter+=1
// },1000 )
//-----------------------------------------------------------------------------
