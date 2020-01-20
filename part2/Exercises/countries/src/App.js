import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import Filter from './Components/Filter'
import Countries from './Components/Countries'

import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect( () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(result => {
      setCountries(result.data)
    })
  }, [])

  return(
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries filter={filter} countries={countries} />
    </div>
  )

}

export default App;
