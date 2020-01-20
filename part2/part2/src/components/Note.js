//Because this is a React-component, we must import React.
import React from 'react'

//separate displaying a single note into its own component Note:
const Note = ({note}) => {
    return(
        <li key={note.id}> {note.content} </li>
    )
}

//The last line of the module exports the declared module, the variable Note.
export default Note