import React from 'react'
import Person from './Person'

const Persons = ({filter, person}) => {
    const filterNames = (filter === '') ?  person : person.filter(function(individual) { 
        return (individual.name.toUpperCase().includes(filter.toUpperCase()))
    })
    console.log(filterNames)
  
    const names = () => filterNames.map (individual => 
        <Person key={individual.name} person={individual.name} number={individual.number} />
    )

    return(
        <div>
            {names()}
        </div>
    )
}

export default Persons