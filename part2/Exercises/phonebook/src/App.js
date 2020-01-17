import React, {useState} from 'react'

import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'


const App = () => {
    const [person, setPerson] = useState([
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' },
      { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [name, setNewName] = useState('')
    const [number, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
  
    return(
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter} />
            <h3> Add More Information</h3>
            <PersonForm name={name} setNewName={setNewName} number={number} setNewNumber={setNewNumber} person={person} setPerson={setPerson}/>
            <h2>Numbers</h2>
            <Persons filter={filter} person={person}/>
        </div>
    )
}

export default App
