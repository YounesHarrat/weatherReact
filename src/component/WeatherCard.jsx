import React, {Fragment, useEffect, useState} from 'react'

export const WeatherCard = (props) => {

    let [data , setData] = useState({})

    useEffect(() => {
        console.log('WeatherCard initialize:: props::', props)
        handleData(props.data)
    }, [props])


    const handleData = (data)=>{
        if (data) {
            setData(data)
            console.log(data);
            
        } else {
            console.log('no data')
        }
        
    }

    const spacer = {
        display: "flex" ,
        justifyContent: 'space-between',
    }

    const card = 
        (<Fragment>
            <h1>  {data.name}   </h1>
            <br/>
            <div>
                { data.weather && data.main &&
                <div style={spacer}>
                    {/* a gauche */}
                    <span>
                        <img src={data.weather[0].icon} alt="" />
                        <desc>{data.weather[0].description}</desc>
                        <span style={spacer}></span>
                        <desc>Température : {data.main.temp}</desc>
                    </span>
                    <hr/>
                </div>}
                { data.main &&
                <ul>
                    <li>Ressenti : {data.main.feels_like}°C </li>
                    <li>Min : {data.main.temp_min}°C </li>
                    <li>Max : {data.main.temp_max}°C </li>
                    <li>Humidité : {data.main.humidity}% </li>
                    <li>Pression : {data.main.pressure}hPa </li>
                </ul>
                }
            </div>
        </Fragment>);
    

    return (
        <div>
            {card}
        </div>
    )
}
