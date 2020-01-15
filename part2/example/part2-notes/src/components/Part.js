import React from 'react'

const Part = ({part, exercise}) => {
    return(
      <tr>
          <td>{part}</td>
          <td>{exercise}</td>
      </tr>
    )
  }

  export default Part