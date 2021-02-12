import React, { Fragment, useState, useEffect } from 'react'
import { WeatherMap } from './WeatherMap'
import { weatherService } from '../services/WeatherService'


export const Search = () => {

    let [search,setSearch] = useState('')
    let [response,setResponse] = useState({})

    useEffect(() => {
        console.log(response)
    }, [response])

    const handleChange = (event) => {
        setSearch(event.target.value)
        console.log('SearchBar::handleChange::',search);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('SearchBar::handleSubmit::',search);
        // requete a openWeatherApi
        weatherService.getMeteoByVille(search).then( res => {
            setResponse(res)
        })          
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        margin:"10px",
        alignItems: 'center',
        color: 'antiqueWhite'
    }

    return (
        <Fragment>
            <form style={containerStyle} onSubmit={handleSubmit}>
                <h3 >Rechercher une ville:</h3>
                <input type="text" name="search" className="searchInput" onChange={handleChange}/>
                <button type="submit" >Chercher</button>
            </form>
            { response === {} ? <p>No Info</p> : <WeatherMap res={response}/> }

        
            
        </Fragment>
)
}
