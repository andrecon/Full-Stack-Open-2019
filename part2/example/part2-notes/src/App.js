import React from 'react'
import Course from './components/Course'
import Title from './components/Title'

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  const courseData = (course) => course.map(course => course) 

  const coursesData = courseData(courses)

  const displayCourse = (courses) => courses.map( course => <Course key={course.id} courses={course} />)

  return (
    <div>
      <Title title="Web Development Curriculum" />
      {displayCourse(coursesData)}
    </div>
  )
}

export default App
