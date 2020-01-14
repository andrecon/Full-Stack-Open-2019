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


const Text = ({title}) => {
  return(
    <div>
      <h1>{title}</h1>
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

const Statistic = ({text,value}) => {
  return(
    <tr>
      <td>{text} </td> 
      <td> {value}</td>
    </tr>
  )
}


const Statistics = ({positive, negative, neutral, title}) =>{
  const total = positive+negative+neutral

  if(total === 0)
  {
    return(
      <div>
        <h1> {title} </h1>
        No Feedback Given.
      </div>
    )
  }

  const trueScore = positive - negative

  const average = trueScore/total

  const positiveScore = (positive / total) * 100

  return(
    <div>
      <Text title={title} />
      <table>
        <tbody>
            <Statistic text="Good" value={positive} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={negative} />
            <Statistic text="All" value={total} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positiveScore} />
        </tbody>
      </table>
    </div>
  )


  
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const title = "Give Feedback"
  const stats = "Statistics"

  const countGood = (data) => () => setGood(data)  
  const countBad = (data) => () => setBad(data)
  const countNeutral = (data) => () => setNeutral(data)

  return(
    <div>
      <Text title={title} />
      <Button onClick={countGood(good + 1)} text="Good" />
      <Button onClick={countNeutral(neutral +1)} text="Neutral" />
      <Button onClick={countBad(bad +1)} text="Bad" />
      <Statistics title={stats} positive={good} negative={bad} neutral={neutral} />      
    </div>
  )
  }

ReactDOM.render(<App/>, document.getElementById('root'))
