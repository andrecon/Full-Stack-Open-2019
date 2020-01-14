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


const History = (props) => {
  if(props.allClicks.length === 0 ) {
    return(
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      Button press history: {props.allClicks.join(' ')}
    </div>
  )
}


//Passing Event Handlers to Child Components
const Button = ({onClick, text}) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = (props) => {
//----------------------------------------
  // const [clicks, setClicks] = useState({
  //   left: 0,
  //   right: 0
  // })

  // // const handleLeftClick = () => {
  // //   const newClicks = {
  // //     ...clicks,
  // //     left: clicks.left + 1,
  // //   }

  // //   setClicks(newClicks)
  // // }

  // // const handleRightClick = () => {
  // //   const newClicks = {
  // //     ...clicks,
  // //     right: clicks.right + 1
  // //   }

  // //   setClicks(newClicks)
  // // }

  // const handleLeftClick = () => {
  //   setClicks({...clicks, left: clicks.left +1})
  // }

  // const handleRightClick = () => {
  //   setClicks({...clicks, right: clicks.right + 1})
  // }
  
//----------------------------------------

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  //Every click is stored into a separate piece of state called allClicks that is initialized as an empty array:
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }

  const hello = (who) => {
    return () => {
      console.log("Hello, ", who)
    }
  }
  
  return(
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='Left'/>
        <Button onClick={handleRightClick} text='Right'/>
        {right}
        <History allClicks={allClicks}/>
      </div>
      <Button onClick={hello("Andres")} text="Greeting" />
      <Button onClick={hello("New User")} text="Greeting" />
    </div>
  )
  }

ReactDOM.render(<App/>, document.getElementById('root'))
