import React, {useState} from 'react'
import Person from './Components/Person'


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

    // console.log(person)
    const addName = (event) => { 
      event.preventDefault()
      // console.log("Button pressed", event)
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
      // console.log(event.target.value)
      setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
      setNewNumber(event.target.value)
      // console.log('number: ', number)
    }

    const handleFilter = (event) => {
      setFilter(event.target.value)
    }

    // console.log(person.map(indiv => indiv.name))

    // const validate = function(name) {
    //   if(name.toUpperCase().includes(filter.toUpperCase()) === true)
    //   {
    //     return name
    //   }
    // }
    const filterNames = (filter === '') ?  person : person.filter(function(individual) { 
      return (individual.name.toUpperCase().includes(filter.toUpperCase()))
    })
    console.log(filterNames)

    // const names = () => person.map( individual => 
    //   <Person key={individual.name} person={individual.name} number={individual.number}/>  
    
    // )
    const names = () => filterNames.map (individual => 
        <Person key={individual.name} person={individual.name} number={individual.number} />
      )


    return(
        <div>
            <h2>Phonebook</h2>
            <div>
              Fiter shown with <input value={filter} onChange={handleFilter} />
            </div>
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
            <h2>Numbers</h2>
            <div>
              {names()}
            </div>
        </div>
    )
}

export default App
