import { ListItemButton, ListItemText } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Main = () =>{
  const [countiesList, setCountriesList] = useState([])
  const [error, setError] = useState(null)
  
  useEffect(() =>{
    const fetchData = async () =>{
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name')
        const dataCountries =  await response.json()
        const sortedDataCounties = dataCountries.sort((a, b) => a.name.common.localeCompare(b.name.common))
        
        setCountriesList(sortedDataCounties)
      } catch (error) {
        setError(error)
      }
    } 

    fetchData()
  }, [])

  if(error) return <div> Something wrong...</div>
  
  return (
    <div className="App">
      <div className='counties'>
        <ul>
          {countiesList.map(el =>(
            <ListItemButton component={Link} to={`/country/${el.name.common}`} key={el.name.common}>
              <ListItemText primary={el.name.common} />
            </ListItemButton>
            )
          )}
        </ul>
      </div>
    </div>
  );
}