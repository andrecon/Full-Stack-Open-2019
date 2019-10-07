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

// const course = {
//     title: 'Half Stack application development',
//     part1: {
//         title: 'Fundamentals of React',
//         exercisesNumber: 10
//       },
//     part2: {
//         title: 'Using props to pass data',
//         exercisesNumber: 7
//     },
//     part3: {
//         title: 'State of a component',
//         exercisesNumber: 14
//     }
// }

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    var partArray = [part1.name,part2.name,part3.name]
    var excerciseArray = [part1.exercises,part2.exercises,part3.exercises]


    console.log(course.part1)
    return(
        <div>
            <Header course={course.title} />
            <Content parts={partArray} excercise={excerciseArray} />
            <Total exercises={excerciseArray} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
