import React from 'react'
import Part from './Part'

const Content = ({course}) => {
console.log(course.parts.map(part => part.name))

  const parts = () => course.parts.map(part => 
    <Part 
      key={part.id} 
      part={part.name} 
      exercise={part.exercises}
    />
  )

  return(
      <div>
        <table>
            <tbody>
                {parts()}
            </tbody>
        </table>
      </div>
  )

}

export default Content 