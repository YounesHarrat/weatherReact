import React, { useState, Fragment } from 'react'
import { WeatherCard } from './WeatherCard'

export const WeatherMap = (props) => {

    let [data,setData] = useState({})

    const showWeather = () => {
        setData(props.res)
        console.log('showWeather::data::',data)
    }

    // const ref = useRef(initialValue)

    const weatherCardStyle = {         
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: 'auto',
        maxWidth:"50vw",
        alignItems: 'center',
        color: 'antiqueWhite',
        backgroundColor: '#093654'
    }

    return (
        <Fragment>
        <div style={weatherCardStyle}>
            
            {data && <WeatherCard data={data} /> }
            
            
        </div>
        <button onClick={showWeather}>showWeather</button>
        </Fragment>
    )
}
