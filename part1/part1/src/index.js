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

const Text = ({text}) => {
  return(
    <div>
      {text}
    </div>
  )
} 


const Info = ({total}) => {

  console.log(total)
  if(total === 0)
  {
    return(
      <div>
        has 0 votes.
      </div>
    )
  }


  return(
    <div>
      has {total} votes.
    </div>
  )
}


const Stats = ({data, anecdotes}) => {
  let max = data[0];
  let maxIndex = 0;

    for (var i = 1; i < data.length; i++) {
        if (data[i] > max) {
            maxIndex = i;
            max = data[i];
        }
    }
  
    return(
      <div>
        <h1>Anecdote with most votes</h1>
        <Text text={anecdotes[maxIndex]} />
      </div>
    )

}



const App = (props) => {
  let rand = Math.floor((Math.random() * props.anecdotes.length));
  const [selected, setSelected] = useState(rand)
  const [allVotes, setAll] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))

  const randomSelector = () => {
    let selector = Math.floor((Math.random() * props.anecdotes.length));
    setSelected(selector)
  }

  const voteUp = () => {
    const copy = [...allVotes]
    copy[selected] += 1  
    setAll(copy)
  }

  return(
    <div>
      <Text text={props.anecdotes[selected]} />
      <Info total={allVotes[selected]} />
      <button onClick={voteUp}>
        Vote
      </button>
      <button onClick={randomSelector}>
        Next Anecdote
      </button>

      <Stats data={allVotes} anecdotes={props.anecdotes} />
    </div>
  )
}


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    '"Sensei," the boy finally said, "Shouldn\'t I be learning more moves?"',
    '"This is the only move you know, but this is the only move you\'ll ever need to know," the sensei replied.',
    'Not quite understanding, but believing in his teacher, the boy kept training.',
    'Several months later, the sensei took the boy to his first tournament. Surprising himself, the boy easily won his first two matches. The third match proved to be more difficult, but after some time, his opponent became impatient and charged; the boy deftly used his one move to win the match. Still amazed by his success, the boy was now in the finals.',
    '\'This time, his opponent was bigger, stronger, and more experienced. For a while, the boy appeared to be overmatched. Concerned that the boy might get hurt, the referee called a time-out. He was about to stop the match when the sensei intervened.',
    '\'"No," the sensei insisted, "Let him continue."',
    'Soon after the match resumed, his opponent made a critical mistake: he dropped his guard. Instantly, the boy used his move to pin him. The boy had won the match and the tournament. He was the champion.',
    'On the way home, the boy and sensei reviewed every move in each and every match. Then the boy summoned the courage to ask what was really on his mind.',
    '\'"Sensei, how did I win the tournament with only one move?"'
  ]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
