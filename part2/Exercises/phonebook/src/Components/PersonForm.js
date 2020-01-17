import React from 'react'

const PersonForm = ({name, setNewName, number, setNewNumber, person, setPerson}) => {

    const addName = (event) => { 
        event.preventDefault()
        let found = person.find(person => person.name === name)
        if (found === undefined){
            //do computation
            const nameObject = {
              name: name,
              number: number
            }
            setPerson(person.concat(nameObject))
        }
        else {
          window.alert(`${name} is already added to phonebook`)
        }
        setNewName('')
        setNewNumber('')
    }

    const handleNewName = (event) => {
        setNewName(event.target.value)
    }
    
    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }

    return(
        <form onSubmit={addName}>
            <div>
                name: <input value={name} onChange={handleNewName} />
            </div>
            <div>
                number: <input value={number} onChange={handleNewNumber} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default PersonForm