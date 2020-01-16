import React, {useState} from 'react'
import Note from './components/Note'


//Destructuring assignment of props
const App =(props) => {
    
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('A new note...')
    const [showAll, setShowAll] = useState(true)

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: notes.length + 1,
        }

        setNotes(notes.concat(noteObject))
        setNewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    //Since we have useState to true, it will always display all notes, but if we set it to false, it will start filtering based on important notes.
    const notesToShow = showAll ? notes : notes.filter(note => note.important)

    const rows = () => notesToShow.map( note =>
        <Note key={note.id} note={note} />
    )

    return(
        <div>
            <h1> Notes </h1>
            <div>
                <button onClick={() => setShowAll(!showAll)} >
                    show {showAll ? 'Important' : "All"}
                </button>
            </div>
            <ul>
                {rows()}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}


export default App;
