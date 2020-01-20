import React, {useState, useEffect} from 'react'

import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'

import axios from 'axios'

const App = () => {
    const [person, setPerson] = useState([])
    const [name, setNewName] = useState('')
    const [number, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')


    //Using Effect hook
    useEffect( () => {
        console.log("effect")
        axios.get('http://localhost:3001/persons').then( response => {
            console.log("promise fullfilled")
            setPerson(response.data)
        })
    }, [])
    
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
