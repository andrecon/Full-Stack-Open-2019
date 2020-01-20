import React, {useState, useEffect} from 'react'
import Language from './Language'
import axios from 'axios'

const SpecifiedCountry = ({country, capital, population, languages, flag}) => {
    const [weather, setWeather] = useState([])
    const [seeWeather, setSeeWeather] = useState(false)

    useEffect( () => {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${country}`).then(result => {
            setWeather(result.data)
            setSeeWeather(!seeWeather)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[country])

    const displayLanguages = () => languages.map((language) => <Language key={language.iso639_1} language={language.name} /> )
    
    return(
        <div>
            <hr/>
            <h1>{country}</h1>
            <div>
                Capital : {capital}
            </div>
            <div>
                Population : {population}
            </div>
            <div>
                <h3>
                    Languages
                </h3>
                <ul>
                    {displayLanguages()}
                </ul>
            </div>
            <div>
                <img src={flag} alt={country} width="150"/>
            </div>
            {seeWeather ? 
                <div>
                    <h2>Weather in {capital}</h2>
                    <strong>Temperature:</strong> {weather.current.temperature} celsius
                    <div>
                        <img src={weather.current.weather_icons[0]} alt={country} width="100"/>
                    </div>
                    <strong> Wind:</strong> {weather.current.wind_speed} kph direction {weather.current.wind_dir}  
                </div> 
                : 
                <div>
                </div>}
            <hr/>
        </div>
    )
}

export default SpecifiedCountry 