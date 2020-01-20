import React from 'react'
import Country from './Country'
import SpecifiedCountry from './SpecifiedCountry'

const Countries = ({filter, countries}) => {

    const filterCountries = (filter === '') ? countries : countries.filter( function(country) {
        return (country.name.toUpperCase().includes(filter.toUpperCase()))
    })

    const country = () => filterCountries.map(country => 
         <Country key={country.name} country={country} />   
    )

    const displaySpecificInfo = () => filterCountries.map(country => 
         <SpecifiedCountry key={country.alpha2Code} country={country.name} capital={country.capital} population={country.population} languages={country.languages} flag={country.flag}/>
    )

    const displayCountries = ( function(filteredCountries) {
        if(filteredCountries.length === countries.length)
        {
            return(
                <div>
                </div>
            )
        }

        if(filteredCountries.length === 1)
        {
            return displaySpecificInfo()
        }

        else if(filteredCountries.length <= 10 && filteredCountries.length > 1)
        {
            return country()
        }
        else if(filterCountries.length > 10)
        {
            return(
                <div>
                    Too many matches, specify another filter
                </div>
            )
        }
        else
        {
            return(
                <div>
                    No country found.
                </div>
            )
        }
    })

    return(
        <div>
            {displayCountries(filterCountries)}
        </div>
    )
}

export default Countries