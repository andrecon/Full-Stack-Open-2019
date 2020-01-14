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

const StatsInfo = ({category, count}) => {
  return(
    <div>
      {category} : {count}
    </div>
  )
}

const Total = ({total, title}) => {
  return(
    <div>
      {title} : {total}
    </div>
  )
}

const Average = ({positive, negative, neutral, title}) => {
  const total = positive + negative + neutral

  if(total === 0)
  {
    return(
      <div>
        {title} : 0
      </div>
    )
  }

  const trueScore = positive - negative

  const average = trueScore/total

  return(
    <div>
      {title} : {average}
    </div>
  )
}

const PositiveStats = ({title, positive, negative, neutral}) => {
  const total = positive + negative + neutral

  if(total === 0)
  {
    return(
      <div>
        {title} : 0
      </div>
    )
  }

  const stats = (positive / total) * 100

  return(
    <div>
      {title} : {stats} %
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
      <Text title={stats} />
      <StatsInfo category="Good" count={good} />
      <StatsInfo category="Neutral" count={neutral} />
      <StatsInfo category="Bad" count={bad} />

      <Total title="All" total={good+neutral+bad} />
      <Average title="Average" positive={good} negative={bad} neutral={neutral} />
      <PositiveStats title="Positive" positive={good} negative={bad} neutral={neutral} />
      
    </div>
  )
  }

ReactDOM.render(<App/>, document.getElementById('root'))
