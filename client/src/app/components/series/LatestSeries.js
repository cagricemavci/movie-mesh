import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './LatestSeries.module.scss'


const LatestSeries = () => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const URL = `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US&page=1`

    useEffect(() => {
        fetchLatestSeries();
    }, [])

    const [latestSeries, setLatestSeries] = useState([])


    const fetchLatestSeries = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setLatestSeries(data)
    }   

    return (
        <div className={styles.LatestSeries}>
            <h2>Latest Series:</h2>
           <p>{latestSeries.title}</p>
           <p>{latestSeries.overview}</p>
           <p>{latestSeries.overview}</p>
           {latestSeries.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${latestSeries.poster_path}`} alt={latestSeries.title}/>}
           {latestSeries.genres && latestSeries.genres.map(genre => (
                    <li key={genre.id}>
                        {genre.name}
                    </li>    
                ))}
        </div>
    )
}

export default LatestSeries
