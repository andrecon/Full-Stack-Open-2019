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

import React from 'react'
import ReactDOM from 'react-dom'


//Defined a new component : React component names must be capitalized
const Header = (props) => {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    return(
        <div>
            {props.partData}
        </div>
    )
}

const Content = (props) => {
    var items = []

    for(const [index, content] of props.parts.entries() ) {
        items.push(<p> {content} {props.excercise[index]}  </p>)
    } 

    //Using pop method will give us the last item in the array, so we reverse it!
    items = items.reverse()
    
    return(
        <div>
            <Part partData = {items.pop()}/>
            <Part partData = {items.pop()}/>
            <Part partData = {items.pop()}/>
        </div>
    )
}

const Total = (props) => {
    var total = 0
    for(const data of props.exercises){
        total += data
    }
    return(
        <div>
            <p> Number of excercises {total}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = "State of a component"
    const exercises3 = 14

    var partArray = [part1,part2,part3]
    var excerciseArray = [exercises1,exercises2,exercises3]


    return(
        <div>
            <Header course={course} />
            <Content parts={partArray} excercise={excerciseArray} />
            <Total exercises={excerciseArray} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
