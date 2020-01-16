import React from 'react'
import Header from './Header'
import Content from './Content'

import Sum from './Sum'

const Course = ({ courses }) => {

  const parts = courses.parts.map(part => part.exercises)
  return (
    <div>
      <Header header={courses.name} />
      <Content course={courses} />
      <Sum parts={parts} />
    </div>
  )
}

export default Course