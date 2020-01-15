import React from 'react'
import Header from './Header'
import Content from './Content'

import Sum from './Sum'

const Course = ({ course }) => {

  const parts = course.parts.map(part => part.exercises)
  return (
    <div>
      <Header header={course.name} />
      <Content course={course} />
      <Sum parts={parts} />
    </div>
  )
}

export default Course