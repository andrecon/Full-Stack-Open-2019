import React, {useState, useEffect} from 'react'
import Note from './components/Note'
import axios from 'axios'



//Destructuring assignment of props
const App =(props) => {
    
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('A new note...')
    const [showAll, setShowAll] = useState(true)


    //Effect Hooks takes a function (Effects) and then the effect is only run along with the first render of the component.
    useEffect( () => {
        console.log("effect")
        axios.get('http://localhost:3001/notes').then(response => {
            console.log("promise fullfilled")
            setNotes(response.data)
        })
    }, [] )

    //Or like this..
    /*
    useEffect(() => {
        console.log('effect')

        //reference to an event handler function
        const eventHandler = response => {
            console.log('promise fulfilled')
            setNotes(response.data)
        }

        const promise = axios.get('http://localhost:3001/notes')
        promise.then(eventHandler)
    }, [])
    */

    console.log('render', notes.length, 'notes')

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
