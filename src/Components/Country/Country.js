import { useEffect, useState } from "react" 
import { Link, useParams } from "react-router-dom" 


export const Country = () => {
  const { countryName } = useParams() 
  const [countryData, setCountryData] = useState(null) 
  const [error, setError] = useState(null) 

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`) 
        const data = await response.json()

        setCountryData(data[0]) 
      } catch (err) {
        setError(err) 
      }
    } 

    fetchCountryData() 
  }, [countryName]) 

  if(error) return <div> Something wrong...</div>
  if (!countryData) return <div>Loading...</div> 

  return (
    <div>
      <Link to="/">Back to list</Link>
      <h1>{countryData.name.common}</h1>
      <div>Name: {countryData.name.official}</div>
      <div>Capital: {countryData.capital}</div>
      <div>Car side : {countryData.car.side}</div>
      <div>
        <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} width="500" />
      </div>
    </div>

  ) 
}