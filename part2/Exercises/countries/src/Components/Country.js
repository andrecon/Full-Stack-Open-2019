import React, {useState} from 'react'
import SpecifiedCountry from './SpecifiedCountry'

const Country = ({country}) => {
    const [showInfo, setShowInfo] = useState(false)

    const displaySpecificInfo = () =>  <SpecifiedCountry key={country.alpha2Code} country={country.name} capital={country.capital} population={country.population} languages={country.languages} flag={country.flag}/>

    return(
        <div>
            {country.name} 
            <button onClick={() => setShowInfo(!showInfo)}> Show </button>
            {showInfo ? displaySpecificInfo() : <div></div>}
        </div>
    )
}

export default Country